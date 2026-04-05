import { Routes, Route, Navigate } from "react-router-dom";
import Nav from './Nav'; 
import Home from './Home';
import Footer from './Footer';
import Articles from './Articles';
import About from './About';
import Gesture from './gesture';
import Performance from './performance'

function App() {
  return (
    <>
      <Nav />
      <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/articles" element={<Articles />} />
  <Route path="/gesture" element={<Gesture />} />
  <Route path="/performance" element={<Performance />} />
  <Route path="/about" element={<About />} />
  <Route path="/" element={<Navigate to="/home" />} />
</Routes>
      <Footer />
    </>
  );
}

export default App;
