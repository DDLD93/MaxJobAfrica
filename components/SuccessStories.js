function SuccessStories() {
  try {
    const stories = [
      {
        id: 1,
        name: "Kate Olaiya",
        role: "Nurse at King Faisal Hospital, Saudi Arabia", 
        story: "Through Max Job Africa's guidance and healthcare connections, I successfully moved from Nigeria to Saudi Arabia as a registered nurse. Their interview preparation and visa support services were invaluable in helping me achieve my dream of working abroad.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // Professional African male nurse
      },
      {
        id: 2,
        name: "Eunice Peter", 
        role: "Teacher in Toronto, Canada",
        story: "As a teacher in Nigeria, I wanted to expand my horizons internationally. Max Job Africa helped me through the entire process - from credential evaluation to finding a teaching position. Now I'm proudly teaching at a great school in Toronto.",
        image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80" // Professional African female manager
      },
      {
        id: 3,
        name: "David Daniel Owusu",
        role: "Hotel Manager in Dubai, UAE",
        story: "Max Job Africa's placement program opened the door to an amazing opportunity in Dubai's hospitality industry. Their guidance and network helped me secure a management position at a luxury hotel. I'm grateful for this life-changing experience.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" // Professional black male manager
      }
    ];

    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" data-name="success-stories-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              African Excellence, Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Discover how African professionals are making their mark in leading global organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stories.map((story, index) => (
              <div 
                key={story.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-name={`success-story-${story.id}`}
              >
                <div className="relative h-72">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="288"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{story.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{story.role}</p>
                  <p className="text-gray-600 leading-relaxed">{story.story}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="/success-stories"
              className="inline-flex items-center space-x-3 text-lg text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              data-name="view-more-stories-btn"
            >
              <span>View More Success Stories</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SuccessStories component error:', error);
    reportError(error);
  }
}
