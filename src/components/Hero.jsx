function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl"/>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Websites op maat met slimme AI-integratie
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              SiteOnCreations helpt bedrijven groeien met moderne, snelle websites en praktische AI-oplossingen die processen automatiseren en leads omzetten in klanten.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">
                Offerte aanvragen
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50">
                Voorbeelden bekijken
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Snelle oplevering</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"/> SEO geoptimaliseerd</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500"/> AI-ready</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-2xl ring-1 ring-black/5">
              <div className="h-full w-full rounded-xl bg-white/5 p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                    <div className="h-24 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500" />
                    <div className="mt-4 h-3 w-2/3 rounded bg-white/10"/>
                    <div className="mt-2 h-3 w-1/2 rounded bg-white/10"/>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                    <div className="h-24 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500" />
                    <div className="mt-4 h-3 w-2/3 rounded bg-white/10"/>
                    <div className="mt-2 h-3 w-1/2 rounded bg-white/10"/>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                    <div className="h-24 rounded-md bg-gradient-to-br from-emerald-500 to-teal-500" />
                    <div className="mt-4 h-3 w-2/3 rounded bg-white/10"/>
                    <div className="mt-2 h-3 w-1/2 rounded bg-white/10"/>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                    <div className="h-24 rounded-md bg-gradient-to-br from-fuchsia-500 to-pink-500" />
                    <div className="mt-4 h-3 w-2/3 rounded bg-white/10"/>
                    <div className="mt-2 h-3 w-1/2 rounded bg-white/10"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
