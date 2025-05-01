'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const router = useRouter();
  
  const handleLogin = () => {
    // Replace with actual auth logic
    document.cookie = "authToken=12345; path=/";
    router.push('/');
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center">InvertFlow Login</h1>
      <div className="space-y-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button 
          className="w-full" 
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}