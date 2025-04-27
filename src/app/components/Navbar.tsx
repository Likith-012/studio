'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Loader from './Loader'; // ⬅️ Import Loader

const Navbar = () => {
  const [user, setUser] = useState<{ role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          console.error('Failed to fetch user');
        }
      } catch (error) {
        console.error('Error fetching user', error);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return <Loader />; // ⬅️ Show Loader while checking user
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div>
        <Link href="/"><span className="font-bold text-lg">Studio Management</span></Link>
      </div>
      <div className="flex gap-4">
        {user?.role === 'photographer' && (
          <Link href="/photographer">Upload Photos</Link>
        )}
        {user?.role === 'editor' && (
          <Link href="/editor">Upload Edited Photos</Link>
        )}
        {user?.role === 'qc' && (
          <Link href="/qc">QC Approval</Link>
        )}
        {user?.role === 'studio_manager' && (
          <Link href="/studio-manager">Studio Review</Link>
        )}
        {user?.role === 'accounts' && (
          <Link href="/accounts">Accounts Invoice</Link>
        )}
        {user?.role === 'client' && (
          <Link href="/client">Client Dashboard</Link>
        )}
        <Link href="/reports">Reports</Link>
        {user && (
          <button onClick={handleLogout} className="ml-4 bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
