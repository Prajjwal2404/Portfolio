import React, { useLayoutEffect, useRef } from 'react'
import { experiences } from '../Info/Info'
import './Qualifications.css'

export default function Qualifications({ refEl, intersecting }) {

    const ref = useRef([])

    useLayoutEffect(() => {
        if (intersecting) {
            refEl.current[0].classList.add('show')
            appear()
        }
    }, [refEl, intersecting])

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
        <div className='qualifications-container'>
            <h1>Education</h1>
            <div className="timeline" ref={el => refEl.current[0] = el} style={{ '--time': `${experiences.length}s` }}>
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
