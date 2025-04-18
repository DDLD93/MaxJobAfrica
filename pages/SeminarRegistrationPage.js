function SeminarRegistrationPage() {
  const [isMember, setIsMember] = React.useState(false);
  const router = useRouter();

  // Check if user is logged in and has active membership
  React.useEffect(() => {
    const checkMembershipStatus = async () => {
      try {
        // Call API to check membership status
        const response = await fetch('/api/check-membership');
        const data = await response.json();
        setIsMember(data.isActiveMember);
      } catch (error) {
        console.error('Error checking membership:', error);
        setIsMember(false);
      }
    };
    checkMembershipStatus();
  }, []);

  try {
    return (
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Recruitment Seminar Registration</h1>
              <p className="text-xl text-gray-600">
                Join our exclusive seminar to enhance your career prospects and connect with industry leaders
              </p>
            </div>

            {!isMember ? (
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Membership Required</h2>
                <p className="text-gray-600 mb-8">
                  You need to be an active member to register for our seminars.
                  Please sign up for membership first (₦10,000) before proceeding with seminar registration (₦20,000).
                </p>

                <div className="space-y-4">
                  <button
                    onClick={() => router.push('/membership')}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full"
                  >
                    Sign Up for Membership
                  </button>

                  <button
                    onClick={() => router.push('/login')}
                    className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors w-full"
                  >
                    Already a Member? Sign In
                  </button>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  For any questions about membership or seminars, please contact our support team.
                </p>
              </div>
            ) : (
              <>
                {/* Seminar Details Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Seminar Overview</h2>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <i className="fas fa-calendar-alt text-blue-600 mr-3"></i>
                          <span>June 15, 2025</span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-clock text-blue-600 mr-3"></i>
                          <span>10:00 AM - 12:30 PM</span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                          <span>Abuja Business Center</span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-money-bill-wave text-blue-600 mr-3"></i>
                          <span>₦20,000 per person</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <span>International job market insights</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <span>CV and interview preparation</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <span>Industry networking opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <span>Career advancement strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Registration Form - You'll need to implement the actual seminar registration form here */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  {/* Add your seminar registration form fields here */}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('SeminarRegistrationPage component error:', error);
    reportError(error);
  }
}
