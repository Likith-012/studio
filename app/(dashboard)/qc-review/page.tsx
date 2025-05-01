export default function QCReviewPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Quality Control Review</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4" />
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                  Approve
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }