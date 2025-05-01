export default function AccountsPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Financial Accounts</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Total Revenue</h3>
              <p className="text-2xl text-green-600">$24,500</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Pending Invoices</h3>
              <p className="text-2xl text-orange-600">$8,200</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Completed Projects</h3>
              <p className="text-2xl text-blue-600">142</p>
            </div>
          </div>
        </div>
      </div>
    );
  }