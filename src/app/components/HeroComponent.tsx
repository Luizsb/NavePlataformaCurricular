import React from 'react';
import heroImage from '../../assets/63d8332838d03b6652dd8edd69e7af2ca2f5711f.png';

interface HeroProps {
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className="w-full bg-white rounded-[56px] overflow-hidden shadow-[0px_20px_40px_-12px_rgba(27,44,73,0.04)] border border-white relative">
      <img 
        src={heroImage} 
        alt="Nave à Vela Currículo - Onde a criatividade encontra a tecnologia" 
        className="w-full h-auto object-cover block"
      />
      {children && (
        <div className="absolute bottom-6 left-8 md:bottom-28 md:left-13 lg:bottom-44 lg:left-19 z-20 max-w-[calc(100%-48px)]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Hero;