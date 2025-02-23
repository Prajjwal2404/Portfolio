import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useMode from '../Components/Mode'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Qualifications from '../Qualifications/Qualifications'
import Contact from '../Contact/Contact'
import StarsCanvas from '../Stars/Stars'
import './App.css'

export default function App() {

  const ref = useRef([])
  const [visible, setVisible] = useState(false)
  const [intersecting, setIntersecting] = useState({ education: false, contact: false })
  const { mode } = useContext(useMode)

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
          <Hero />
          <Projects />
          <Skills />
          <Qualifications refEl={ref} intersecting={intersecting.education} />
        </div>
        <div ref={el => ref.current[1] = el} className='star-contact-wrapper'>
          <Contact visible={visible} />
          {visible && <StarsCanvas />}
        </div>
      </ErrorBoundary>
    </div>
  )
}