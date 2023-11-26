import React, { useEffect, useRef, useState } from 'react'
import backgroundDark from '../img/dark/background.png'
import mountain1Dark from '../img/dark/mountain1.png'
import mountain2Dark from '../img/dark/mountain2.png'
import mountain3Dark from '../img/dark/mountain3.png'
import meteorDark from '../img/dark/meteor.png'
import backgroundLight from '../img/light/background.png'
import mountain1Light from '../img/light/mountain1.png'
import mountain2Light from '../img/light/mountain2.png'
import mountain3Light from '../img/light/mountain3.png'
import birdLight from '../img/light/bird.png'
import scrollLight from '../img/scroll/scrollLight.gif'
import scrollDark from '../img/scroll/scrollDark.gif'
import './Hero.css'

export default function Hero({ mode, setMode }) {

    const ref = useRef()
    const [clickHere, setClickHere] = useState(false)

    useEffect(() => {
        if (!getCookie()) setClickHere(true)
    }, [])

    useEffect(() => {
        function scroll() {
            ref.current.style.setProperty('--scrollY', `${window.scrollY}px`)
        }
        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    function changeMode(event) {
        window.scrollTo(0, 0)
        event.target.classList.add('change')
        setTimeout(() => {
            if (mode) setMode(false)
            else setMode(true)
        }, 1000)
        setTimeout(() => event.target.classList.remove('change'), 2000)
        if (clickHere) {
            setCookie()
            setClickHere(false)
        }
    }

    return (
        <>
            <div className='banner' ref={ref} style={{ backgroundColor: mode ? '#99d9eaff' : '#514c9cff' }}>
                <img className='layer-1' src={backgroundLight} alt="background" />
                <img className='layer-1' src={backgroundDark} style={{ opacity: mode ? 0 : 1 }} alt="background" />
                <div className='cover' style={{ backgroundColor: mode ? '#99d9eaff' : '#514c9cff' }}></div>
                {clickHere && <div className='popup'><p>Click here to see magic<span /></p></div>}
                <div className='sun-moon' onClick={changeMode}
                    style={{ backgroundColor: mode ? '#fff' : '#feff80' }}></div>
                <img className='layer-2' src={birdLight} style={{ opacity: mode ? 1 : 0 }} alt="bird" />
                <img className='layer-2' src={meteorDark} style={{ opacity: mode ? 0 : 1 }} alt="meteor" />
                <div className='layer-3' style={{ color: mode ? '#000' : '#fff' }}>
                    <h1>Hello &amp; Welcome</h1>
                    <p>I'm Prajjwal Pratap Shah, a web developer with a BCA degree from Savitribai Phule Pune University. I love creating websites using ReactJS and other technologies. Welcome to my portfolio!</p>
                    <img src={mode ? scrollDark : scrollLight} alt='scroll-gif' />
                </div>
                <img className='layer-4' src={mountain1Light} style={{ opacity: mode ? 1 : 0 }} alt="mountain1" />
                <img className='layer-4' src={mountain1Dark} style={{ opacity: mode ? 0 : 1 }} alt="mountain1" />
                <img className='layer-5' src={mountain2Light} style={{ opacity: mode ? 1 : 0 }} alt="mountain2" />
                <img className='layer-5' src={mountain2Dark} style={{ opacity: mode ? 0 : 1 }} alt="mountain2" />
                <img className='layer-6' src={mountain3Light} style={{ opacity: mode ? 1 : 0 }} alt="mountain3" />
                <img className='layer-6' src={mountain3Dark} style={{ opacity: mode ? 0 : 1 }} alt="mountain3" />
            </div>
        </>
    )
}

function setCookie() {
    const date = new Date()
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000))
    const expires = date.toUTCString()
    document.cookie = 'visited=1; expires=' + expires + '; path=/'
}

function getCookie() {
    const cookies = document.cookie.split('; ')
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith('visited=')) return true
    }
    return false
}