import ProtectedRoute from '@/components/ProtectedRoute';
import ApprovalButton from '@/components/ApprovalButton';

const StudioManagerPage = () => {
  const handleApprove = () => {
    alert('Approved by Studio Manager');
  };

  const handleReject = () => {
    alert('Rejected by Studio Manager');
  };

  return (
    <ProtectedRoute>
      <div>
        <h1>Studio Manager Approval Page</h1>
        <ApprovalButton status="Pending" onApprove={handleApprove} onReject={handleReject} />
      </div>
    </ProtectedRoute>
  );
};

export default StudioManagerPage;
