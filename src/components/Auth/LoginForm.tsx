// Merge multiple login components
const LoginForm = ({ role }) => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      role: role || 'photographer' // Default role
    });
  
    return (
      <form onSubmit={handleSubmit}>
        {!role && (
          <Select 
            options={ROLES} // Defined constant
            onChange={(selected) => setFormData(prev => ({...prev, field: selected}))}
          />
        )}
        {/* Unified form fields */}
      </form>
    );
  };
  // components/auth/LoginForm.tsx
'use client';
import { useRouter } from 'next/navigation';

// In your handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();
  // ... auth logic ...
  router.push('/');  // Redirect to dashboard after login
};