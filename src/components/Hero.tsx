import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="text-lg mt-4">A passionate developer building amazing web experiences.</p>
    </section>
  );
};


export default Hero;
