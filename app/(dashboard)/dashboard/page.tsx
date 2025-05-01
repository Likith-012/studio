// app/(dashboard)/page.tsx
export default function DashboardPage() {
    return (
      <div className="p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">InvertFlow Dashboard</h1>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64"
              />
              <svg
                className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
  
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-gray-500 text-sm mb-2">Total Projects</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-gray-500 text-sm mb-2">Tasks Due</h3>
            <p className="text-3xl font-bold text-red-600">3</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-gray-500 text-sm mb-2">QC Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">5</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-gray-500 text-sm mb-2">Invoices Overdue</h3>
            <p className="text-3xl font-bold text-green-600">1</p>
          </div>
        </div>
  
        {/* Projects Section */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Active Projects</h2>
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-4 pr-4 py-2 border rounded-lg w-64"
                />
              </div>
              <select className="px-4 py-2 border rounded-lg">
                <option>Filter by...</option>
                <option>Status</option>
                <option>Due Date</option>
                <option>Priority</option>
              </select>
            </div>
          </div>
  
          {/* Projects Table */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-4"><input type="checkbox" /></th>
                <th className="pb-4">Project Name</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Team</th>
                <th className="pb-4">Progress</th>
                <th className="pb-4">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { 
                  name: 'Wedding Album Design', 
                  status: 'Active',
                  team: 'Design Team',
                  progress: '75%',
                  due: '2025-05-15'
                },
                { 
                  name: 'Product Photography', 
                  status: 'Pending',
                  team: 'Photography Team',
                  progress: '40%',
                  due: '2025-05-20'
                },
                { 
                  name: 'Corporate Event Coverage', 
                  status: 'Completed',
                  team: 'Video Team',
                  progress: '100%',
                  due: '2025-05-10'
                }
              ].map((project, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4"><input type="checkbox" /></td>
                  <td className="py-4 font-medium">{project.name}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4">{project.team}</td>
                  <td className="py-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: project.progress }}
                      />
                    </div>
                  </td>
                  <td className="py-4">{project.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          {/* Footer Section */}
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Generate Report
            </button>
            <div className="text-gray-500 text-sm">
              CM colin.motherby@example.com
            </div>
          </div>
        </div>
      </div>
    );
  }

