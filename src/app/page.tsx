'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 p-4 space-y-6 ${isSidebarOpen ? '' : 'hidden'} md:block`}>
        <h2 className="text-2xl font-bold mb-6">InvertFlow</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/photography" className="hover:underline">Photography</Link>
          <Link href="/editing" className="hover:underline">Editing</Link>
          <Link href="/qc-review" className="hover:underline">QC Review</Link>
          <Link href="/studio-review" className="hover:underline">Studio Review</Link>
          <Link href="/accounts" className="hover:underline">Accounts</Link>
          <Link href="/client" className="hover:underline">Client</Link>
          <Link href="/reports" className="hover:underline">Reports</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold">Welcome to Project Management System</h1>
        <p>Select a page from the sidebar to continue.</p>
      </main>
    </div>
  );
}
