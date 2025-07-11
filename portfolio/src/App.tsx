import githubLogo from './assets/githublogo.svg'
import linkedinLogo from './assets/linkedinlogo.svg'
import './App.scss'
import ProjectList from './components/ProjectList/ProjectList'

function App() {

  return (
    <main className='container'>
      <section className='hero'>

        <h1>Logan Masniuk</h1>
        <h2>Full Stack Developer, Educator, Good Times Enthusiast.</h2>

      </section>
      <section className="projects">

        <h2>Projects</h2>
        <ProjectList />
      </section>


      <section className="connect">
        <h2>Let's Connect</h2>
        <img src={githubLogo} />
        <img src={linkedinLogo} />
      </section>
    </main >
  )
}

export default App
