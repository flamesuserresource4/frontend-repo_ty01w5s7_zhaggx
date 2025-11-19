import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service_type: 'both', budget: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || `Request failed: ${res.status}`)
      }

      const data = await res.json()
      setStatus({ loading: false, success: 'Bedankt! We nemen snel contact op.', error: null })
      setForm({ name: '', email: '', company: '', service_type: 'both', budget: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Klaar om te starten?</h2>
          <p className="mt-4 text-slate-600">Vertel kort wat je wil. We reageren binnen 24 uur met een helder voorstel.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
          <input className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Naam" name="name" value={form.name} onChange={handleChange} required />
          <input className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="E-mail" name="email" value={form.email} onChange={handleChange} required />
          <input className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Bedrijf (optioneel)" name="company" value={form.company} onChange={handleChange} />
          <select className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" name="service_type" value={form.service_type} onChange={handleChange}>
            <option value="web">Website</option>
            <option value="ai">AI integratie</option>
            <option value="both">Beide</option>
          </select>
          <input className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 sm:col-span-2" placeholder="Budget (optioneel)" name="budget" value={form.budget} onChange={handleChange} />
          <textarea className="border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 sm:col-span-2" placeholder="Beschrijf kort je project" name="message" rows={5} value={form.message} onChange={handleChange} required />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button disabled={status.loading} className="px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
              {status.loading ? 'Versturen...' : 'Verstuur aanvraag'}
            </button>
            {status.success && <span className="text-emerald-600">{status.success}</span>}
            {status.error && <span className="text-red-600">{status.error}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
