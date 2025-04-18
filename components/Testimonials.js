function Testimonials() {
  try {
    const testimonials = [
      {
        id: 1,
        name: "Adebayo Johnson",
        role: "Software Engineer at TechSolutions",
        content: "MaxJobs helped me land my dream job in Saudi Arabia. Their guidance through the entire process was exceptional, from interview preparation to relocation support.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5
      },
      {
        id: 2,
        name: "Fatima Al-Mansour",
        role: "Hospital Administrator",
        content: "The recruitment team at MaxJobs understood exactly what I was looking for in my career. They matched me with a position that perfectly aligned with my skills and aspirations.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5
      },
      {
        id: 3,
        name: "Chinedu Okoro",
        role: "Project Manager at BuildRight",
        content: "I was skeptical about recruitment agencies until I worked with MaxJobs. Their professionalism and network of top employers in Nigeria is unmatched.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 4
      }
    ];

    return (
      <section id="testimonials" className="section-spacing bg-blue-600 text-white" data-name="testimonials-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading animate-slideInUp">Success Stories</h2>
            <p className="subheading animate-slideInUp delay-100">
              Hear from candidates and employers who have worked with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card animate-slideInUp delay-${(index * 100) + 200}`}
                data-name={`testimonial-${testimonial.id}`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    reportError(error);
  }
}
