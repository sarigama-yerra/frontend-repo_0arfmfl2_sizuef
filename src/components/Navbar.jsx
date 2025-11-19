import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = 'text-white/90 hover:text-white transition-colors'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-red-500 to-yellow-400 shadow-lg shadow-red-500/30 grid place-items-center text-white font-black">M</div>
          <span className="text-white font-semibold tracking-tight group-hover:opacity-100 opacity-90">MarioVerse</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className={linkClass}>About</a>
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform">
            ✨ Contact
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 focus:outline-none" aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-slate-900/80 backdrop-blur border-t border-white/10">
          <a href="#about" onClick={() => setOpen(false)} className={linkClass}>About</a>
          <a href="#projects" onClick={() => setOpen(false)} className={linkClass}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2 rounded-full bg-yellow-400 text-slate-900 font-semibold">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
