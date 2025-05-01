import ProtectedRoute from '@/components/ProtectedRoute';
import ApprovalButton from '@/components/ApprovalButton';

const QCPage = () => {
  const handleApprove = () => {
    alert('Approved by QC');
  };

  const handleReject = () => {
    alert('Rejected by QC');
  };

  return (
    <ProtectedRoute>
      <div>
        <h1>QC Approval Page</h1>
        <ApprovalButton status="Pending" onApprove={handleApprove} onReject={handleReject} />
      </div>
    </ProtectedRoute>
  );
};

export default QCPage;
