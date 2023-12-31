import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { works } from '../Info/Info'
import { FaGithub } from "react-icons/fa"
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import './Projects.css'

export default function Projects({ mode }) {

    const ref = useRef()
    const [showMore, setShowMore] = useState(window.innerWidth < 659)
    const [expanded, setExpanded] = useState(false)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        function collapse() {
            if (window.innerWidth !== width) {
                setWidth(window.innerWidth)
                if (window.innerWidth < 659) setShowMore(true)
                else {
                    setShowMore(false)
                    setExpanded(false)
                }
            }
        }
        window.addEventListener('resize', collapse)
        return () => window.removeEventListener('resize', collapse)
    }, [])

    function viewMore(event) {
        ref.current.classList.toggle('less')
        if (expanded) event.target.scrollIntoView({ block: 'end' })
        setExpanded(!expanded)
    }

    useLayoutEffect(() => {
        if (mode) ref.current.style.setProperty('--bgcolor', '#a98266')
        else ref.current.style.setProperty('--bgcolor', '#8a82fb')
    }, [mode])

    const logoRef = useRef([])
    const [showPulse, setShowPulse] = useState(true)

    const worksArr = works(mode)

    const cards = worksArr.map((work, idx) => (<ProjectCard key={idx} props={work} mode={mode} logoRef={logoRef}
        idx={idx} pulse={pulse} pulseRemove={pulseRemove} />))

    function pulse(idx) {
        if (showPulse) {
            logoRef.current.forEach(logo => logo.classList.remove('pulse'))
            logoRef.current[idx].classList.add('pulse')
        }
    }

    function pulseRemove(event) {
        event.stopPropagation()
        logoRef.current.forEach(logo => logo.classList.remove('pulse'))
        setShowPulse(false)
    }

    return (
        <div className='projects-container'
            style={{
                backgroundImage: mode ? 'linear-gradient(#a96739, #aaa)' : 'linear-gradient(#1d1d4f, #151515)',
                color: mode ? '#000' : '#fff',
            }}>
            <h1>PROJECTS</h1>
            <div className={`projects-wrapper ${showMore ? 'less' : ''}`} ref={ref}>{cards}</div>
            {showMore && <button className='more-btn' onClick={viewMore} style={{ backgroundColor: mode ? '#edd3c0' : '#22225D' }}>
                {expanded ? 'show less' : 'show more'}{expanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}</button>}
        </div>
    )
}

function ProjectCard({ props, mode, logoRef, idx, pulse, pulseRemove }) {
    const tags = props.tags.map((tag, idx) => (<span key={idx} style={{ color: tag.color }}>#{tag.tech}</span>))

    return (
        <div className='project-card' style={{ backgroundColor: mode ? '#edd3c0' : '#22225D' }} onClick={() => pulse(idx)}>
            <div className='image-div'>
                <img className='project-img' src={props.image} alt={props.title} />
                <a className='logo' href={props.project_link} target='_blank' aria-label={props.title}
                    ref={el => logoRef.current[idx] = el} onClick={pulseRemove} style={{
                        backgroundColor: mode ? '#edd3c0' : '#22225D', color: mode ? '#252c2a' : '#dad3d5'
                    }}>{props.logo}
                </a>
                <a className='github' href={props.code_link} target='_blank' aria-label={props.title}>
                    <FaGithub />
                </a>
            </div>
            <h2>{props.title}</h2>
            <p style={{ color: mode ? '#404040' : '#bfbfbf' }}>{props.description}</p>
            <div className='tags'>{tags}</div>
        </div>
    )
}