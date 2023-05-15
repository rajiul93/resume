import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About/About';
import Blog from './page/Blog/Blog';
import Contact from './page/Contact/Contact';
import Home from './page/Home/Home';
import Portfolio from './page/Portfolio/Portfolio';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    
  </Routes>
  );
}

export default App;
