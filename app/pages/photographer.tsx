import ProtectedRoute from '@/components/ProtectedRoute';
import PhotographyUpload from '@/components/PhotographyUpload';

const PhotographerPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Photographer Upload Page</h1>
        <PhotographyUpload />
      </div>
    </ProtectedRoute>
  );
};

export default PhotographerPage;
