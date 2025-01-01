import React, { useRef, useState } from 'react'
import EarthCanvas from '../Components/EarthCanvas'
import { contacts } from '../Info/Info'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoLogoInstagram, IoCall, IoMail, IoLocation } from "react-icons/io5"
import './Contact.css'

export default function Contact({ visible }) {

    const [downloading, setDownloading] = useState(false)
    const [progress, setProgress] = useState(0)
    const ref = useRef()

    async function download() {
        if (ref.current.href) ref.current.click()
        else {
            setDownloading(true)
            const res = await fetch('./resume/resume.pdf')
            const contentLength = parseInt(res.headers.get('Content-Length'))
            const reader = res.body.getReader()
            const chunks = []
            let receivedLength = 0

            while (true) {
                const { done, value } = await reader.read()
                if (done) break
                chunks.push(value)
                receivedLength += value.length
                setProgress(Math.round((receivedLength / contentLength) * 100))
            }

            const blob = new Blob(chunks)
            const url = URL.createObjectURL(blob)
            ref.current.href = url
            ref.current.download = contacts.resumeName
            ref.current.click()
            setTimeout(() => {
                setDownloading(false)
                setProgress(0)
            }, 1000)
        }
    }

    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <div className='contact-wrapper'>
                <div className='contact-card'>
                    <h1>Prajjwal Pratap Shah</h1>
                    <div className='socials'>
                        <a href={contacts.linkedin} target='_blank' aria-label='linkedin' rel='noreferrer'>
                            <IoLogoLinkedin />
                        </a>
                        <a href={contacts.github} target='_blank' aria-label='github' rel='noreferrer'>
                            <IoLogoGithub />
                        </a>
                        <a href={contacts.twitter} target='_blank' aria-label='twitter' rel='noreferrer'>
                            <IoLogoTwitter />
                        </a>
                        <a href={contacts.instagram} target='_blank' aria-label='instagram' rel='noreferrer'>
                            <IoLogoInstagram />
                        </a>
                    </div>
                    <div className='contact-info'><IoCall /><p>{contacts.phone}</p></div>
                    <div className='contact-info'><IoLocation /><p>{contacts.location}</p></div>
                    <div className='contact-info'>
                        <IoMail />
                        <a className='email' href={`mailto:${contacts.email}`} target='_blank' rel='noreferrer'>
                            {contacts.email}
                        </a>
                    </div>
                    {downloading ? <div className='download-div' style={{ '--progress': progress }}>
                        <div className='progress-div' />{progress}%
                    </div> : <button type='button' onClick={download} className='resume'>DOWNLOAD RESUME</button>}
                    <a ref={ref} className='resume-link' target='_self' rel='noreferrer' />
                </div>
                {visible && <EarthCanvas />}
            </div>
        </div>
    )
}