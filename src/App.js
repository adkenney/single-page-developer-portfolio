import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/Nav/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
