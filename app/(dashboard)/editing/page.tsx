export default function EditingPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Image Editing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4" />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Image_{item}.jpg</span>
                <button className="text-blue-600 hover:text-blue-700">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }