import React, { useLayoutEffect, useRef } from 'react'
import { experiences } from '../Info/Info'
import './Qualifications.css'

export default function Qualifications({ mode, refEl, intersecting }) {

    useLayoutEffect(() => refEl.current[0].style.setProperty('--time', `${experiences.length}s`), [])

    useLayoutEffect(() => {
        if (mode) {
            refEl.current[0].style.setProperty('--timeline', '#353535')
            refEl.current[0].style.setProperty('--textbox', '#cacaca')
            refEl.current[0].style.setProperty('--small', '#454545')
        }
        else {
            refEl.current[0].style.setProperty('--timeline', '#fff')
            refEl.current[0].style.setProperty('--textbox', '#252525')
            refEl.current[0].style.setProperty('--small', '#ccc')
        }
    }, [mode])

    const ref = useRef([])

    useLayoutEffect(() => {
        if (intersecting) {
            refEl.current[0].classList.add('show')
            appear()
        }
    }, [intersecting])

    function appear() {
        var time = 0
        for (let i = 0; i < ref.current.length; i++) {
            setTimeout(() => ref.current[i].classList.add('visible'), time)
            time += 1000
        }
    }

    const experiencesArr = experiences.map((experience, idx) => (
        <Textbox
            key={idx}
            education={experience.title}
            institute={experience.organization}
            place={experience.location}
            time={experience.duration}
            course={experience.skills}
            score={experience.performance}
            idx={idx}
            reft={ref}
        />
    ))

    return (
        <div className='qualifications-container'
            style={{ backgroundImage: mode ? 'linear-gradient(#ccc, #fff)' : 'linear-gradient(#101010, #000)' }}>
            <h1 style={{ color: mode ? '#000' : '#fff' }}>Education</h1>
            <div className="timeline" ref={el => refEl.current[0] = el} style={{ color: mode ? '#252525' : '#fff' }}>
                {experiencesArr}
            </div>
        </div>
    )
}

function Textbox({ education, institute, place, time, course, score, idx, reft }) {
    return (
        <div className={`container ${(idx % 2 === 0) ? 'right-container' : 'left-container'}`}
            ref={el => reft.current[idx] = el}>
            <div className='middle-circle' />
            <div className="textbox">
                <h3>{education}</h3>
                <h3 className="institute">{institute}</h3>
                <div className="time-place"><small>City:&nbsp;&nbsp;{place}</small><small><i>{time}</i></small></div>
                <div><small>Subjects:&nbsp;&nbsp;{course}</small><small className='score'><i>{score}</i></small></div>
                <div className={`${(idx % 2 === 0) ? 'right-arrow' : 'left-arrow'}`} />
            </div>
        </div>
    )
}
