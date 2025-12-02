'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface AdminModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [adminView, setAdminView] = useState<'login' | 'dashboard'>('login')
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [adminData, setAdminData] = useState({
    casesolved: 45,
    activecases: 12,
    satisfaction: 98,
    yearsactive: 1,
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setAdminView('dashboard')
      setCredentials({ username: '', password: '' })
    } else {
      alert('Invalid credentials')
    }
  }

  const handleDataChange = (field: string, value: number) => {
    setAdminData({ ...adminData, [field]: value })
  }

  const handleLogout = () => {
    setAdminView('login')
    setCredentials({ username: '', password: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-primary">
            {adminView === 'login' ? 'Admin Login' : 'Dashboard'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {adminView === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Username</label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Password</label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Enter password"
                />
              </div>
              {/* <p className="text-xs text-gray-500">Demo: username: admin, password: admin123</p> */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Login
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Cases Solved</label>
                <input
                  type="number"
                  value={adminData.casesolved}
                  onChange={(e) => handleDataChange('casesolved', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Active Cases</label>
                <input
                  type="number"
                  value={adminData.activecases}
                  onChange={(e) => handleDataChange('activecases', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Client Satisfaction %</label>
                <input
                  type="number"
                  value={adminData.satisfaction}
                  onChange={(e) => handleDataChange('satisfaction', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Years Active</label>
                <input
                  type="number"
                  value={adminData.yearsactive}
                  onChange={(e) => handleDataChange('yearsactive', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <p className="text-xs text-gray-500 bg-blue-50 p-3 rounded">
                Note: Changes are stored locally and won't persist on page reload.
              </p>
              <button
                onClick={handleLogout}
                className="w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-secondary/90 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
