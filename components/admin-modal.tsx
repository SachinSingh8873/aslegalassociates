'use client'

import { useState, useEffect } from 'react'
import { 
  X, Phone, Mail, MessageSquare, Calendar, User, 
  Shield, CheckCircle, XCircle, Clock, FileText,
  ExternalLink, Filter, Search, Download, RefreshCw,
  ChevronLeft, ChevronRight
} from 'lucide-react'

interface AdminModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Lead {
  id: string
  row_number: number
  timestamp: string
  name: string
  email: string
  phone: string
  legal_matter: string
  message: string
  status: string
  notes: string
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [adminView, setAdminView] = useState<'login' | 'dashboard'>('login')
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [notes, setNotes] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Your Google Apps Script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxA3_VC_mrBJF5-iAT64kVUd6kHoQXMVeVGIGukRAYzg1fmTGhi4FyMkWwRWhSnEs5rxA/exec'

  // Fetch leads from Google Sheets
  const fetchLeads = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getLeads`)
      const data = await response.json()
      
      if (data.success && data.leads) {
        setLeads(data.leads)
      } else {
        console.error('Failed to fetch leads:', data)
      }
    } catch (error) {
      console.error('Error fetching leads:', error)
      // For demo, show message
      alert('Failed to fetch leads. Check console for details.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (credentials.username === 'avinashsingh0' && credentials.password === 'avinash@8252') {
      setAdminView('dashboard')
      setCredentials({ username: '', password: '' })
      fetchLeads()
    } else {
      alert('Invalid credentials')
    }
  }

  const updateLeadStatus = async (leadId: string, newStatus: string, notes: string) => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'updateStatus',
          leadId,
          status: newStatus,
          notes
        })
      })

      // Update local state
      setLeads(leads.map(lead => 
        lead.id === leadId ? { 
          ...lead, 
          status: newStatus,
          notes: notes 
        } : lead
      ))

      if (selectedLead?.id === leadId) {
        setSelectedLead({
          ...selectedLead,
          status: newStatus,
          notes: notes
        })
      }

    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleStatusChange = (leadId: string, newStatus: string) => {
    updateLeadStatus(leadId, newStatus, notes)
  }

  const handleCallClick = (phone: string) => {
    const cleanPhone = phone.replace(/\s+/g, '')
    window.open(`tel:${cleanPhone}`, '_self')
  }

  const handleEmailClick = (email: string, name: string) => {
    const subject = `Regarding your legal consultation - Advocate Avinash Singh`
    const body = `Dear ${name},\n\nThank you for contacting Advocate Avinash Singh. I'm following up on your legal consultation request.\n\nBest regards,\nAdvocate Avinash Singh`
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self')
  }

  const handleWhatsAppClick = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, this is Advocate Avinash Singh following up on your legal consultation request. How may I assist you?`)
    const whatsappUrl = `https://wa.me/91${phone.replace(/\D/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleLogout = () => {
    setAdminView('login')
    setCredentials({ username: '', password: '' })
    setLeads([])
    setSelectedLead(null)
    onClose()
  }

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone?.includes(searchTerm) ||
      lead.legal_matter?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedLeads = filteredLeads.slice(startIndex, startIndex + itemsPerPage)

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'new': return 'bg-red-100 text-red-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'consulted': return 'bg-blue-100 text-blue-800'
      case 'closed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const exportToCSV = () => {
    const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Legal Matter', 'Status', 'Notes']
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(lead => [
        `"${lead.timestamp || ''}"`,
        `"${lead.name || ''}"`,
        `"${lead.email || ''}"`,
        `"${lead.phone || ''}"`,
        `"${lead.legal_matter || ''}"`,
        `"${lead.status || ''}"`,
        `"${lead.notes || ''}"`
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `legal-leads-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className={`bg-white rounded-lg shadow-xl ${selectedLead ? 'max-w-4xl' : 'max-w-6xl'} w-full max-h-[90vh] overflow-hidden`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <Shield className="text-primary" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-primary">
                {adminView === 'login' ? 'Admin Login' : 'Legal Leads Dashboard'}
              </h2>
              {adminView === 'dashboard' && (
                <p className="text-sm text-gray-600">
                  Total: {leads.length} | Filtered: {filteredLeads.length} | Page {currentPage} of {totalPages}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {adminView === 'dashboard' && (
              <>
                <button
                  onClick={fetchLeads}
                  disabled={loading}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  {loading ? 'Loading...' : 'Refresh'}
                </button>
                <button
                  onClick={exportToCSV}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <Download size={16} />
                  Export
                </button>
              </>
            )}
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {adminView === 'login' ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Username</label>
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Enter username"
                    autoComplete="username"
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
                    autoComplete="current-password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Login
                </button>
              </form>
            </div>
          ) : selectedLead ? (
            // Lead Detail View
            <div className="space-y-6">
              <button
                onClick={() => setSelectedLead(null)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4"
              >
                <ChevronLeft size={16} />
                Back to all leads
              </button>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{selectedLead.name}</h3>
                    <div className="flex gap-4 mt-2">
                      <p className="text-gray-600">{selectedLead.email}</p>
                      <p className="text-gray-600">{selectedLead.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedLead.status)}`}>
                      {selectedLead.status?.toUpperCase() || 'NEW'}
                    </span>
                    <select
                      value={selectedLead.status || 'New'}
                      onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                      className="px-3 py-1 border rounded-lg text-sm"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Consulted">Consulted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <FileText size={16} />
                      Legal Matter
                    </h4>
                    <p className="text-gray-800">{selectedLead.legal_matter}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Clock size={16} />
                      Submitted
                    </h4>
                    <p className="text-gray-800">{selectedLead.timestamp}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <MessageSquare size={16} />
                    Message
                  </h4>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="text-gray-800 whitespace-pre-wrap">{selectedLead.message}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <FileText size={16} />
                    Notes
                  </h4>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    onBlur={() => updateLeadStatus(selectedLead.id, selectedLead.status || 'New', notes)}
                    placeholder="Add your notes here..."
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none h-32"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => handleCallClick(selectedLead.phone)}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    <Phone size={20} />
                    Call Now
                  </button>
                  <button
                    onClick={() => handleWhatsAppClick(selectedLead.phone, selectedLead.name)}
                    className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    <MessageSquare size={20} />
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleEmailClick(selectedLead.email, selectedLead.name)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Mail size={20} />
                    Send Email
                  </button>
                  <button
                    onClick={() => window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+${encodeURIComponent(selectedLead.name)}&details=${encodeURIComponent(selectedLead.message)}`, '_blank')}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    <Calendar size={20} />
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Leads List View
            <>
              {/* Filters and Search */}
              <div className="mb-6 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search by name, email, phone, or matter..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Filter className="text-gray-400 mt-2" size={20} />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="all">All Status</option>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Consulted">Consulted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading leads from Google Sheets...</p>
                </div>
              ) : filteredLeads.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No leads found</p>
                  <button
                    onClick={fetchLeads}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                  >
                    Refresh Data
                  </button>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="text-left p-3 font-semibold text-primary">Date</th>
                          <th className="text-left p-3 font-semibold text-primary">Name</th>
                          <th className="text-left p-3 font-semibold text-primary">Contact</th>
                          <th className="text-left p-3 font-semibold text-primary">Legal Matter</th>
                          <th className="text-left p-3 font-semibold text-primary">Status</th>
                          <th className="text-left p-3 font-semibold text-primary">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedLeads.map((lead) => (
                          <tr key={lead.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">
                              <div className="text-sm text-gray-600">
                                {lead.timestamp ? new Date(lead.timestamp).toLocaleDateString() : 'N/A'}
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="font-medium">{lead.name}</div>
                              <div className="text-xs text-gray-500 truncate max-w-xs">
                                {lead.message?.substring(0, 50)}...
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="space-y-1">
                                <div className="text-sm">{lead.phone}</div>
                                <div className="text-xs text-gray-500 truncate">{lead.email}</div>
                              </div>
                            </td>
                            <td className="p-3">
                              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                {lead.legal_matter}
                              </span>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(lead.status)}`}>
                                  {lead.status?.toUpperCase() || 'NEW'}
                                </span>
                                <select
                                  value={lead.status || 'New'}
                                  onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                  className="text-sm border rounded px-2 py-1"
                                >
                                  <option value="New">New</option>
                                  <option value="Contacted">Contacted</option>
                                  <option value="Consulted">Consulted</option>
                                  <option value="Closed">Closed</option>
                                </select>
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => setSelectedLead(lead)}
                                  className="p-2 text-primary hover:bg-primary/10 rounded"
                                  title="View Details"
                                >
                                  <ExternalLink size={16} />
                                </button>
                                <button
                                  onClick={() => handleCallClick(lead.phone)}
                                  className="p-2 text-green-600 hover:bg-green-50 rounded"
                                  title="Call"
                                >
                                  <Phone size={16} />
                                </button>
                                <button
                                  onClick={() => handleWhatsAppClick(lead.phone, lead.name)}
                                  className="p-2 text-green-500 hover:bg-green-50 rounded"
                                  title="WhatsApp"
                                >
                                  <MessageSquare size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-6">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 disabled:opacity-50"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 disabled:opacity-50"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {adminView === 'dashboard' && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Connected to Google Sheets | Total leads: {leads.length}
              </p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}