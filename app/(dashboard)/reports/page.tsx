export default function ReportsPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Analytics Reports</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Project Timeline</h3>
              <div className="bg-white p-3 rounded">Chart placeholder</div>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Team Performance</h3>
              <div className="bg-white p-3 rounded">Chart placeholder</div>
            </div>
          </div>
        </div>
      </div>
    );
  }