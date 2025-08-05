import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Learn from './components/Learn';
import Strengths from './components/Strengths';
import Future from './components/Future'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Learn />
        <Strengths />
        {/* <Future /> */}
      </main>
    </>
  );
};

export default App;