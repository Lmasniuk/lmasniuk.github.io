import "./Connect.scss";

import githubLogo from "./../../assets/githublogo.svg";
import linkedinLogo from "./../../assets/linkedinlogo.svg";
import emailIcon from "./../../assets/email-icon.svg";

export default function Connect() {
  return (
    <section className="connect">
      <h2>Let's Connect</h2>
      <div className="connect__links">
        <img className="connect__icon" src={githubLogo} />
        <img className="connect__icon" src={linkedinLogo} />
        <img className="connect__icon" src={emailIcon} />
      </div>
    </section>
  );
}
