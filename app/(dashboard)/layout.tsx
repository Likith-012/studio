// app/(dashboard)/layout.tsx
'use client'; // Required for using SidebarProvider context

import Navbar from '../../src/components/Navbar';
import { useSidebar } from '../../src/context/SidebarProvider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className={`flex-1 p-4 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        {children}
      </main>
    </div>
  );
}