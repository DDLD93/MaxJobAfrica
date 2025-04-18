function CountriesPage() {
  try {
    return (
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Country Guides</h1>
            <p className="text-xl">Essential information for working abroad</p>
          </div>
        </div>
        <CountryGuides />
      </main>
    );
  } catch (error) {
    console.error('CountriesPage component error:', error);
    reportError(error);
  }
}
