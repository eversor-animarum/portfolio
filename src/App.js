//was importing a logo somehow, import logo from '../../sakura.png';
import React from 'react';
import "@fontsource/ntr";
import { NavBar } from './js/Navbar';
import  Intro  from './js/Intro';
import About from './js/About';
import  Experience from './js/Experience';
import  Projects  from './js/Projects';
import Credits from './js/Credits';
import './App.css';

function App() {
  return (
    <div className="App">
       <NavBar /> 
      <div id="content">
        <Intro /> 
         <About />
       <Experience /> 
       <Projects />
         <Credits /> 
      </div>
    </div>
  );
}


export default App;
