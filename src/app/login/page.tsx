'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('');

  const handleLogin = () => {
    if (role) {
      localStorage.setItem('userRole', role);
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">Select Role</option>
        <option value="photographer">Photographer</option>
        <option value="editor">Image Editor</option>
        <option value="qc">QC Team</option>
        <option value="studio_manager">Studio Manager</option>
        <option value="accounts">Accounts Team</option>
        <option value="client">Client</option>
      </select>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Login
      </button>
    </div>
  );
}
