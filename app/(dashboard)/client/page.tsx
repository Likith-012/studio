export default function ClientPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Client Portal</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
              <ul className="space-y-3">
                {['Wedding Photos', 'Product Shoot', 'Corporate Event'].map((project) => (
                  <li key={project} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>{project}</span>
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      View
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Deliverables</h2>
              <div className="space-y-3">
                {['Final_Photos.zip', 'Edited_Selection.zip'].map((file) => (
                  <div key={file} className="flex items-center p-3 bg-gray-50 rounded">
                    <span className="flex-1">{file}</span>
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }