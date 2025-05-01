import ProtectedRoute from '@/components/ProtectedRoute';
import ProjectDashboard from '@/components/ProjectDashboard';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <ProjectDashboard />
    </ProtectedRoute>
  );
};

export default DashboardPage;
