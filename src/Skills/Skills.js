import React from 'react'
import { technologies } from '../Info/Info'
import BallsCanvas from '../Components/BallsCanvas'
import './Skills.css'

export default function Skills() {

    return (
        <div className='skills-container'>
            <h1>SKILLS</h1>
            <div className='skills-wrapper'>
                {technologies.map(technology => (
                    <div className='skill-div' key={technology.name}>
                        <div className='skill-icon'>
                            <BallsCanvas icon={technology.icon} />
                        </div>
                        <p>{technology.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
