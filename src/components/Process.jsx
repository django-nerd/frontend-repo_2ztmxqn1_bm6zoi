import { Sparkles, Workflow, ShieldCheck, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Sparkles,
    title: 'Discover',
    desc: 'We clarify goals, constraints and success metrics with stakeholders.',
  },
  {
    icon: Workflow,
    title: 'Design',
    desc: 'We architect scalable systems and craft intuitive user experiences.',
  },
  {
    icon: ShieldCheck,
    title: 'Build',
    desc: 'We ship in iterations with rigorous testing, security and observability.',
  },
  {
    icon: Rocket,
    title: 'Scale',
    desc: 'We optimize, automate and hand over with documentation and training.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">How we work</h2>
          <p className="mt-3 text-slate-300">A proven path from idea to impact.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 counter-reset">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-[var(--color-green-500)] text-white flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-green-500)]/20 text-[var(--color-green-400)] ring-1 ring-[color:rgba(56,166,206,0.25)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
