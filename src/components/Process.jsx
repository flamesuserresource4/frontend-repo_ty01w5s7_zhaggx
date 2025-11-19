function Process() {
  const steps = [
    { title: 'Kennismaking', desc: 'We bespreken doelen, doelgroep en gewenste functionaliteiten.' },
    { title: 'Concept & Design', desc: 'We maken een strak ontwerp dat past bij jouw merk.' },
    { title: 'Ontwikkeling', desc: 'We bouwen snel en laten je tussentijds meekijken.' },
    { title: 'Lancering & Groei', desc: 'We zetten live, meten en optimaliseren voor resultaat.' },
  ]

  return (
    <section id="process" className="py-20 bg-slate-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Onze aanpak</h2>
          <p className="mt-4 text-slate-600">Transparant, snel en gericht op impact. Dit kun je van ons verwachten.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-black/5 p-6 bg-white">
              <div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm font-semibold mb-4">{i+1}</div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
