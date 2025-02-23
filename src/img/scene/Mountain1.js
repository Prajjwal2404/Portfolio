import React, { useContext } from 'react'
import useMode from '../../Components/Mode'

export default function Mountain1() {

    const { mode } = useContext(useMode)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="5.99 0 596.3 372.7" width="100%" className='layer-4'>
            <defs>
                <clipPath id="clip-path-1">
                    <polygon
                        points="7.55 302.3 102.2 268.75 150.73 286.73 193.26 262.16 207.04 267.56 240.33 248.99 273.53 268.75 286.11 266.96 322 285.15 366.39 262.16 422.7 291.52 473.62 269.35 497.58 277.74 543.11 266.96 608.41 288.52 608.41 413.99 0 413.99 7.55 302.3" />
                </clipPath>
                <linearGradient id="overlay-mountain" x1="302.62" y1="279.9" x2="302.62" y2="23.64" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={mode ? '#ffc05b' : '#3ca1e5'} />
                    <stop offset=".04" stopColor={mode ? '#ffb020' : '#3c93d8'} />
                    <stop offset=".16" stopColor={mode ? '#ff9900' : '#3f6eb6'} />
                    <stop offset="1" stopColor={mode ? '#ff8000' : '#40509b'} />
                </linearGradient>
                <linearGradient id="mountain-gradient1" x1="304.2" y1="373.99" x2="304.2" y2="202.94"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={mode ? '#ff7f00' : '#432b79'} stopOpacity="0" />
                    <stop offset=".45" stopColor={mode ? '#ff8c1a' : '#382466'} stopOpacity=".48" />
                    <stop offset="1" stopColor={mode ? '#ff9933' : '#2d1d52'} />
                </linearGradient>
            </defs>
            <g clipPath="url(#clip-path-1)">
                <rect fill="url(#overlay-mountain)" x="5.99" width="100%" height="100%" />
                <g>
                    <polygon fill="url(#mountain-gradient1)"
                        points="7.55 302.3 102.2 268.75 150.73 286.73 193.26 262.16 207.04 267.56 240.33 248.99 273.53 268.75 286.11 266.96 322 285.15 366.39 262.16 422.7 291.52 473.62 269.35 497.58 277.74 543.11 266.96 608.41 288.52 608.41 413.99 0 413.99 7.55 302.3" />
                    <g>
                        <polygon fill={mode ? '#ffd7ab' : '#adf6ff'}
                            points="150.73 286.73 193.26 262.16 207.04 267.56 240.33 248.99 273.53 268.75 286.11 266.96 322 285.15 366.39 262.16 398 278.4 367.25 266.65 322.5 290.65 285 271.65 272.5 273.78 240.12 253.78 207.5 272.15 194 266.15 150.73 286.73" />
                        <polyline fill={mode ? '#ffd7ab' : '#adf6ff'} points="270.56 272.59 290.31 285.03 273.53 268.75" />
                    </g>
                </g>
            </g>
        </svg>
    )
}
