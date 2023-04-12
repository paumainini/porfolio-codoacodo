
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Nav';
import Footer from './components/footer';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
</>
  );
}

export default App;
