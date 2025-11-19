import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--color-green-500)] ring-4 ring-[color:rgba(56,166,206,0.15)]" />
            <span className="text-white font-semibold tracking-tight">NovaDigit</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-[var(--color-green-500)] text-white hover:bg-[var(--color-green-400)] transition-colors">
              Contact
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-slate-200 hover:text-white hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 pt-2">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-md text-slate-200 hover:bg-white/10">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-3 py-2 rounded-md bg-[var(--color-green-500)] text-white text-center">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
