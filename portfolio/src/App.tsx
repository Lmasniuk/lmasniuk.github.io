import "./App.scss";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";

function App() {
  return (
    <main className="container">
      <Hero />
      <Projects />
      <Connect />
    </main>
  );
}

export default App;
