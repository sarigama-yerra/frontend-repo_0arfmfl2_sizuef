import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur mb-4">
              <span className="text-yellow-300">⭐</span>
              <span className="text-sm">3D Mario Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">Jump into my world.</h1>
            <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              An interactive playground where projects turn into power-ups and ideas level up in real time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 pointer-events-auto">
              <a href="#projects" className="px-5 py-3 rounded-full bg-yellow-400 text-slate-900 font-semibold shadow hover:scale-[1.02] active:scale-[0.98] transition-transform">Explore Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
