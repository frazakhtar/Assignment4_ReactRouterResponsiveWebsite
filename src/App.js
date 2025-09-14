import Navbar from './Components/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<h1>This is Error 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
