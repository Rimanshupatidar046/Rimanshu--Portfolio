import useReveal from '../useReveal'
import { achievements, certifications } from '../data/achievements'
export default function Achievements() {
  const ref = useReveal()
  return (
    <section id="achievements" ref={ref} className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
      <h2 data-r className="h-big mb-12 text-[13vw] md:text-[7vw]">Beyond the <span className="serif">code</span></h2>
      <ol className="border-t border-white/20">
        {achievements.map((a, i) => (
          <li data-r key={a.t} className="grid gap-2 border-b border-white/20 py-8 md:grid-cols-[100px_1fr_1fr] md:gap-8">
            <span className="text-lime">0{i + 1}</span><h3 className="text-xl font-black uppercase md:text-2xl">{a.t}</h3><p className="text-white/70">{a.d}</p>
          </li>))}
      </ol>
      <h3 data-r className="mb-4 mt-16 text-sm font-semibold tracking-widest text-mute">CERTIFICATIONS</h3>
      <ul className="flex flex-wrap gap-3">{certifications.map(c => <li data-r key={c} className="rounded-full border border-white/20 px-4 py-2 text-sm">{c}</li>)}</ul>
    </section>)
}
