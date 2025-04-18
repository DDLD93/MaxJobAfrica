function AboutPage() {
    return (
    <div className="about-page">
      <header className="page-header about-header">
        <div className="page-header-container">
          <h1 className="page-title">About Max Job Africa</h1>
          <p className="page-subtitle">
            Empowering Africa's workforce through innovative recruitment solutions and career development
          </p>
        </div>
      </header>

      <main className="page-content">
        <div className="container">
          <section className="about-hero-section">
            <div className="about-hero-grid">
              <div className="about-hero-content">
                <h2 className="about-section-title">Our Story</h2>
                <p className="about-text">
                  Founded in 2020 by visionary leaders Alhaji Musa Mukhtar and Sheikh Saleh Ahmed Al Barsi, Max Job Africa emerged with a transformative mission: to revolutionize employment opportunities for Africa's youth and foster economic independence across the continent.
                </p>
                <p className="about-text">
                  Our journey has been marked by remarkable achievements in the recruitment industry. We've successfully bridged the gap between talented individuals and prestigious employers, facilitating job placements across Nigeria, Ghana, Kenya, and extending our reach to international markets including the UAE, Saudi Arabia, Qatar, and Canada.
                </p>
                <p className="about-text">
                  Today, Max Job Africa stands as a beacon of hope and opportunity, committed to transforming careers and empowering the next generation of African professionals. Our success is measured not just in placements made, but in lives changed and dreams realized.
                </p>
              </div>
              <div className="about-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Professional Workplace Environment"
                  className="hero-image"
                  loading="eager"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </section>

          <section className="vision-mission-section">
            <div className="vision-mission-grid">
              <div className="vision-card">
                <div className="card-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                  At Max Job Africa, we envision a future where every young person has access to meaningful employment, enabling them to achieve financial stability, independence, and a sense of purpose. We strive to bridge the gap between job seekers and employers, facilitating a seamless recruitment process that benefits both parties.
                </p>
              </div>
              <div className="vision-card">
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  Our mission is to provide exceptional recruitment services, connecting talented youth with reputable employers across various industries. We are committed to delivering personalized support, guidance, and resources to ensure that our candidates succeed in their career endeavors.
                </p>
              </div>
            </div>
          </section>

          <section className="achievements-section">
            <h2 className="section-title">Our Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Thousands of Job Placements</h4>
                <p>Successfully placed thousands of youth in jobs across Nigeria, Ghana, Kenya, UAE, Saudi Arabia, Qatar, Canada and many other countries.</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Industry Partnerships</h4>
                <p>Forged partnerships with numerous reputable employers across various industries.</p>
              </div>
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Community Impact</h4>
                <p>Made a positive impact on communities, promoting income independence and reducing unemployment among youth.</p>
              </div>
            </div>
          </section>

          <section className="commitment-section">
            <div className="commitment-content">
              <h2 className="section-title">Our Commitment</h2>
              <p className="section-text">
                We are committed to continuing our mission of generating employment opportunities for youth. We will strive to innovate, improve, and expand our services, ensuring that we remain a leading recruitment agency in the region.
              </p>
              <p className="section-text commitment-cta">
                Join us in our quest to empower youth and promote income independence. Together, we can make a difference!
              </p>
          </div>
          </section>
        </div>
      </main>
    </div>
    );
}

export default AboutPage;
