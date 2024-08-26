import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Qualifications from '../Qualifications/Qualifications'
import Contact from '../Contact/Contact'
import { EarthLoader } from '../Components/EarthCanvas'
import StarsCanvas from '../Stars/Stars'
import './App.css'

export default function App() {

  const [mode, setMode] = useState(window.matchMedia('(prefers-color-scheme: light)').matches)

  useEffect(() => {
    let check = window.matchMedia('(prefers-color-scheme: light)')
    function change() {
      setMode(check.matches)
    }
    check.addEventListener('change', change)
    return () => check.removeEventListener('change', change)
  }, [])

  useEffect(() => {
    const preLoad = async () => EarthLoader()
    preLoad().catch(() => { })
  }, [])

  const ref = useRef([])
  const [visible, setVisible] = useState(false)
  const [intersecting, setIntersecting] = useState({ education: false, contact: false })

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === ref.current[0])
          setIntersecting(prevIntersecting => ({ ...prevIntersecting, education: entry.isIntersecting }))
        else setIntersecting(prevIntersecting => ({ ...prevIntersecting, contact: entry.isIntersecting }))
      })
    })
    observer.observe(ref.current[0])
    observer.observe(ref.current[1])
    return () => observer.disconnect()
  }, [])

  useEffect(() => intersecting.education || intersecting.contact ? setVisible(true) : setVisible(false), [intersecting])

  return (
    <div id='theme' data-mode={mode ? 'light' : 'dark'}>
      <ErrorBoundary>
        <div className='gradient-background-div'>
          <Hero setMode={setMode} />
          <Projects />
          <Skills mode={mode} />
          <Qualifications refEl={ref} intersecting={intersecting.education} />
        </div>
        <div ref={el => ref.current[1] = el} className='star-contact-wrapper'>
          <Contact visible={visible} />
          {visible && <StarsCanvas mode={mode} />}
        </div>
      </ErrorBoundary>
    </div>
  )
}