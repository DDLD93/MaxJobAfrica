function Hero() {
  
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
      {
        title: "Empowering African Talent",
        subtitle: "Connecting skilled professionals with global opportunities",
        image: "https://images.unsplash.com/photo-1573497019509-d715a631bbe5"
      },
      {
        title: "Healthcare Excellence",
        subtitle: "Leading medical professionals for international positions",
        image: "https://images.unsplash.com/photo-1691139601099-932c01ec198b"
      },
      {
        title: "Technical Expertise",
        subtitle: "Skilled engineers and technicians for global projects",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
      },
      {
        title: "Finance & Business",
        subtitle: "Connecting top financial talent with global corporations",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
      },
      {
        title: "Innovation & Technology",
        subtitle: "Empowering tech professionals to lead global innovation",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780"
      }
  
  
  
    ];

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);

    return (
      <section className="relative h-screen" data-name="hero-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          > 
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-10">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-1 sm:p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-200 transform hover:scale-110"
                aria-label="Previous slide"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 sm:h-6 sm:w-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-1 sm:p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-200 transform hover:scale-110"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-6 sm:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center hero-text-content">
                  <h1 className="hero-slide-title">{slide.title}</h1>
                  <p className="hero-slide-subtitle">{slide.subtitle}</p>
                  <button className="hero-button">
                 Join Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}

export default Hero;
