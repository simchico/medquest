import Layout from '@/components/Layout'

export default function Feed() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Feed</h2>
        <div className="space-y-4">
          {/* Example feed items */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="font-semibold">Post Title {item}</h3>
              <p className="text-gray-600 mt-2">
                This is an example post content. Replace with real content from your Supabase database.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
