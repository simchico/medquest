'use client'

import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-gray-900">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">User ID</label>
              <p className="mt-1 text-gray-900">{user?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
