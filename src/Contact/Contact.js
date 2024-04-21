import React from 'react'
import EarthCanvas from '../Components/EarthCanvas'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoLogoInstagram, IoCall, IoMail, IoLocation } from "react-icons/io5"
import './Contact.css'

export default function Contact({ visible }) {

    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <div className='contact-wrapper'>
                <div className='contact-card'>
                    <h1>Prajjwal Pratap Shah</h1>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/prajjwal2404/' target='_blank' aria-label='linkedin'>
                            <IoLogoLinkedin />
                        </a>
                        <a href='https://github.com/Prajjwal2404' target='_blank' aria-label='github'>
                            <IoLogoGithub />
                        </a>
                        <a href='https://twitter.com/_shhhah_' target='_blank' aria-label='twitter'>
                            <IoLogoTwitter />
                        </a>
                        <a href='https://www.instagram.com/_.shhhah._/' target='_blank' aria-label='instagram'>
                            <IoLogoInstagram />
                        </a>
                    </div>
                    <div className='contact-info'><IoCall /><p>+91&nbsp;7355491281</p></div>
                    <div className='contact-info'><IoLocation /><p>Kothrud,&nbsp;&nbsp;Pune&nbsp;&nbsp;-&nbsp;&nbsp;411038</p></div>
                    <div className='contact-info'>
                        <IoMail />
                        <a className='email' href='mailto:prajjwalpratapshah@outlook.com' target='_blank'>Prajjwalpratapshah@outlook.com</a>
                    </div>
                    <button type='button' onClick={() => window.open("https://firebasestorage.googleapis.com/v0/b/shoe-store-160b2.appspot.com/o/resume%2FPrajjwal's%20Resume.pdf?alt=media&token=7ed6b079-dbe2-430c-9b2c-3015bc81f28f", '_self')} className='resume'>DOWNLOAD RESUME</button>
                </div>
                {visible && <EarthCanvas />}
            </div>
        </div>
    )
}
