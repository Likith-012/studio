import ProtectedRoute from '@/components/ProtectedRoute';

const ClientPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Client Dashboard</h1>
        <p>View your project status and reports here.</p>
      </div>
    </ProtectedRoute>
  );
};

export default ClientPage;
