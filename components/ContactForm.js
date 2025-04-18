function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const validate = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
      if (!formData.message.trim()) newErrors.message = 'Message is required';
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 1500);
      }
    };

    return (
      <section id="contact" className="section-spacing" data-name="contact-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading animate-slideInUp">Contact Us</h2>
            <p className="subheading animate-slideInUp delay-100">
              Get in touch with our recruitment specialists
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slideInUp delay-200">
              <div className="card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-check text-green-500 text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="button-primary"
                      data-name="contact-new-message-btn"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="label">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                          data-name="contact-name-input"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="label">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                          data-name="contact-email-input"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          data-name="contact-phone-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="label">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                          data-name="contact-subject-input"
                        />
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                      </div>
                      <div>
                        <label htmlFor="message" className="label">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                          data-name="contact-message-input"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="button-primary w-full"
                          disabled={isSubmitting}
                          data-name="contact-submit-btn"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="animate-slideInUp delay-300">
              <div className="card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i> Nigeria Office
                    </h4>
                    <p className="text-gray-600">123 Victoria Island, Lagos, Nigeria</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i> Saudi Arabia Office
                    </h4>
                    <p className="text-gray-600">456 King Fahd Road, Riyadh, Saudi Arabia</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <i className="fas fa-phone-alt text-blue-500 mr-2"></i> Phone
                    </h4>
                    <p className="text-gray-600">+234 123 456 7890 (Nigeria)</p>
                    <p className="text-gray-600">+966 12 345 6789 (Saudi Arabia)</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <i className="fas fa-envelope text-blue-500 mr-2"></i> Email
                    </h4>
                    <p className="text-gray-600">info@maxjobs.com</p>
                    <p className="text-gray-600">support@maxjobs.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <i className="fas fa-clock text-blue-500 mr-2"></i> Working Hours
                    </h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    reportError(error);
  }
}
