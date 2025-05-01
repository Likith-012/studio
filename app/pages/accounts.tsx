import ProtectedRoute from '@/components/ProtectedRoute';
import InvoiceForm from '@/components/InvoiceForm';

const AccountsPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Accounts Team - Create Invoice</h1>
        <InvoiceForm />
      </div>
    </ProtectedRoute>
  );
};

export default AccountsPage;
