const signalingServerUrl = "wss://webrtc-demo-rd3t.onrender.com";
// const signalingServerUrl = "ws://localhost:8080";

const clientId = Math.random().toString(36).substring(2, 9); // Generate a random ID
let remoteClientId = 0;
let peerConnection;
let signalingSocket;
const iceCandidatesQueue = [];

// Elements
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

// Initialize WebSocket connection
function setupSignaling() {
    signalingSocket = new WebSocket(signalingServerUrl);

    signalingSocket.onopen = connectToSignalServer;

    //Handles incoming messages from the signaling server
    signalingSocket.onmessage = processMessageFromSignalServer;

    signalingSocket.onerror = (error) =>
        console.error("Signaling error:", error);
}

// Setup WebRTC connection
async function setupWebRTC() {
    const servers = {
        iceServers: [
            {
                urls: [
                    "stun:stun1.l.google.com:19302",
                    "stun:stun2.l.google.com:19302",
                    "stun:stun3.l.google.com:19302",
                ],
            },
        ],
    };
    peerConnection = new RTCPeerConnection(servers);

    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
    localVideo.srcObject = stream;

    //This adds the audio/video data to the local webRTC stream
    stream
        .getTracks()
        .forEach((track) => peerConnection.addTrack(track, stream));

    //This will get fired when a remote peer sends a media stream track
    peerConnection.ontrack = (event) => {
        remoteVideo.srcObject = event.streams[0];
    };

    peerConnection.onicecandidate = handleIceCandidate;

    const offer = await peerConnection.createOffer();

    await peerConnection.setLocalDescription(offer);

    signalingSocket.send(
        JSON.stringify({
            messageType: "offer",
            clientId,
            payload: peerConnection.localDescription,
        })
    );
}

const handleIceCandidate = (event) => {
    if (event.candidate) {
        // if (peerConnection.remoteDescription === null) {
        //     iceCandidatesQueue.push(event.candidate);
        // } else
        if (peerConnection.remoteDescription) {
            signalingSocket.send(
                JSON.stringify({
                    messageType: "iceCandidate",
                    clientId,
                    targetClientId: remoteClientId,
                    payload: event.candidate,
                })
            );
        } else {
            iceCandidatesQueue.push(event.candidate);
        }
    }
};

const processMessageFromSignalServer = async (message) => {
    const messageData = JSON.parse(message.data);

    if (messageData.type === "signaledOffer") {
        const { payload, offeringClientId } = messageData;
        console.log("Signaled Offer Received from:" + offeringClientId);
        remoteClientId = offeringClientId;
        await peerConnection.setRemoteDescription(
            new RTCSessionDescription(payload)
        );
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);

        signalingSocket.send(
            JSON.stringify({
                messageType: "answer",
                offeringClientId: remoteClientId,
                answeringClientId: clientId,
                payload: peerConnection.localDescription,
            })
        );

        iceCandidatesQueue.forEach((candidate) => {
            console.log("we sending a candidate");
            signalingSocket.send(
                JSON.stringify({
                    messageType: "iceCandidate",
                    clientId,
                    targetClientId: remoteClientId,
                    payload: candidate,
                })
            );
        });
        iceCandidatesQueue.length = 0;

        // signalingSocket.send(
        //     JSON.stringify({
        //         messageType: "socketUsed",
        //         clientId,
        //     })
        // );
    }

    if (messageData.type === "signaledAnswer") {
        console.log("signaledAnswer message received");

        console.log(remoteClientId);
        remoteClientId = messageData.offeringClientId;
        if (remoteClientId !== 0) {
            await peerConnection.setRemoteDescription(
                new RTCSessionDescription(messageData.payload)
            );
        }
    }
    if (messageData.type === "signaledIceCandidate") {
        // console.log(messageData);
        // console.log(peerConnection);
        if (messageData.payload) {
            const candidate = new RTCIceCandidate(messageData.payload);
            await peerConnection.addIceCandidate(candidate);
        }
    }
};

const connectToSignalServer = () => {
    //This adds the client id to the available sockets(managed by the signaling server) that can be connected to
    signalingSocket.send(JSON.stringify({ messageType: "join", clientId }));
};
// Start everything
setupSignaling();
setupWebRTC();

setInterval(() => {
    console.log("Client id:" + clientId);
    console.log("Remote client id: " + remoteClientId);
}, 3000);
