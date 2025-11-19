import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <section id="portfolio" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold">Recent werk</h2>
              <p className="mt-4 text-slate-600">Een selectie van projecten waar we trots op zijn.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="rounded-xl overflow-hidden border border-black/5 hover:shadow-lg transition">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700" />
                  <div className="p-4">
                    <h3 className="font-semibold">Project {i}</h3>
                    <p className="text-sm text-slate-600">Conversion-focused bedrijfswebsite met AI lead-assistent.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} SiteOnCreations — Websites & AI integratie
      </footer>
    </div>
  )
}

export default App
