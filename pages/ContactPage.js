function ContactPage() {
  const offices = [
    {
      country: "Nigeria",
      cities: [
        {
          city: "Abuja",
          address: "No. 6 Tafawa Balewa house central business district Abuja",
          phone: "+234 8137494061",
          email: "maxjobdubai@gmail.com"
        },
        {
          city: "Kaduna",
          address: "No 45 jay street Malali new extension Kaduna",
          phone: "+234 8137494061",
          email: "maxjobdubai@gmail.com"
        },
        {
          city: "Kogi",
          address: "No. 4 Wallace street by local government and chieftancy affair kogi state",
          phone: "+234 8137494061",
          email: "maxjobdubai@gmail.com"
        }
      ]
    },
    {
      country: "Ghana",
      cities: [
        {
          city: "Accra",
          address: "17 Agostinho Neto Rd. Liberation Avenue Accra Ghana",
          phone: "+234 8137494061",
          email: "maxjobdubai@gmail.com"
        }
      ]
    },
    {
      country: "Saudi Arabia",
      cities: [
        {
          city: "Mecca",
          address: "8384 Aziziyah District 2900 Mecca Saudi Arabia",
          phone: "+234 8137494061",
          email: "maxjobdubai@gmail.com"
        }
      ]
    }
  ];

  return (
    <div className="contact-page">
      <header className="page-header contact-header">
        <div className="page-header-container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with our team across Africa and the Middle East
          </p>
        </div>
      </header>

      <main className="page-content">
        <div className="container">
          <section className="contact-section">
            <div className="contact-layout">
              <div className="contact-main">
                <div className="contact-info-card">
                  <div className="contact-icon-wrapper">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h2 className="contact-section-title">Email Us</h2>
                  <p className="contact-description">
                    For general inquiries and support, please email us at:
                  </p>
                  <a href="mailto:maxjobdubai@gmail.com" className="contact-email-link">
                    maxjobdubai@gmail.com
                  </a>
                </div>

                <div className="locations-section">
                  <h2 className="locations-title">Our Offices</h2>
                  <div className="locations-grid">
                    {offices.map((office, index) => (
                      <div key={index} className="location-card">
                        <div className="location-header">
                          <i className="fas fa-map-marker-alt location-icon"></i>
                          <h3 className="location-country">{office.country}</h3>
                        </div>
                        <div className="offices-list">
                          {office.cities.map((city, cityIndex) => (
                            <div key={cityIndex} className="office-item">
                              <div className="office-icon-wrapper">
                                <i className="fas fa-building"></i>
                              </div>
                              <div className="office-info">
                                <h4 className="office-city">{city.city}</h4>
                                <p className="office-address">{city.address}</p>
                                <p className="office-phone">
                                  <i className="fas fa-phone"></i> {city.phone}
                                </p>
                                <p className="office-email">
                                  <i className="fas fa-envelope"></i> {city.email}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
