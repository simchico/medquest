import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm hidden md:block min-h-screen">
      <nav className="mt-5 px-2">
        <Link
          href="/feed"
          className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          Feed
        </Link>
        <Link
          href="/profile"
          className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          Profile
        </Link>
      </nav>
    </aside>
  )
}
