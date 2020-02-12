import React from 'react';
import HomePage from '../Components/HomePage/HomePage';
import NavBar from '../Components/NavBar/NavBar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
