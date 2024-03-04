import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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

export default function Hero({ mode, setMode }) {

    const ref = useRef()
    const [clickHere, setClickHere] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('visited')) setClickHere(true)
    }, [])

    useEffect(() => {
        function scroll() {
            ref.current.style.setProperty('--scrollY', `${window.scrollY}px`)
        }
        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    const images = useRef([])

    useLayoutEffect(() => {
        function checkImages() {
            var loaded = true
            for (let i = 1; i < images.current.length; i++) {
                if (!images.current[i].complete) {
                    loaded = false
                    break
                }
            }
            if (loaded) {
                setTimeout(() => document.body.classList.remove('no-scroll'), 2000)
                clearInterval(interval)
                images.current[0].classList.add('done')
            }
        }
        const interval = setInterval(checkImages, 100)
        return () => clearInterval(interval)
    }, [])

    function changeMode(event) {
        window.scrollTo(0, 0)
        event.target.classList.add('change')
        setTimeout(() => setMode(!mode), 1000)
        setTimeout(() => event.target.classList.remove('change'), 2000)
        if (clickHere) {
            localStorage.setItem('visited', '1')
            setClickHere(false)
        }
    }

    return (
        <>
            <div ref={el => images.current[0] = el} className='loader'><p>Loading</p><div className='loading' /></div>
            <div className='banner' ref={ref}>
                <img ref={el => images.current[1] = el} className='layer-1' src={backgroundLight} alt="background" />
                <img ref={el => images.current[2] = el} className='layer-1' src={backgroundDark} style={{ opacity: mode ? 0 : 1 }} alt="background" />
                <div className='cover' />
                {clickHere && <div className='popup'>Click here to see magic</div>}
                <div className='sun-moon' onClick={changeMode} />
                <img ref={el => images.current[3] = el} className='layer-2' src={birdLight} style={{ opacity: mode ? 1 : 0 }} alt="bird" />
                <img ref={el => images.current[4] = el} className='layer-2' src={meteorDark} style={{ opacity: mode ? 0 : 1 }} alt="meteor" />
                <div className='layer-3'>
                    <h1>Hello &amp; Welcome</h1>
                    <p>I'm Prajjwal Pratap Shah, a web developer with a BCA degree from Savitribai Phule Pune University. I love creating websites using ReactJS and other technologies. Welcome to my portfolio!</p>
                    <div className='scroll-gif' />
                </div>
                <img ref={el => images.current[5] = el} className='layer-4' src={mountain1Light} style={{ opacity: mode ? 1 : 0 }} alt="mountain1" />
                <img ref={el => images.current[6] = el} className='layer-4' src={mountain1Dark} style={{ opacity: mode ? 0 : 1 }} alt="mountain1" />
                <img ref={el => images.current[7] = el} className='layer-5' src={mountain2Light} style={{ opacity: mode ? 1 : 0 }} alt="mountain2" />
                <img ref={el => images.current[8] = el} className='layer-5' src={mountain2Dark} style={{ opacity: mode ? 0 : 1 }} alt="mountain2" />
                <img ref={el => images.current[9] = el} className='layer-6' src={mountain3Light} style={{ opacity: mode ? 1 : 0 }} alt="mountain3" />
                <img ref={el => images.current[10] = el} className='layer-6' src={mountain3Dark} style={{ opacity: mode ? 0 : 1 }} alt="mountain3" />
            </div>
        </>
    )
}