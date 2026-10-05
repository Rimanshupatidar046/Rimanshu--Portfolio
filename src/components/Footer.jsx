import useReveal from '../useReveal'
import { links } from '../data/achievements'
export default function Footer() {
  const ref = useReveal()
  const nav = [['Home', '#top'], ['About', '#about'], ['Skills', '#skills'], ['Work', '#work'], ['Achievements', '#achievements'], ['Contact', '#contact']]
  return (
    <footer ref={ref} className="overflow-hidden border-t border-white/15 px-6 pt-16 md:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-8 text-sm text-mute">
        <p>AI/ML Enthusiast<br />Web Developer<br /><a className="hover:text-lime" href={`mailto:${links.email}`}>{links.email}</a><br /><a className="hover:text-lime" href={`tel:${links.phone}`}>{links.phone}</a></p>
        <ul className="flex flex-wrap gap-5">{nav.map(([n, h]) => <li key={n}><a href={h} className="hover:text-lime">{n}</a></li>)}</ul>
        <ul className="flex gap-5">{[['GitHub', links.github], ['LinkedIn', links.linkedin], ['Instagram', links.instagram]].filter(x => x[1]).map(([n, h]) => <li key={n}><a href={h} target="_blank" rel="noopener noreferrer" className="hover:text-lime">{n}</a></li>)}</ul>
      </div>
      <p data-r className="metal h-big mt-10 text-center whitespace-nowrap text-[14vw] leading-[.9]">RIMANSHU</p>
      <p className="py-6 text-center text-xs text-mute">© 2026 Rimanshu Patidar. All Rights Reserved.</p>
    </footer>)
}
