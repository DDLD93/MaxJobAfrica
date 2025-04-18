function HomePage() {
  try {
    return (
      <main>
        <Hero />
        <SuccessStories />
        <BlogSection />
      </main>
    );
  } catch (error) {
    console.error('HomePage component error:', error);
    reportError(error);
  }
}
