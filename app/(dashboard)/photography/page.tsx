export default function PhotographyPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Photography Management</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Upload Raw Images</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">Drag & drop images here or</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Browse Files
            </button>
          </div>
        </div>
      </div>
    );
  }