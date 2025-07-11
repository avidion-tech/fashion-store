
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight animate-fade-in">
          SPRING
          <span className="block font-normal">COLLECTION</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto animate-slide-up">
          Discover the latest trends in contemporary fashion
        </p>
        <div className="space-x-4 animate-slide-up">
          <Button className="btn-primary bg-white text-black hover:bg-gray-100">
            SHOP WOMEN
          </Button>
          <Button className="btn-secondary border-white text-white hover:bg-white hover:text-black">
            SHOP MEN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
