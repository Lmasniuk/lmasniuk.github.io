import githubLogo from './assets/githublogo.svg'
import linkedinLogo from './assets/linkedinlogo.svg'
import './App.css'
import ProjectCard from './components/ProjectCard/ProjectCard'

function App() {

  return (
    <main className='container'>
      <h1>Logan Masniuk</h1>
      <h2>Developer, Educator, Good Times Enthusiast.</h2>
      <h2>Projects</h2>
      <ProjectCard projectName="Shrek 5 Countdown" url="https://shrek5countdown.com" />
      <ProjectCard projectName="Roulette Regret" url="https://rouletteregret.bet" />
      <ProjectCard projectName="Team Genie" url="https://team-genie.netlify.app" />
      <ProjectCard projectName="Atoms Game" url="https://atomsgame.netlify.app" />
      <h3>Let's Connect</h3>
      <img src={githubLogo} />
      <img src={linkedinLogo} />
    </main >
  )
}

export default App
