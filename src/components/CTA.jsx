export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(28,73,94,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to accelerate your digitalisation?</h2>
        <p className="mt-3 text-slate-300">Tell us about your goals. We’ll get back within one business day.</p>

        <form className="mt-10 grid gap-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-green-500)]" />
            <input required placeholder="Email" type="email" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-green-500)]" />
          </div>
          <input placeholder="Company" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-green-500)]" />
          <textarea required placeholder="What are you looking to build or improve?" rows={5} className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-green-500)]" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--color-green-500)] hover:bg-[var(--color-green-400)] text-white px-5 py-3 text-sm font-medium">Request consultation</button>
        </form>

        <p className="mt-6 text-xs text-slate-400">By submitting, you agree to our privacy policy.</p>
      </div>
    </section>
  )
}
