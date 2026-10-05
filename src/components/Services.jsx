import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import useReveal from '../useReveal'
import { services } from '../data/skills'
export default function Services() {
  const [open, setOpen] = useState(0), ref = useReveal()
  return (
    <section ref={ref} className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
      <h2 data-r className="h-big mb-12 text-[13vw] md:text-[7vw]">What I <span className="serif">build</span></h2>
      <div className="border-t border-white/20">
        {services.map((s, i) => { const on = open === i; return (
          <div key={s.t} data-r className="group relative border-b border-white/20">
            <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-lime transition-transform duration-500 md:group-hover:scale-x-100" />
            <button aria-expanded={on} onClick={() => setOpen(on ? -1 : i)} className="relative z-10 flex w-full items-center gap-4 py-6 text-left transition-colors md:group-hover:text-black">
              <span className="w-10 text-sm text-mute md:group-hover:text-black">0{i + 1}</span>
              <span className="h-big flex-1 text-2xl md:text-5xl">{s.t}</span>
              <ArrowUpRight className={`transition-transform duration-300 ${on ? 'rotate-90' : ''}`} />
            </button>
            <div className={`relative z-10 grid transition-all duration-500 md:group-hover:text-black ${on ? 'grid-rows-[1fr] pb-8' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden pl-14">
                <p className="max-w-2xl text-white/80 md:group-hover:text-black">{s.d}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{s.c.map(c => <li key={c} className="rounded-full border border-white/25 px-3 py-1 text-xs">{c}</li>)}</ul>
              </div>
            </div>
          </div>)})}
      </div>
    </section>)
}
