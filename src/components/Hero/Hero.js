import React from 'react';

const Hero = () => (
  <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-25"></div> 
    <div className="flex items-center justify-center text-white text-center absolute inset-0">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl max-w-lg">Discover the beauty of simplicity and elegance with our services.</p>
      </div>
    </div>
  </div>
);

export default Hero;
