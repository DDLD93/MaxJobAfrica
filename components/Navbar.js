function Navbar() {
  try {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [userMenuOpen, setUserMenuOpen] = React.useState(false);
    const navigate = React.useContext(NavigationContext);
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      // Check for user session
      const checkUserSession = async () => {
        try {
          const session = await supabase.auth.getSession();
          setUser(session?.user || null);
        } catch (error) {
          console.error('Error checking user session:', error);
        }
      };
      
      checkUserSession();
      
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };

      const handleResize = () => {
        if (window.innerWidth > 768) {
          setMobileMenuOpen(false);
          setUserMenuOpen(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleNavigation = (path) => {
      navigate(path);
      setCurrentPath(path);
      setMobileMenuOpen(false);
      setUserMenuOpen(false);
    };

    const handleLogout = async () => {
      try {
        await supabase.auth.signOut();
        setUser(null);
        handleNavigation('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    const navLinks = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/services', label: 'Services' },
      { path: '/contact', label: 'Contact' },
      { path: '/seminar-registration', label: 'Seminar' }
    ];

    const isActive = (path) => currentPath === path;

    return (
      <nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        data-name="navbar"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="transform hover:scale-105 transition-transform duration-300"
              data-name="logo-button"
            >
              <Logo className="h-8 w-auto" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  data-name={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              
              {user ? (
                <div className="user-menu ml-4">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="user-menu-button"
                  >
                    <img
                      src={user.user_metadata?.avatar_url || '/images/default-avatar.png'}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.user_metadata?.full_name || 'My Account'}</span>
                    <i className={`fas fa-chevron-${userMenuOpen ? 'up' : 'down'} ml-1`}></i>
                  </button>
                  
                  <div className={`user-menu-dropdown ${userMenuOpen ? 'visible' : 'hidden'}`}>
                    <button
                      onClick={() => handleNavigation('/dashboard')}
                      className="user-menu-item"
                    >
                      <i className="fas fa-chart-line mr-2"></i>
                      Dashboard
                    </button>
                    <button
                      onClick={() => handleNavigation('/profile')}
                      className="user-menu-item"
                    >
                      <i className="fas fa-user mr-2"></i>
                      Profile
                    </button>
                    <button
                      onClick={() => handleNavigation('/applications')}
                      className="user-menu-item"
                    >
                      <i className="fas fa-file-alt mr-2"></i>
                      My Applications
                    </button>
                    <hr className="my-1 border-gray-200" />
                    <button
                      onClick={handleLogout}
                      className="user-menu-item danger"
                    >
                      <i className="fas fa-sign-out-alt mr-2"></i>
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => window.location.href = 'https://app.maxjob.africa'}
                  className="btn btn-primary ml-4"
                  data-name="membership-button"
                >
                  Go to Member Area
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              data-name="mobile-menu-button"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`mobile-menu ${mobileMenuOpen ? 'visible' : 'hidden'}`}
            data-name="mobile-menu"
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  data-name={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              
              {user ? (
                <>
                  <hr className="my-2 border-gray-200" />
                  <button
                    onClick={() => handleNavigation('/dashboard')}
                    className="mobile-nav-link"
                  >
                    <i className="fas fa-chart-line mr-2"></i>
                    Dashboard
                  </button>
                  <button
                    onClick={() => handleNavigation('/profile')}
                    className="mobile-nav-link"
                  >
                    <i className="fas fa-user mr-2"></i>
                    Profile
                  </button>
                  <button
                    onClick={() => handleNavigation('/applications')}
                    className="mobile-nav-link"
                  >
                    <i className="fas fa-file-alt mr-2"></i>
                    My Applications
                  </button>
                  <button
                    onClick={handleLogout}
                    className="mobile-nav-link text-red-600 hover:bg-red-50"
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                      onClick={() => handleNavigation('/membership')}
                  className="btn btn-primary w-full mt-4"
                  data-name="mobile-signup-button"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Error rendering Navbar:', error);
    return null;
  }
}

export default Navbar;
