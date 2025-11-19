function Services() {
  const services = [
    {
      title: 'Website Ontwikkeling',
      desc: 'Snel, veilig en mooi. Volledig op maat voor jouw merk met focus op conversie.',
      points: ['Modern design', 'Responsive & snel', 'SEO & analytics']
    },
    {
      title: 'AI Integratie',
      desc: 'Van chatbots tot workflow-automatisering: praktische AI die direct waarde levert.',
      points: ['Chatbots & assistenten', 'Procesautomatisering', 'Koppelingen met tools']
    },
    {
      title: 'Branding & Content',
      desc: 'Van copy tot visuals: wij helpen je verhaal helder en overtuigend te vertellen.',
      points: ['Naam & huisstijl', 'Conversie-copy', 'Beeld & video']
    }
  ]

  return (
    <section id="services" className="py-20 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Wat we voor je bouwen</h2>
          <p className="mt-4 text-slate-600">Kies wat je nodig hebt of combineer. We denken mee en leveren snel op.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-black/5 p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600 list-disc pl-5">
                {s.points.map(p => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
