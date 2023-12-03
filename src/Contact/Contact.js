import React, { useLayoutEffect, useRef } from 'react'
import EarthCanvas from '../Components/EarthCanvas'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoLogoInstagram, IoCall, IoMail, IoLocation } from "react-icons/io5"
import './Contact.css'

export default function Contact({ mode, visible }) {

    const ref = useRef()

    useLayoutEffect(() => {
        if (mode) {
            ref.current.style.setProperty('--background-color', '#252525')
            ref.current.style.setProperty('--text-color', '#fff')
            ref.current.style.setProperty('--hover-color', '#454545')
        }
        else {
            ref.current.style.setProperty('--background-color', '#fff')
            ref.current.style.setProperty('--text-color', '#000')
            ref.current.style.setProperty('--hover-color', '#bababa')
        }
    }, [mode])

    return (
        <div className='contact-container'
            style={{ color: mode ? '#252525' : '#fff' }}>
            <h1>Contact</h1>
            <div className='contact-wrapper'>
                <div className='contact-card' style={{ backgroundColor: mode ? '#cacaca' : '#252525' }} ref={ref}>
                    <h1>Prajjwal Pratap Shah</h1>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/prajjwal2404/' target='_blank'>
                            <IoLogoLinkedin />
                        </a>
                        <a href='https://github.com/Prajjwal2404' target='_blank'>
                            <IoLogoGithub />
                        </a>
                        <a href='https://twitter.com/_shhhah_' target='_blank'>
                            <IoLogoTwitter />
                        </a>
                        <a href='https://www.instagram.com/_.shhhah._/' target='_blank'>
                            <IoLogoInstagram />
                        </a>
                    </div>
                    <div className='contact-info'><IoCall /><p>+91 7355491281</p></div>
                    <div className='contact-info email'>
                        <IoMail />
                        <a href='mailto:prajjwalpratapshah@outlook.com' target='_blank'>Prajjwalpratapshah@outlook.com</a>
                    </div>
                    <div className='contact-info'><IoLocation /><p>Ideal Colony,&nbsp;&nbsp;Kothrud,&nbsp;&nbsp;Pune&nbsp;&nbsp;-&nbsp;&nbsp;411038</p></div>
                    <button onClick={() => window.open("https://drive.google.com/u/0/uc?id=190nqPgY3fJTaBiZ5zfSWR0kZcFIA5ycK&export=download", '_self')} className='resume'>DOWNLOAD RESUME</button>
                </div>
                {visible && <EarthCanvas mode={mode} />}
            </div>
        </div>
    )
}
