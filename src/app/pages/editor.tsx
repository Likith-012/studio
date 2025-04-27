import ProtectedRoute from '@/components/ProtectedRoute';
import PhotographyUpload from '@/components/PhotographyUpload'; // Same upload form, or you can create another if you want.

const EditorPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Editor Upload Page</h1>
        <PhotographyUpload />
      </div>
    </ProtectedRoute>
  );
};

export default EditorPage;
