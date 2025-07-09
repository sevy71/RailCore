import React from 'react';
import Button from './common/Button';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/05/64/75/66/1000_F_564756616_HjgeO1kyLrV2N20aWyemWK8LajvDVNRW.jpg')" }} // Placeholder: Class 802 Hitachi, neutral livery, 3/4 view, approaching station.
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay for text readability */}
      <div className="container mx-auto px-6 py-32 md:py-48 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-condensed tracking-tight leading-tight mb-4">
          From Application to Career Success:<br className="hidden md:inline" /> The Complete Railway Driver Journey
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-light mb-8">
          Over 60 Years of Railway Experience Revealed
        </p>
        {/* The 'Destination: Career Change' sign should ideally be part of the hero image itself for best visual integration. */}
        {/* This is a styled text fallback. */}
        <div className="inline-block bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-md shadow-lg text-lg mb-10">
          Destination: Career Change
        </div>
        <div>
          <a href="#contact"> {/* Smooth scroll to contact section */}
            <Button variant="primary" size="lg">
              Start Your Journey Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;