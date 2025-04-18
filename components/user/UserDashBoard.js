function UserDashboard() {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [userStats, setUserStats] = React.useState({
    totalApplications: 0,
    upcomingSeminars: 0,
    completedSeminars: 0,
    applicationStatus: [],
    recentActivity: [],
    applicationHistory: []
  });
  const [applications, setApplications] = React.useState([]);
  const [seminars, setSeminars] = React.useState([]);
  const [profile, setProfile] = React.useState({});
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

  // Check if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        const authStatus = await db.auth.checkAuthStatus();
        setIsAuthenticated(authStatus);
        if (!authStatus) {
          navigate('/login?redirect=/dashboard');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        navigate('/login?redirect=/dashboard');
      }
    };
    
    checkAuth();
  }, []);

  React.useEffect(() => {
    if (isAuthenticated) {
      fetchUserDashboardData();
    }
  }, [isAuthenticated, filters, pagination]);

  const fetchUserDashboardData = async (retryCount = 0) => {
    try {
      setLoading(true);
      setError(null);

      const [
        userProfileResponse,
        applicationsResponse,
        seminarsResponse,
        statsResponse
      ] = await Promise.all([
        db.users.getCurrentUser(),
        db.applications.getUserApplications(filters, pagination),
        db.seminars.getUserSeminars(filters, pagination),
        db.analytics.getUserMetrics()
      ]);

      setProfile(userProfileResponse);
      setApplications(applicationsResponse.data);
      setSeminars(seminarsResponse.data);
      setUserStats(statsResponse);
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data. Please try again.');
      setLoading(false);

      if (retryCount < 3) {
        setTimeout(() => fetchUserDashboardData(retryCount + 1), 2000);
      }
    }
  };

  const handlePageChange = (page) => {
    setPagination(prev => ({...prev, currentPage: page}));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({...prev, ...newFilters}));
  };

  const handleSearch = (query) => {
    setFilters(prev => ({...prev, searchQuery: query}));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Applications"
          value={userStats.totalApplications}
          icon={<DocumentIcon className="h-6 w-6" />}
        />
        <DashboardCard
          title="Upcoming Seminars"
          value={userStats.upcomingSeminars}
          icon={<CalendarIcon className="h-6 w-6" />}
        />
        <DashboardCard
          title="Completed Seminars"
          value={userStats.completedSeminars}
          icon={<CheckCircleIcon className="h-6 w-6" />}
        />
        <DashboardCard
          title="Application Success Rate"
          value={`${((userStats.applicationStatus.filter(s => s === 'accepted').length / userStats.totalApplications) * 100).toFixed(1)}%`}
          icon={<ChartBarIcon className="h-6 w-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Application History"
          data={userStats.applicationHistory}
          type="line"
        />
        <ActivityFeed 
          activities={userStats.recentActivity}
          title="Recent Activity"
        />
      </div>
    </div>
  );

  const renderApplications = () => (
    <DataTable
      data={applications}
      columns={[
        { header: 'Job Title', accessor: 'jobTitle' },
        { header: 'Company', accessor: 'company' },
        { header: 'Status', accessor: 'status' },
        { header: 'Applied Date', accessor: 'appliedDate' },
        { header: 'Actions', accessor: 'actions' }
      ]}
      pagination={pagination}
      onPageChange={handlePageChange}
      filters={filters}
      onFilterChange={handleFilterChange}
      onSearch={handleSearch}
      loading={loading}
      error={error}
    />
  );

  const renderSeminars = () => (
    <DataTable
      data={seminars}
      columns={[
        { header: 'Seminar Name', accessor: 'name' },
        { header: 'Date', accessor: 'date' },
        { header: 'Status', accessor: 'status' },
        { header: 'Location', accessor: 'location' },
        { header: 'Actions', accessor: 'actions' }
      ]}
      pagination={pagination}
      onPageChange={handlePageChange}
      filters={filters}
      onFilterChange={handleFilterChange}
      onSearch={handleSearch}
      loading={loading}
      error={error}
    />
  );

  const renderProfile = () => (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <img 
            src={profile.avatar || '/default-avatar.png'} 
            alt="Profile"
            className="h-20 w-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{profile.firstName} {profile.lastName}</h2>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <ProfileField label="Phone" value={profile.phone} />
            <ProfileField label="Location" value={profile.location} />
            <ProfileField label="Profession" value={profile.profession} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Professional Information</h3>
            <ProfileField label="Experience" value={`${profile.yearsOfExperience} years`} />
            <ProfileField label="Skills" value={profile.skills?.join(', ')} />
            <ProfileField label="Current Employer" value={profile.currentEmployer} />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {/* Handle edit profile */}}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return null; // Or a loading state while checking auth
  }

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
            <h1 className="text-2xl font-semibold text-gray-900">My Dashboard</h1>
            <RefreshButton onClick={fetchUserDashboardData} />
          </div>

          <TabNavigation
            tabs={['overview', 'applications', 'seminars', 'profile']}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="mt-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'applications' && renderApplications()}
            {activeTab === 'seminars' && renderSeminars()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
