import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login.js';
import AddStudent from './components/AddStudent/AddStudent.js';
import  { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Login/>} />
        <Route exact path="/add_student" element={<AddStudent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
