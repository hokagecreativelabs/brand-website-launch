import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li><Link href="/admin/dashboard">Dashboard</Link></li>
          <li><Link href="/admin/blogs">Manage Blogs</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
