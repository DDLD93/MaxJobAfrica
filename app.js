// Initialize NavigationContext
const NavigationContext = React.createContext(null);

// Main App Component
function App() {
  try {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

    React.useEffect(() => {
      const handleNavigation = () => {
        setCurrentPath(window.location.pathname);
      };

      window.addEventListener('popstate', handleNavigation);
      return () => window.removeEventListener('popstate', handleNavigation);
    }, []);

    const navigate = (path) => {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    const renderPage = () => {
      switch (currentPath) {
        case '/':
          return <HomePage />;
        case '/about':
          return <AboutPage />;
        case '/services':
          return <ServicesPage />;
        case '/contact':
          return <ContactPage />;
        case '/seminar-registration':
          return <SeminarRegistrationPage />;
        case '/membership':
          return <MembershipPage />;
        case '/admin':
          return <AdminPage />;
        default:
          return <NotFoundPage />;
      }
    };

    return (
      <div className="App">
        <NavigationContext.Provider value={navigate}>
          <Navbar />
          {renderPage()}
          <Footer />
        </NavigationContext.Provider>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
