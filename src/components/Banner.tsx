
import React from 'react';
import { Button } from '@/components/ui/button';

interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  onButtonClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  backgroundImage,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-900',
  onButtonClick
}) => {
  return (
    <section className={`relative py-16 ${backgroundColor}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/30" />
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className={`text-sm font-medium tracking-wide uppercase mb-2 ${textColor} opacity-75`}>
            {subtitle}
          </p>
        )}
        <h2 className={`text-4xl md:text-5xl font-light mb-6 tracking-tight ${textColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${textColor} opacity-90`}>
            {description}
          </p>
        )}
        {buttonText && onButtonClick && (
          <Button 
            onClick={onButtonClick}
            className={`${backgroundImage ? 'bg-white text-black hover:bg-gray-100' : 'btn-primary'}`}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Banner;
