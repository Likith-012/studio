export default function StudioReviewPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Studio Manager Review</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Project</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {['Project Alpha', 'Project Beta', 'Project Gamma'].map((project) => (
                  <tr key={project} className="border-b">
                    <td className="py-3">{project}</td>
                    <td className="py-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Approved
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-blue-600 hover:text-blue-700">
                        Finalize
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }