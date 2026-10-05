import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('[data-r]', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}
