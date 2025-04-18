function AboutSection() {
  try {
    const stats = [
      { value: "10,000+", label: "Candidates Placed" },
      { value: "500+", label: "Corporate Clients" },
      { value: "95%", label: "Satisfaction Rate" },
      { value: "15", label: "Years Experience" }
    ];

    const values = [
      {
        icon: "fas fa-handshake",
        title: "Professional Excellence",
        description: "We maintain the highest standards of professionalism in all our dealings."
      },
      {
        icon: "fas fa-globe",
        title: "Global Reach",
        description: "Our network spans multiple countries, offering diverse opportunities."
      },
      {
        icon: "fas fa-users",
        title: "Client-Centric Approach",
        description: "We prioritize understanding and meeting our clients' unique needs."
      }
    ];

    return (
      <section id="about" className="section-spacing" data-name="about-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInUp">
              <h2 className="heading">About Max Job Africa</h2>
              <p className="text-gray-600 mb-6">
                Max Job Africa is a premier multinational recruitment agency dedicated to connecting top talent with leading employers across Nigeria, Saudi Arabia, and beyond. With over 15 years of experience, we've established ourselves as a trusted partner in professional recruitment and career development.
              </p>
              <p className="text-gray-600 mb-6">
                Our comprehensive approach combines deep market knowledge, innovative recruitment strategies, and a commitment to excellence in every placement. We specialize in various sectors including healthcare, technology, engineering, and finance, ensuring precise matches between candidates and employers.
              </p>
              <p className="text-gray-600 mb-8">
                At Max Job Africa, we understand that successful recruitment goes beyond matching qualifications. We focus on understanding both candidate aspirations and employer cultures to create lasting professional relationships that drive success for all parties involved.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-50 rounded-lg p-4 text-center animate-fadeIn"
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                    data-name={`stat-${index}`}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slideInUp delay-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019509-d715a631bbe5" 
                  alt="Our Team" 
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-2/3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-award text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Award Winning Agency</h4>
                      <p className="text-sm text-gray-600">Best Recruitment Firm 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  data-name={`value-${index}`}
                >
                  <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                    <i className={`${value.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To bridge the gap between exceptional talent and outstanding opportunities, fostering career growth and organizational success through professional excellence and integrity in recruitment services.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12">Why Choose Max Job Africa?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-globe text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold">Global Network</h4>
                </div>
                <p className="text-gray-600">Access to international job markets and opportunities.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-user-check text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold">Expert Screening</h4>
                </div>
                <p className="text-gray-600">Thorough vetting process ensuring quality placements.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-handshake text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold">Personalized Service</h4>
                </div>
                <p className="text-gray-600">Tailored recruitment solutions for every client.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-chart-line text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold">Career Growth</h4>
                </div>
                <p className="text-gray-600">Supporting professional development and advancement.</p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Work With Us?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're seeking new opportunities or looking to hire top talent, we're here to help you succeed.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Find Jobs
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Hire Talent
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    reportError(error);
  }
}
