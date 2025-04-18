function ServicesPage() {
  const services = [
    {
      icon: "fas fa-briefcase",
      title: "Job Placement",
      description: "Strategic placement services connecting talented professionals with leading employers across Africa and internationally. Our comprehensive approach ensures perfect matches for both candidates and companies."
    },
    {
      icon: "fas fa-comments", 
      title: "Career Counseling",
      description: "Expert guidance for career development, including resume optimization, interview preparation, and personalized career planning. We help professionals make informed decisions about their career paths."
    },
    {
      icon: "fas fa-users",
      title: "Recruitment Process Outsourcing",
      description: "End-to-end recruitment solutions for businesses, handling everything from job posting to candidate selection. We streamline the hiring process while maintaining high-quality standards."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Training and Development",
      description: "Comprehensive training programs designed to enhance professional skills and market competitiveness. Our courses are tailored to meet industry demands and career advancement goals."
    },
    {
      icon: "fas fa-university",
      title: "Study Abroad Guidance",
      description: "Expert counseling and support for students pursuing international education. We assist with university selection, application processes, visa guidance, and pre-departure preparation across leading global institutions."
    },
    {
      icon: "fas fa-hospital",
      title: "Medical Tourism Services",
      description: "Comprehensive medical tourism packages connecting patients with world-class healthcare facilities. We coordinate everything from hospital selection to travel arrangements and post-treatment care."
    },
    {
      icon: "fas fa-plane",
      title: "Travel & Tours",
      description: "Curated travel experiences and tour packages across multiple countries. Our services include visa assistance, itinerary planning, accommodation booking, and guided tours for both leisure and business travelers."
    }
  ];

  const achievements = [
    {
      icon: "fas fa-user-check",
      title: "Successful Placements",
      description: "Over 10,000 professionals placed in rewarding careers"
    },
    {
      icon: "fas fa-building",
      title: "Partner Companies",
      description: "Trusted by 500+ leading organizations across Africa"
    },
    {
      icon: "fas fa-globe-africa",
      title: "Geographic Reach",
      description: "Operating in 15+ African countries and expanding globally"
    }
  ];

  return (
    <div className="services-page">
      <header className="page-header services-header">
        <div className="page-header-container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive recruitment solutions tailored to your career and business needs
          </p>
        </div>
      </header>

      <main className="page-content">
        <div className="container">
          <section className="services-section">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="achievements-section">
            <h2 className="section-title">Our Impact</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="commitment-section">
            <h2 className="section-title">Our Commitment</h2>
            <p className="commitment-text">
              At Max Job Africa, we are committed to delivering excellence in every service we provide. 
              Our team of experienced professionals works tirelessly to ensure the highest standards of 
              quality and satisfaction for both job seekers and employers.
            </p>
          </section>

          <FAQ />
        </div>
      </main>
    </div>
  );
}

export default ServicesPage;
