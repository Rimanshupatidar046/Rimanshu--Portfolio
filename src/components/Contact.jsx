import { useState } from 'react'
import useReveal from '../useReveal'
import { links, FORM_ENDPOINT } from '../data/achievements'
export default function Contact() {
  const ref = useReveal(), [msg, setMsg] = useState('')
  const submit = async (e) => {
    e.preventDefault()
    if (!FORM_ENDPOINT) return setMsg(`The form isn’t connected to an email service yet. Please write to ${links.email}.`)
    try { const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(e.target) }); if (!r.ok) throw 0; e.target.reset(); setMsg('Message sent.') }
    catch { setMsg('Sending failed. Please email me directly.') }
  }
  const f = 'w-full border-b border-white/25 bg-transparent py-3 outline-none transition focus:border-lime'
  return (
    <section id="contact" ref={ref} className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
      <h2 data-r className="h-big text-[15vw] md:text-[9vw]">Get in touch</h2>
      <div className="mt-12 grid gap-16 md:grid-cols-2">
        <div data-r>
          <p className="max-w-md text-lg text-white/80">Have an internship opportunity, project idea, hackathon collaboration or interesting problem to solve? Let’s connect.</p>
          <p className="mt-8"><a className="text-xl font-bold hover:text-lime" href={`mailto:${links.email}`}>{links.email}</a></p>
          <p className="mt-2"><a className="text-mute hover:text-lime" href={`tel:${links.phone}`}>{links.phone}</a></p>
          <ul className="mt-8 flex gap-6 text-sm font-semibold">
            {[['GitHub', links.github], ['LinkedIn', links.linkedin], ['Instagram', links.instagram]].filter(x => x[1]).map(([n, h]) => <li key={n}><a href={h} target="_blank" rel="noopener noreferrer" className="hover:text-lime">{n} ↗</a></li>)}
          </ul>
        </div>
        <form data-r onSubmit={submit} className="space-y-6">
          {['name', 'email', 'subject'].map(n => <div key={n}><label htmlFor={n} className="text-xs capitalize text-mute">{n}</label><input id={n} name={n} type={n === 'email' ? 'email' : 'text'} required className={f} /></div>)}
          <div><label htmlFor="message" className="text-xs text-mute">Message</label><textarea id="message" name="message" rows="4" required className={f} /></div>
          <button className="rounded-full bg-lime px-8 py-4 text-sm font-bold text-black">SEND MESSAGE</button>
          <p role="status" className="text-sm text-mute">{msg}</p>
        </form>
      </div>
    </section>)
}
