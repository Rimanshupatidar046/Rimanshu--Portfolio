import { ArrowUpRight } from 'lucide-react'
import useReveal from '../useReveal'
import { projects } from '../data/projects'
function Project({ p, i }) {
  const ref = useReveal(), flip = i % 2 === 1
  return (
    <article ref={ref} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      <div data-r className={`group aspect-[16/10] overflow-hidden bg-white/5 ${flip ? 'md:order-2' : ''} max-md:order-none`}>
        {p.image
          ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          : <div className="grid h-full place-items-center border border-white/15 p-6 text-center text-sm text-mute">Add a screenshot of {p.name} in data/projects.js</div>}
      </div>
      <div className="max-md:-order-1 md:contents-none">
        <div data-r className="flex items-baseline gap-4"><span className="h-big text-6xl text-lime md:text-8xl">{p.id}</span></div>
        <h3 data-r className="h-big mt-2 text-4xl md:text-6xl">{p.name}</h3>
        <p data-r className="mt-2 text-xs tracking-widest text-mute">{p.category}</p>
        <p data-r className="mt-6 max-w-xl text-white/80">{p.desc}</p>
        {p.highlight && <p data-r className="mt-4 text-sm text-lime">{p.highlight}</p>}
        {p.tags.length > 0 && <ul data-r className="mt-5 flex flex-wrap gap-2">{p.tags.map(t => <li key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs">{t}</li>)}</ul>}
        <div data-r className="mt-8 flex flex-wrap gap-3">
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-black">LIVE PROJECT <ArrowUpRight size={16} /></a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold">GITHUB <ArrowUpRight size={16} /></a>}
        </div>
      </div>
    </article>)
}
export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
      <h2 className="h-big mb-20 text-[16vw] md:text-[10vw]">Selected <span className="serif text-lime">work</span></h2>
      <div className="space-y-28 md:space-y-40">{projects.map((p, i) => <Project key={p.id} p={p} i={i} />)}</div>
    </section>)
}
