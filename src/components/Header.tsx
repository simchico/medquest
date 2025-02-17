'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function Header() {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/auth/login')
      toast.success('Signed out successfully')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Feed App</h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleSignOut}
              className="ml-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
