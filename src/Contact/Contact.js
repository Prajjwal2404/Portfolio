import React from 'react'
import EarthCanvas from '../Components/EarthCanvas'
import { contacts } from '../Info/Info'
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
                        <a href={contacts.linkedin} target='_blank' aria-label='linkedin'>
                            <IoLogoLinkedin />
                        </a>
                        <a href={contacts.github} target='_blank' aria-label='github'>
                            <IoLogoGithub />
                        </a>
                        <a href={contacts.twitter} target='_blank' aria-label='twitter'>
                            <IoLogoTwitter />
                        </a>
                        <a href={contacts.instagram} target='_blank' aria-label='instagram'>
                            <IoLogoInstagram />
                        </a>
                    </div>
                    <div className='contact-info'><IoCall /><p>{contacts.phone}</p></div>
                    <div className='contact-info'><IoLocation /><p>{contacts.location}</p></div>
                    <div className='contact-info'>
                        <IoMail />
                        <a className='email' href={`mailto:${contacts.email}`} target='_blank'>{contacts.email}</a>
                    </div>
                    <button type='button' onClick={() => window.open(contacts.resume, '_self')} className='resume'>DOWNLOAD RESUME</button>
                </div>
                {visible && <EarthCanvas />}
            </div>
        </div>
    )
}