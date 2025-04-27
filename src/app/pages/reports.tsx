import ProtectedRoute from '@/components/ProtectedRoute';

const ReportsPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Reports</h1>
        <p>Analytics and studio reports will be shown here.</p>
      </div>
    </ProtectedRoute>
  );
};

export default ReportsPage;
