import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useMode from '../Components/Mode'
import { about } from '../Info/Info'
import Background from '../img/scene/Background'
import Meteor from '../img/scene/Meteor'
import Mountain1 from '../img/scene/Mountain1'
import Mountain2 from '../img/scene/Mountain2'
import Mountain3 from '../img/scene/Mountain3'
import './Hero.css'

export default function Hero() {

    const ref = useRef()
    const [clickHere, setClickHere] = useState(!localStorage.getItem('visited'))
    const { setMode } = useContext(useMode)

    useEffect(() => {
        function scroll() {
            ref.current.style.setProperty('--scrollY', `${window.scrollY}px`)
        }
        window.addEventListener('scroll', scroll, { passive: true })
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    const loaderRef = useRef()

    useLayoutEffect(() => {
        setTimeout(() => loaderRef.current.classList.add('done'), 500)
        setTimeout(() => {
            loaderRef.current.remove()
            document.body.classList.remove('no-scroll')
        }, 2500)
    }, [])

    function changeMode(event) {
        window.scrollTo(0, 0)
        event.target.classList.add('change')
        setTimeout(() => setMode(prevMode => !prevMode), 1000)
        setTimeout(() => event.target.classList.remove('change'), 2000)
        if (clickHere) {
            localStorage.setItem('visited', '1')
            setClickHere(false)
        }
    }

    return (
        <>
            <div ref={loaderRef} className='loader'><p>Loading</p><div className='loading' /></div>
            <div className='banner' ref={ref}>
                <div className="bg-scene">
                    <Background />
                </div>
                {clickHere && <div className='popup'>Click here to see magic</div>}
                <div className='sun-moon' onClick={changeMode} />
                <Meteor />
                <div className='layer-3'>
                    <h1>Hello &amp; Welcome</h1>
                    <p>{about}</p>
                    <div className='scroll-gif' />
                </div>
                <Mountain1 />
                <Mountain2 />
                <Mountain3 />
            </div>
        </>
    )
}