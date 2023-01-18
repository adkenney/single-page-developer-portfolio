import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
