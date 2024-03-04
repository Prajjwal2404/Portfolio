import React, { useEffect, useRef, useState } from 'react'
import { works } from '../Info/Info'
import { FaGithub } from "react-icons/fa"
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5"
import './Projects.css'

export default function Projects() {

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

    const logoRef = useRef([])
    const [showPulse, setShowPulse] = useState(true)

    const cards = works.map((work, idx) => (<ProjectCard key={idx} props={work} logoRef={logoRef}
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
        <div className='projects-container'>
            <h1>PROJECTS</h1>
            <div className={`projects-wrapper ${showMore ? 'less' : ''}`} ref={ref}>{cards}</div>
            {showMore && <button className='more-btn' onClick={viewMore}>
                {expanded ? 'show less' : 'show more'}{expanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}</button>}
        </div>
    )
}

function ProjectCard({ props, logoRef, idx, pulse, pulseRemove }) {
    const tags = props.tags.map((tag, idx) => (<span key={idx} style={{ '--tag-color': tag.color }}>#{tag.tech}</span>))

    return (
        <div className='project-card' onClick={() => pulse(idx)}>
            <div className='image-div'>
                <img className='project-img' src={props.image} alt={props.title} />
                <a className='logo' href={props.project_link} target='_blank' aria-label={props.title}
                    ref={el => logoRef.current[idx] = el} onClick={pulseRemove}>{props.logo}
                </a>
                <a className='github' href={props.code_link} target='_blank' aria-label={props.title}>
                    <FaGithub />
                </a>
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className='tags'>{tags}</div>
        </div>
    )
}