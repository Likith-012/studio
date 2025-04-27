'use client';

const ApprovalButton = ({ status, onApprove, onReject }) => {
  return (
    <div>
      {status === 'Pending' && (
        <>
          <button onClick={onApprove}>Approve</button>
          <button onClick={onReject}>Reject</button>
        </>
      )}
      {status === 'Approved' && <span>Approved</span>}
      {status === 'Rejected' && <span>Rejected</span>}
    </div>
  );
};

export default ApprovalButton;
