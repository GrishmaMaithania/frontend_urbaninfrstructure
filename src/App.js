
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar/Navbar';
import Home from './Components/Navbar/Home/Home';
import './App.css';
import Footer from './Components/Footer/Footer';
import Involve from './Components/Involve/Involve';
import About from './Components/About/About';
import Data from './Components/Data/Data';
import Photos from './Components/Photos/Photos';
import Pas from './Components/PAS/Pas';
function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/involve' element ={<Involve/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/data' element ={<Data/>}/>
        <Route path='/photo' element ={<Photos/>}/>
        <Route path='/pas' element ={<Pas/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
