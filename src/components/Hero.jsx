import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green-500)]" />
            Digitalisation Partner for Modern Enterprises
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Build faster. Operate smarter. Scale securely.
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            We craft websites, CRMs, ERPs and AI-powered systems that streamline operations and unlock new value across your business.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[var(--color-green-500)] hover:bg-[var(--color-green-400)] text-white px-5 py-3 text-sm font-medium">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-sm font-medium">
              Explore services
            </a>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
