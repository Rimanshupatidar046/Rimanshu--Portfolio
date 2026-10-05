import useReveal from '../useReveal'
import { education } from '../data/achievements'
const paras = [
 'I’m Rimanshu Patidar, an AI/ML undergraduate and web developer interested in building practical technology that solves real-world problems.',
 'I enjoy working at the intersection of artificial intelligence, web development and creative technology. My projects explore areas such as AI-powered agriculture, workforce intelligence and digital platforms.',
 'I actively participate in hackathons, technical competitions and student ambassador initiatives, where I get to turn ideas into working products, collaborate with teams and learn by building.',
 'My long-term goal is to grow into an AI Engineer who can build useful, reliable and user-focused AI products.']
export default function About() {
  const ref = useReveal()
  return (
    <section id="about" ref={ref} className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div data-r className="aspect-[4/5] overflow-hidden rounded-sm">
          <img src="/images/rimanshu-about.png" alt="Portrait of Rimanshu Patidar" loading="lazy" className="h-full w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0" />
        </div>
        <div>
          <h2 data-r className="h-big text-[18vw] md:text-[9vw]">Intro</h2>
          <div data-r className="mt-8 space-y-4 rounded-2xl border border-white/15 bg-white/5 p-6 text-[15px] leading-relaxed text-white/80 backdrop-blur md:p-8">
            {paras.map(p => <p key={p}>{p}</p>)}
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h3 data-r className="mb-6 text-sm font-semibold tracking-widest text-mute">EDUCATION</h3>
        <ol className="border-l border-white/20">
          {education.map(e => (
            <li data-r key={e.t} className="relative grid gap-1 py-5 pl-8 md:grid-cols-[180px_1fr_auto] md:gap-8">
              <span className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-lime" />
              <span className="text-mute">{e.y}</span>
              <span><b className="font-semibold">{e.t}</b>{e.s && <span className="block text-sm text-mute">{e.s}</span>}</span>
              <span className="text-lime">{e.m}</span>
            </li>))}
        </ol>
      </div>
    </section>)
}
