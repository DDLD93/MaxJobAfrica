import React, { useState, useEffect } from 'react';

function Carousel({ images, interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, images.length, interval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="carousel-container">
      <div 
        className="carousel"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              visibility: Math.abs(currentSlide - index) <= 1 ? 'visible' : 'hidden',
            }}
          >
            <div className="carousel-image-container">
              <img 
                src={image.url} 
                alt={image.alt || `Slide ${index + 1}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}

        <button
          className="carousel-arrow prev"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          className="carousel-arrow next"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel; 