function NotFoundPage() {
  try {
    const navigate = React.useContext(NavigationContext);

    return (
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-2xl mb-8">Page not found</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </main>
    );
  } catch (error) {
    console.error('NotFoundPage component error:', error);
    reportError(error);
  }
}
