import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Learn from './components/Learn';
import Strengths from './components/Strengths';
import Future from './components/Future';
import Growth from './components/Growth';
import Team from './components/Team';
import Collabrite from './components/Collabrite';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Learn />
        <Strengths />
        <Future />
        <Growth />
        <Team />
        <Collabrite />
        <Projects />
        <About />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;