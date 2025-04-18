function MembershipPage() {
  try {
    return (
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Membership Registration</h1>
              <p className="text-xl text-gray-600">
                Join our exclusive professional network to access premium career opportunities and resources
              </p>
            </div>

            {/* Membership Details Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Membership Benefits</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="fas fa-star text-blue-600 mr-3"></i>
                      <span>Priority Job Matching</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-users text-blue-600 mr-3"></i>
                      <span>Professional Network Access</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-certificate text-blue-600 mr-3"></i>
                      <span>Career Development Resources</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-money-bill-wave text-blue-600 mr-3"></i>
                      <span>₦10,000 Membership Fee</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">What You'll Get</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>Exclusive job opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>Resume review services</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>Career counseling sessions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>Industry networking events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <MembershipForm />
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('MembershipPage component error:', error);
    reportError(error);
  }
}
