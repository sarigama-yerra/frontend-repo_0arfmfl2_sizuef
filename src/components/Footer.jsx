function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-white text-2xl font-bold">Let’s build your next level</h3>
          <p className="text-white/70 mt-2">I’m available for collaborations, freelance, and full‑time roles.</p>
        </div>
        <div className="flex md:justify-end">
          <a href="mailto:hello@example.com" className="px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-semibold shadow hover:scale-[1.02] active:scale-[0.98] transition-transform">Email Me</a>
        </div>
      </div>
      <div className="px-6 py-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} MarioVerse • Built with love and mushrooms 🍄</div>
    </footer>
  )
}

export default Footer
