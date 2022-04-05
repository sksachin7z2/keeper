// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
// import Contact from './components/Contact';

function App() {
  // const host="http://localhost:5000";
  const host="https://inotebook-prac.herokuapp.com";
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
}
  return (
        <>
        <NoteState>
        <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          
          <Route exact path="/" key="home" element={<Home showAlert={showAlert}/>}/>
          <Route exact path="/signup" key="signup" element={<Signup host={host} showAlert={showAlert}/>}/>
          <Route exact path="/login" key="login" element={<Login host={host} showAlert={showAlert}/>}/>
          {/* <Route exact path="/contact" key="contact" element={<Contact showAlert={showAlert}/>}/> */}
      
          <Route exact path="/about"  key="about" element={<About/>}/>

        </Routes>
        </Router>
        </NoteState>
        </>
  );
}

export default App;
