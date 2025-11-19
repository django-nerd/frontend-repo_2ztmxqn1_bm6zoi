import { Code2, Database, Bot, RefreshCw } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'High-performance, SEO-ready sites with modern stacks and pixel-perfect design.',
  },
  {
    icon: Database,
    title: 'CRM & ERP',
    desc: 'Custom platforms that centralize data, automate workflows and scale with you.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    desc: 'Embed AI agents, RAG search, automations and analytics into your operations.',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    desc: 'Strategy, architecture and delivery to modernize legacy processes end‑to‑end.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,166,206,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300">Execution-focused services that turn ideas into outcomes.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-green-500)]/20 text-[var(--color-green-400)] ring-1 ring-[color:rgba(56,166,206,0.25)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
