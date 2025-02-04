import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;