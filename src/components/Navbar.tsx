import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-64 bg-white h-screen border-r">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-6">InvertFlow</h1>
        <ul className="space-y-2">
          {[
            { href: '/photography', label: 'Photography' },
            { href: '/editing', label: 'Editing' },
            { href: '/qc-review', label: 'QC Review' },
            { href: '/studio-review', label: 'Studio Review' },
            { href: '/accounts', label: 'Accounts' },
            { href: '/client', label: 'Client' },
            { href: '/reports', label: 'Reports' },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block p-2 hover:bg-gray-100 rounded transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}