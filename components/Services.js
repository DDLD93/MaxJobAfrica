function Services() {
  try {
    const services = [
      {
        id: 1,
        title: "Executive Search",
        description: "We identify and recruit top-tier executives for leadership roles across industries.",
        icon: "fas fa-user-tie",
        color: "text-blue-500"
      },
      {
        id: 2,
        title: "Specialized Recruitment",
        description: "Targeted recruitment for specialized roles in tech, healthcare, engineering and more.",
        icon: "fas fa-search",
        color: "text-indigo-500"
      },
      {
        id: 3,
        title: "Talent Mapping",
        description: "Comprehensive market analysis to identify and engage with passive candidates.",
        icon: "fas fa-map-marked-alt",
        color: "text-purple-500"
      },
      {
        id: 4,
        title: "Employer Branding",
        description: "Enhance your company's appeal to attract the best talent in the market.",
        icon: "fas fa-bullhorn",
        color: "text-red-500"
      },
      {
        id: 5,
        title: "Relocation Support",
        description: "End-to-end support for international candidates including visa processing.",
        icon: "fas fa-plane",
        color: "text-green-500"
      },
      {
        id: 6,
        title: "Career Consulting",
        description: "Personalized career guidance, CV optimization and interview coaching.",
        icon: "fas fa-chart-line",
        color: "text-yellow-500"
      }
    ];

    return (
      <section id="services" className="section-spacing" data-name="services-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading animate-slideInUp">Our Services</h2>
            <p className="subheading animate-slideInUp delay-100">
              Comprehensive recruitment solutions for candidates and employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`card p-8 text-center animate-slideInUp delay-${(index % 3) * 100 + 200} hover-grow`}
                data-name={`service-card-${service.id}`}
              >
                <div className={`w-16 h-16 ${service.color} text-3xl flex items-center justify-center mx-auto mb-6 rounded-full bg-opacity-10 ${service.color.replace('text', 'bg')}`}>
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    reportError(error);
  }
}
