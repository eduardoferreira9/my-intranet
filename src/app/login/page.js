'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    // Simula um login: salva um "token"
    localStorage.setItem('token', 'fake-auth-token')
    router.push('/admin')
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/admin') // se já estiver logado
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 p-8 shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <button onClick={handleLogin} className="btn btn-primary w-full">
          Entrar
        </button>
      </div>
    </div>
  )
}
