import React from 'react'
import { technologies } from '../Info/Info'
import BallsCanvas from '../Components/BallsCanvas'
import './Skills.css'

export default function Skills({ mode }) {

    const technologiesArr = technologies(mode)

    return (
        <div className='skills-container'
            style={{
                backgroundImage: mode ? 'linear-gradient(#aaa, #ccc)' : 'linear-gradient(#151515, #101010)',
                color: mode ? '#000' : '#fff'
            }}>
            <h1>SKILLS</h1>
            <div className='skills-wrapper'>
                {technologiesArr.map(technology => (
                    <div className='skill-div' key={technology.name}>
                        <BallsCanvas icon={technology.icon} mode={mode} />
                        <p>{technology.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
