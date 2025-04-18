function MembershipForm() {
  try {
    const [formData, setFormData] = React.useState({
      // Personal Information
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nationality: '',
      stateOfOrigin: '',
      residentialAddress: '',

      // Professional Information
      yearsOfExperience: '',
      skillCategory: '',
      otherSkill: '',
      currentEmployer: '',
      preferredLocation: '',
      expectedSalaryRange: '',

      // CV Upload
      cv: null,
      cvName: '',

      // Terms
      agreeToTerms: false
    });

    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);

    const skillCategories = [
      'Software Developer',
      'Banker',
      'Accountant', 
      'Teacher',
      'Sales Representative',
      'Marketing Manager',
      'Construction Worker',
      'Driver',
      'Nurse',
      'Doctor',
      'Painter',
      'Carpenter',
      'Mechanic',
      'Electrician',
      'General Labourer',
      'Tiler/Marble Fixer',
      'Plumber',
      'Welder',
      'Mason',
      'HVAC Technician',
      'Security Guard',
      'Domestic Worker',
      'Administrative Assistant',
      'Human Resources Manager',
      'Other'
    ];

    const locationOptions = [
      'Home',
      'Abroad'
    ];

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      // Clear error when field is modified
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
      }
    };

    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        // Validate file type
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
        if (!validTypes.includes(file.type)) {
          setErrors(prev => ({
            ...prev,
            cv: 'Please upload a PDF, Word document, or text file'
          }));
          return;
        }

        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
          setErrors(prev => ({
            ...prev,
            cv: 'File size must be less than 5MB'
          }));
          return;
        }

        // Store file info directly without upload
        setFormData(prev => ({
          ...prev,
          cv: file,
          cvName: file.name
        }));
        setErrors(prev => ({ ...prev, cv: null }));
      }
    };

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidNigerianPhone = (phone) => {
      return /^(\+234|0)[0-9]{10}$/.test(phone);
    };

    const validateForm = () => {
      const newErrors = {};
      
      // Personal Information Validation
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!isValidNigerianPhone(formData.phone)) {
        newErrors.phone = 'Invalid Nigerian phone number';
      }

      // Professional Information Validation
      if (!formData.skillCategory) newErrors.skillCategory = 'Skill category is required';
      if (formData.skillCategory === 'Other' && !formData.otherSkill.trim()) {
        newErrors.otherSkill = 'Please specify your skill';
      }
      if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Years of experience is required';

      // CV Validation
      if (!formData.cv) newErrors.cv = 'CV is required';

      // Terms Validation
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        try {
          setIsSubmitting(true);
          
          // Log form data to console for debugging
          console.log('Form Submission Data:', {
            ...formData,
            cv: formData.cv ? {
              name: formData.cv.name,
              size: formData.cv.size,
              type: formData.cv.type
            } : null
          });

          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          setSubmitSuccess(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            nationality: '',
            stateOfOrigin: '',
            residentialAddress: '',
            yearsOfExperience: '',
            skillCategory: '',
            otherSkill: '',
            currentEmployer: '',
            preferredLocation: '',
            expectedSalaryRange: '',
            cv: null,
            cvName: '',
            agreeToTerms: false
          });
        } catch (error) {
          console.error('Form submission error:', error);
          setErrors(prev => ({
            ...prev,
            submit: 'Failed to submit form. Please try again.'
          }));
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    return (
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-6 space-y-8">
        {/* Personal Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
          </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter your first name"
                    />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
                  </div>

            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter your last name"
                    />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
                  </div>

            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">Email Address *</label>
                    <input
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="your.email@example.com"
                    />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
                  </div>

            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange} 
                placeholder="+234"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fas fa-tools text-purple-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Professional Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">Skill Category *</label>
              <select
                name="skillCategory"
                value={formData.skillCategory}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              >
                <option value="">Select Your Skill</option>
                {skillCategories.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
              {errors.skillCategory && (
                <p className="text-red-500 text-sm">{errors.skillCategory}</p>
              )}
            </div>

            {formData.skillCategory === 'Other' && (
              <div className="space-y-2">
                <label className="text-md font-semibold text-gray-700">Specify Your Skill *</label>
                <input
                  type="text"
                  name="otherSkill"
                  value={formData.otherSkill}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your specific skill"
                />
                {errors.otherSkill && (
                  <p className="text-red-500 text-sm">{errors.otherSkill}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">Years of Experience *</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                min="0"
                max="50"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="Enter years of experience"
              />
              {errors.yearsOfExperience && (
                <p className="text-red-500 text-sm">{errors.yearsOfExperience}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-md font-semibold text-gray-700">Preferred Work Location</label>
              <select
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              >
                <option value="">Select Location</option>
                {locationOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
                  </div>
                </div>

        {/* CV Upload */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-file-upload text-green-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">CV Upload</h3>
          </div>

          <div className="space-y-4">
            <label className="text-md font-semibold text-gray-700">
              Upload Your CV (PDF, Word, or Text file, max 5MB) *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-500 transition-colors duration-200">
                  <input
                    type="file"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                id="cv-upload"
              />
              <label htmlFor="cv-upload" className="cursor-pointer">
                <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-3"></i>
                <p className="text-md text-gray-600">Drag and drop your CV here or</p>
                <span className="text-green-500 font-semibold hover:text-green-600">Browse Files</span>
                {formData.cvName && (
                  <p className="mt-2 text-green-600 font-medium">Selected: {formData.cvName}</p>
                )}
              </label>
            </div>
            {errors.cv && (
              <p className="text-red-500 text-sm">{errors.cv}</p>
            )}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
            />
            <div>
              <label className="text-md font-semibold text-gray-700">
                I agree to the terms and conditions *
              </label>
              <p className="text-gray-600 mt-1">
                By selecting this, you agree to our privacy policy and membership guidelines.
              </p>
            </div>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Processing...
              </span>
            ) : (
              'Submit Registration'
            )}
          </button>
        </div>

        {/* Success Modal */}
        {submitSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full transform transition-all duration-300 scale-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-green-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Registration Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  To complete your registration, a payment link has been sent to your email. Please complete the payment to become a member of the MaxJob Community.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-xl text-md font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    );
  } catch (error) {
    console.error('MembershipForm component error:', error);
    reportError(error);
  }
}



