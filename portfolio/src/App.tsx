import "./App.scss";

import AboutMe from "./components/AboutMe/AboutMe";
import Connect from "./components/Connect/Connect";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main className="container">
      <Hero />
      <AboutMe />
      <Projects />
      <Connect />
    </main>
  );
}

export default App;
