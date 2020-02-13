import React from 'react';
import HomePage from '../Components/Pages/HomePage/HomePage';
import NavBar from '../Components/Shared/NavBar/NavBar';
import Technologies from '../Components/Pages/Technologies/Technologies';
import Projects from '../Components/Pages/Projects/Projects';
import Contact from '../Components/Pages/Contact/Contact';
import Footer from '../Components/Shared/Footer/Footer';
import firebaseConnection from '../Helpers/data/connectionData';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConnection();

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
