function AdminDashboard() {
    const [activeTab, setActiveTab] = React.useState('overview');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
    const [stats, setStats] = React.useState({
    totalUsers: 0,
    totalApplications: 0, 
    totalSeminars: 0,
    totalRevenue: 0,
    recentActivity: [],
    userGrowth: [],
    applicationTrends: []
  });
  const [users, setUsers] = React.useState([]);
  const [applications, setApplications] = React.useState([]);
  const [seminars, setSeminars] = React.useState([]);
  const [filters, setFilters] = React.useState({
    status: 'all',
    dateRange: 'all',
    searchQuery: ''
  });
  const [pagination, setPagination] = React.useState({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0
  });

  // Fetch dashboard data with error handling and retry logic
    React.useEffect(() => {
    const fetchDashboardData = async (retryCount = 0) => {
      try {
        setLoading(true);
        setError(null);

        const [
          usersResponse,
          applicationsResponse, 
          seminarsResponse,
          paymentsResponse,
          analyticsResponse
        ] = await Promise.all([
          db.users.getAll(filters, pagination),
          db.applications.getAll(filters, pagination),
          db.seminars.getAll(filters, pagination),
          db.payments.getAnalytics(),
          db.analytics.getDashboardMetrics()
        ]);

        setUsers(usersResponse.data);
        setApplications(applicationsResponse.data);
        setSeminars(seminarsResponse.data);
        setPagination(prev => ({
          ...prev,
          totalItems: usersResponse.total
        }));

        // Process and set enhanced statistics
        setStats({
          totalUsers: usersResponse.total,
          totalApplications: applicationsResponse.total,
          totalSeminars: seminarsResponse.total,
          totalRevenue: paymentsResponse.totalRevenue,
          recentActivity: analyticsResponse.recentActivity,
          userGrowth: analyticsResponse.userGrowth,
          applicationTrends: analyticsResponse.applicationTrends
        });

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        
        // Implement retry logic
        if (retryCount < 3) {
          setTimeout(() => {
            fetchDashboardData(retryCount + 1);
          }, 1000 * Math.pow(2, retryCount)); // Exponential backoff
        } else {
          setError('Failed to load dashboard data. Please try refreshing the page.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [filters, pagination.currentPage, pagination.itemsPerPage]);

  const handleSearch = debounce((query) => {
    setFilters(prev => ({...prev, searchQuery: query}));
    setPagination(prev => ({...prev, currentPage: 1}));
  }, 300);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({...prev, [filterType]: value}));
    setPagination(prev => ({...prev, currentPage: 1}));
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({...prev, currentPage: newPage}));
  };

  const handleViewUser = async (userId) => {
    try {
      const userDetails = await db.users.getById(userId);
      // Implement modal or navigation to user details view
    } catch (error) {
      toast.error('Failed to load user details');
    }
  };

  const handleEditUser = async (userId) => {
    try {
      const userDetails = await db.users.getById(userId);
      // Implement edit modal or navigation
    } catch (error) {
      toast.error('Failed to load user for editing');
    }
  };

  const handleUpdateApplicationStatus = async (applicationId, newStatus) => {
    try {
      await db.applications.updateStatus(applicationId, newStatus);
      // Refresh applications data
      const updatedApplications = applications.map(app => 
        app.id === applicationId ? {...app, status: newStatus} : app
      );
      setApplications(updatedApplications);
      toast.success('Application status updated successfully');
    } catch (error) {
      toast.error('Failed to update application status');
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Users"
          value={stats.totalUsers}
          trend={stats.userGrowth[0]?.trend}
          icon={<UsersIcon className="h-6 w-6" />}
        />
        <DashboardCard
          title="Total Applications"
          value={stats.totalApplications}
          trend={stats.applicationTrends[0]?.trend}
          icon={<DocumentIcon className="h-6 w-6" />}
        />
        <DashboardCard
          title="Total Seminars"
          value={stats.totalSeminars}
          icon={<AcademicCapIcon className="h-6 w-6" />}
        />
        <DashboardCard
          title="Total Revenue"
          value={`₦${stats.totalRevenue.toLocaleString()}`}
          icon={<CurrencyDollarIcon className="h-6 w-6" />}
        />
                </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="User Growth"
          data={stats.userGrowth}
          type="line"
        />
        <ChartCard
          title="Application Trends" 
          data={stats.applicationTrends}
          type="bar"
        />
                  </div>

      <ActivityFeed activities={stats.recentActivity} />
                </div>
  );

  const renderUsers = () => (
    <DataTable
      data={users}
      columns={userColumns}
      pagination={pagination}
      onPageChange={handlePageChange}
      filters={filters}
      onFilterChange={handleFilterChange}
      onSearch={handleSearch}
      loading={loading}
      error={error}
    />
  );

  const renderApplications = () => (
    <DataTable
      data={applications}
      columns={applicationColumns}
      pagination={pagination}
      onPageChange={handlePageChange}
      filters={filters}
      onFilterChange={handleFilterChange}
      onSearch={handleSearch}
      loading={loading}
      error={error}
      onStatusUpdate={handleUpdateApplicationStatus}
    />
  );

  const renderSeminars = () => (
    <DataTable
      data={seminars}
      columns={seminarColumns}
      pagination={pagination}
      onPageChange={handlePageChange}
      filters={filters}
      onFilterChange={handleFilterChange}
      onSearch={handleSearch}
      loading={loading}
      error={error}
    />
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorAlert message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <RefreshButton onClick={() => fetchDashboardData()} />
              <ExportButton data={activeTab === 'users' ? users : activeTab === 'applications' ? applications : seminars} />
            </div>
          </div>

          <TabNavigation
            tabs={['overview', 'users', 'applications', 'seminars']}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="mt-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'users' && renderUsers()}
            {activeTab === 'applications' && renderApplications()}
            {activeTab === 'seminars' && renderSeminars()}
            </div>
          </div>
        </div>
      </div>
    );
}

export default AdminDashboard;
// 