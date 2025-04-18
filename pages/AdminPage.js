function AdminPage() {
  try {
    return (
      <main>
        <AdminDashboard />
      </main>
    );
  } catch (error) {
    console.error('AdminPage component error:', error);
    reportError(error);
  }
}
