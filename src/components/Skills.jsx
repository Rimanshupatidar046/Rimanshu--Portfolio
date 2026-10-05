import { skillRows } from '../data/skills'
export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="overflow-hidden border-y border-white/15 py-16 md:py-24">
      <h2 className="sr-only">Skills</h2>
      <div className="space-y-4">
        {skillRows.map((r, i) => (
          <div key={i} className={`mq ${r.dir} [--d:60s] md:[--d:40s]`} aria-hidden={i > 0 || undefined}>
            {[0, 1].map(k => <ul key={k} className="flex shrink-0" aria-hidden={k === 1}>
              {r.items.map(s => <li key={s} className="h-big whitespace-nowrap px-6 text-4xl text-white/90 md:px-10 md:text-7xl">{s}<span className="ml-6 text-lime md:ml-10">/</span></li>)}
            </ul>)}
          </div>))}
      </div>
    </section>)
}
