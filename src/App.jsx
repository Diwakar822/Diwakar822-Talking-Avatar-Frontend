import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Subhomepage from './components/Subhomepage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
           
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/welcome' element={<Subhomepage/>}/>
          
        </Routes>
        <Footer />
      </div>
    
      </BrowserRouter>
   
    </div>
  );
};

export default App;