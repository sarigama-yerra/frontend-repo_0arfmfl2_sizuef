function Features() {
  const items = [
    {
      title: 'Playable hero',
      desc: 'Walk, jump, and discover hidden easter eggs across the scene.',
      emoji: '🍄',
    },
    {
      title: 'Project power-ups',
      desc: 'Each project is a block—hit it to reveal details, videos, and links.',
      emoji: '⭐',
    },
    {
      title: 'Warp pipes to sections',
      desc: 'Instantly travel to About, Skills, and Contact portals from the 3D world.',
      emoji: '🟢',
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="mt-3 text-white font-semibold text-xl">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
