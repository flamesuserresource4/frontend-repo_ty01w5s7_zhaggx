import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 shadow-inner" />
            <span className="font-semibold text-slate-900">SiteOnCreations</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <button onClick={() => scrollTo('services')} className="hover:text-slate-900">Diensten</button>
            <button onClick={() => scrollTo('process')} className="hover:text-slate-900">Aanpak</button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-slate-900">Portfolio</button>
            <button onClick={() => scrollTo('contact')} className="px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800">Offerte aanvragen</button>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="px-4 py-3 space-y-2">
            <button onClick={() => scrollTo('services')} className="block w-full text-left py-2">Diensten</button>
            <button onClick={() => scrollTo('process')} className="block w-full text-left py-2">Aanpak</button>
            <button onClick={() => scrollTo('portfolio')} className="block w-full text-left py-2">Portfolio</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2 font-medium text-white bg-slate-900 rounded-md">Offerte aanvragen</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
