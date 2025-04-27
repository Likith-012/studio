import ProtectedRoute from '@/components/ProtectedRoute';
import ProjectDashboard from '@/components/ProjectDashboard';

const HomePage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Welcome to Studio Management System</h1>
        <ProjectDashboard />
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
