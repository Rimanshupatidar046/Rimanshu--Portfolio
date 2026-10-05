import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
const items = ['About','Skills','Work','Achievements','Resume','Contact']
export default function Navbar() {
  const [s, setS] = useState(false), [o, setO] = useState(false)
  useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const id = (i) => '#' + i.toLowerCase()
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${s ? 'py-3 backdrop-blur-md bg-black/50' : 'py-6'}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="font-black tracking-tight">RP <span className="text-mute font-light">/ RIMANSHU</span></a>
        <ul className="hidden gap-8 text-xs font-semibold tracking-widest md:flex">
          {items.map(i => <li key={i}><a href={i === 'Resume' ? '/resume/Resume.png' : id(i)} target={i === 'Resume' ? '_blank' : undefined} rel={i === 'Resume' ? 'noopener noreferrer' : undefined} className="text-white/70 transition hover:text-lime">{i.toUpperCase()}</a></li>)}
        </ul>
        <button className="md:hidden" aria-label={o ? 'Close menu' : 'Open menu'} aria-expanded={o} onClick={() => setO(!o)}>{o ? <X /> : <Menu />}</button>
      </nav>
      {o && <div className="fixed inset-0 -z-10 flex flex-col justify-center gap-6 bg-ink px-8 md:hidden">
        {items.map(i => <a key={i} href={i === 'Resume' ? '/resume/Resume.png' : id(i)} target={i === 'Resume' ? '_blank' : undefined} rel={i === 'Resume' ? 'noopener noreferrer' : undefined} onClick={() => setO(false)} className="h-big text-5xl">{i}</a>)}</div>}
    </header>)
}
