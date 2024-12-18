import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useMode from '../Components/Mode'
import { about } from '../Info/Info'
import backgroundDark from '../img/dark/background.webp'
import mountain1Dark from '../img/dark/mountain1.webp'
import mountain2Dark from '../img/dark/mountain2.webp'
import mountain3Dark from '../img/dark/mountain3.webp'
import meteorDark from '../img/dark/meteor.webp'
import backgroundLight from '../img/light/background.webp'
import mountain1Light from '../img/light/mountain1.webp'
import mountain2Light from '../img/light/mountain2.webp'
import mountain3Light from '../img/light/mountain3.webp'
import birdLight from '../img/light/bird.webp'
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
    const imagesRef = useRef([])

    useLayoutEffect(() => {
        function checkImages() {
            const loaded = imagesRef.current.every(image => image.complete)
            if (loaded) {
                clearInterval(interval)
                loaderRef.current.classList.add('done')
                setTimeout(() => {
                    loaderRef.current.style.display = 'none'
                    document.body.classList.remove('no-scroll')
                }, 2000)
            }
        }
        const interval = setInterval(checkImages, 100)
        return () => clearInterval(interval)
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
                <div className='bg-light'>
                    <img ref={el => imagesRef.current[0] = el} className='layer-1' src={backgroundLight} alt="background" />
                </div>
                <div className='bg-dark'>
                    <img ref={el => imagesRef.current[1] = el} className='layer-1' src={backgroundDark} alt="background" />
                </div>
                {clickHere && <div className='popup'>Click here to see magic</div>}
                <div className='sun-moon' onClick={changeMode} />
                <img ref={el => imagesRef.current[2] = el} className='layer-2 light' src={birdLight} alt="bird" />
                <img ref={el => imagesRef.current[3] = el} className='layer-2 dark' src={meteorDark} alt="meteor" />
                <div className='layer-3'>
                    <h1>Hello &amp; Welcome</h1>
                    <p>{about}</p>
                    <div className='scroll-gif' />
                </div>
                <img ref={el => imagesRef.current[4] = el} className='layer-4 light' src={mountain1Light} alt="mountain1" />
                <img ref={el => imagesRef.current[5] = el} className='layer-4 dark' src={mountain1Dark} alt="mountain1" />
                <img ref={el => imagesRef.current[6] = el} className='layer-5 light' src={mountain2Light} alt="mountain2" />
                <img ref={el => imagesRef.current[7] = el} className='layer-5 dark' src={mountain2Dark} alt="mountain2" />
                <img ref={el => imagesRef.current[8] = el} className='layer-6 light' src={mountain3Light} alt="mountain3" />
                <img ref={el => imagesRef.current[9] = el} className='layer-6 dark' src={mountain3Dark} alt="mountain3" />
            </div>
        </>
    )
}