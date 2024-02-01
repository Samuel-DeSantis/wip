import './App.css';
import About from './components/about';
import Header from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
