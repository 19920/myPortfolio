import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Experience from './components/Experience';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import knowledge from './data/knowledge';
import language from './data/language';
import Spokenlanguages from './components/Spokenlanguages';


class App extends Component {
  render() {

    return (
    <div >
    <Navbar />
    <Header />
      <div id ="Ab">
        <About />
      </div>
    <div id ="exp">
      <Experience />
    </div>
    <div id ="education">
      <Education />
    </div>
    <div id ="skills">
      <Skills knowledge={knowledge} />
      <Spokenlanguages language={language} />
      </div>
    <div id ="projects">
      <Projects />
    </div>
    <div id ="contact">
      <Contact />
    </div>

    <hr />
    <Footer />
  </div>
    );
  }
}

export default App;
