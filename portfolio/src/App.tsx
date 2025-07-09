import githubLogo from './assets/githublogo.svg'
import linkedinLogo from './assets/linkedinlogo.svg'
import './App.css'
import ProjectList from './components/ProjectList/ProjectList'

function App() {

  return (
    <main className='container'>
      <h1>Logan Masniuk</h1>
      <h2>Developer, Educator, Good Times Enthusiast.</h2>
      <h2>Projects</h2>
      <ProjectList />



      <h3>Let's Connect</h3>
      <img src={githubLogo} />
      <img src={linkedinLogo} />
    </main >
  )
}

export default App
