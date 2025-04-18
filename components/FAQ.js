function FAQ() {
  try {
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [activeCategory, setActiveCategory] = React.useState('applicants');

    const faqs = {
      applicants: [
        {
          question: "How do I apply for jobs through MaxJobs?",
          answer: "Create an account on our platform, complete your profile, pay a fee of 10,000 NGN, be a member of the MaxJobs community and a date for an interview will be set up for you after that you will be notified via email when a slot is available."
        },
        {
          question: "What documents do I need to apply for international jobs?",
          answer: "Typically you'll need your CV/resume, educational certificates, professional certifications, passport copy, and any relevant work samples or portfolios."
        },
        {
          question: "Is there a fee for job seekers to use MaxJobs services?",
          answer: "Yes, a fee of 10,000 NGN is required to be a member of the MaxJobs Africa community."
        },
        {
          question: "How long does the recruitment process take?",
          answer: "The timeline varies depending on the employer and position. Typically it takes 2-6 weeks from application to job offer for most roles typically also depending on your skills and experience."
        }
      ],
    };

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <section id="faq" className="section-spacing bg-gray-50" data-name="faq-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading animate-slideInUp">Frequently Asked Questions</h2>
            <p className="subheading animate-slideInUp delay-100">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveCategory('applicants')}
                  className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeCategory === 'applicants' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  data-name="applicant-faq-btn"
                >
                  For Applicants
                </button>
                
              </div>
            </div>

            <div className="space-y-4">
              {faqs[activeCategory].map((faq, index) => (
                <div key={index} className="card overflow-hidden" data-name={`faq-item-${index}`}>
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleAccordion(index)}
                    data-name={`faq-toggle-${index}`}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'} text-blue-500`}></i>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FAQ component error:', error);
    reportError(error);
  }
}
