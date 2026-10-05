import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown } from 'lucide-react'
const CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*'
export default function Hero() {
  const root = useRef(null), word = useRef(null)
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let tl, timer, dead = false
    const from = 'RIMANSHU', to = 'PORTFOLIO'
    const set = (t) => { if (word.current) word.current.textContent = t }
    set(from)
    const img = new Image(); img.src = '/images/rimanshu-hero.png'
    const go = () => {
      if (dead) return
      const ctx = gsap.context(() => {
        if (reduce) { set(to); gsap.set('.h-in', { opacity: 1, y: 0 }); gsap.set('.h-img', { yPercent: 0, opacity: 1 }); return }
        document.documentElement.style.overflow = 'hidden'
        const p = { v: 0 }
        tl = gsap.timeline({ onComplete: () => (document.documentElement.style.overflow = '') })
        tl.to(p, { v: 1, duration: 1.8, ease: 'power3.inOut', delay: .9, onUpdate: () => {
          const n = to.length; let out = ''
          for (let i = 0; i < n; i++) {
            const k = p.v * (n + 4) - i * 0.6
            out += k >= 3 ? to[i] : k <= 0 ? (from[i] || '') : CH[(Math.random() * CH.length) | 0]
          }
          set(out)
        }, onComplete: () => set(to) })
          .to(word.current, { yPercent: -28, scale: .9, duration: 1.1, ease: 'power3.inOut' }, '+=.4')
          .to('.h-img', { yPercent: 0, opacity: 1, duration: 1.3, ease: 'power3.out' }, '<.1')
          .to('.h-in', { y: 0, opacity: 1, duration: .9, ease: 'power3.out', stagger: .15 }, '-=.5')
      }, root)
      timer = ctx
    }
    img.decode ? img.decode().then(go, go) : (img.onload = go)
    return () => { dead = true; tl && tl.kill(); timer && timer.revert && timer.revert(); document.documentElement.style.overflow = '' }
  }, [])
  return (
    <section id="top" ref={root} className="relative flex h-svh min-h-[640px] items-end justify-center overflow-hidden"
      style={{ background: 'radial-gradient(60% 50% at 50% 55%, rgba(204,255,0,.09), transparent 70%), #050505' }}>
      <h1 aria-label="Rimanshu Portfolio" className="absolute top-[22%] left-1/2 w-full -translate-x-1/2 text-center">
        <span ref={word} aria-hidden="true" className="metal h-big block whitespace-nowrap text-[13vw] md:text-[12vw]">RIMANSHU</span>
      </h1>
      <img src="/images/rimanshu-hero.png" alt="Rimanshu Patidar" fetchpriority="high"
        className="h-img relative z-10 h-[78%] w-auto max-w-[92%] translate-y-full object-cover object-top opacity-0 md:h-[88%]"
        style={{ WebkitMaskImage: 'radial-gradient(ellipse 62% 70% at 50% 40%, #000 55%, transparent 100%)', maskImage: 'radial-gradient(ellipse 62% 70% at 50% 40%, #000 55%, transparent 100%)' }} />
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-4 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-8 pt-24 text-center md:flex-row md:justify-between md:px-12 md:text-left">
        <p className="h-in translate-y-6 opacity-0 text-xl leading-tight md:text-3xl"><strong className="font-black">AI/ML Enthusiast</strong><br /><span className="serif text-mute">Web Developer</span></p>
        <p className="h-in translate-y-6 opacity-0 text-xs text-mute"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime" />Open to internships, hackathons & technical opportunities</p>
        <div className="h-in translate-y-6 opacity-0 flex items-center gap-4">
          <a href="/resume/Resume.png" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-lime">VIEW RESUME ↗</a>
          <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-6 pr-2 text-sm font-bold text-black">
            Contact Me <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-lime"><ArrowDown size={16} /></span></a>
        </div>
      </div>
    </section>)
}
