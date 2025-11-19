function Projects() {
  const projects = [
    {
      title: 'Coin Collector',
      tags: ['Three.js', 'Game Loop'],
      link: '#',
      color: 'from-yellow-400/30 to-yellow-600/20',
    },
    {
      title: 'Warp Travel',
      tags: ['Routing', 'Accessibility'],
      link: '#',
      color: 'from-green-400/30 to-emerald-600/20',
    },
    {
      title: 'Boss Battle AI',
      tags: ['AI', 'Pathfinding'],
      link: '#',
      color: 'from-red-400/30 to-rose-600/20',
    },
  ]

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Power‑Ups</h2>
          <a href="#contact" className="text-yellow-300 hover:text-yellow-200">See more →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className={`group rounded-2xl border border-white/10 p-6 bg-gradient-to-br ${p.color} hover:border-white/20 transition` }>
              <div className="text-4xl">⭐</div>
              <h3 className="mt-4 text-white font-semibold text-xl">{p.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-6 text-yellow-300 opacity-0 group-hover:opacity-100 transition">Open ↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
