interface AdminDashboardProps {
  onNavigate: (page: import('../types').PageId) => void
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      <p className="mt-4 text-gray-600">Admin-only area. Content from Figma or custom.</p>
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="mt-4 rounded border px-4 py-2"
      >
        Back to Home
      </button>
    </main>
  )
}
