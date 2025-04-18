function BlogSection() {
  try {
    const blogPosts = [
      {
        id: 1,
        title: "How to Prepare for International Job Interviews",
        excerpt: "Learn the key strategies to ace your interviews for positions abroad, including cultural considerations and common questions.",
        date: "May 15, 2024",
        category: "Career Tips",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 2,
        title: "The Growing Demand for Tech Talent in Saudi Arabia",
        excerpt: "Discover why Saudi Arabia is becoming a hotspot for technology professionals and how to position yourself for these opportunities.",
        date: "April 28, 2024",
        category: "Industry News",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 3,
        title: "Navigating Work Visa Requirements for Nigeria",
        excerpt: "A comprehensive guide to work visa requirements and processes for professionals looking to work in Nigeria.",
        date: "April 10, 2024",
        category: "Immigration",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ];

    return (
      <section id="blog" className="section-spacing bg-blue-50" data-name="blog-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-slideInUp">
              Latest From Our Blog
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-100">
              Insights, tips and news for job seekers and employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`card animate-slideInUp delay-${(index * 100) + 200} hover-grow`}
                data-name={`blog-post-${post.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <a 
                    href="#blog" 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    data-name={`read-more-btn-${post.id}`}
                  >
                    Read More <i className="fas fa-arrow-right ml-1 text-sm"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fadeIn delay-500">
            <a 
              href="#blog" 
              className="button-primary inline-flex items-center"
              data-name="view-all-posts-btn"
            >
               View All Blog Posts <i className="fas fa-newspaper ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BlogSection component error:', error);
    reportError(error);
  }
}
