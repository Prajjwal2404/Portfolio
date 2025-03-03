import React, { useContext } from 'react'
import useMode from '../../Components/Mode'

export default function Mountain2() {

    const { mode } = useContext(useMode)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="8.99 0 596.3 372.7" width="100%" className='layer-5'>
            <defs>
                <clipPath id="clip-path-2">
                    <polygon
                        points="0 291.65 45.9 270.55 75.25 292.12 120.78 300.5 136.95 293.91 181.88 314.88 247.18 289.12 294.5 312.49 364.59 296.91 415.51 270.55 447.26 289.72 480.21 295.11 528.14 283.13 567.08 296.31 605.25 278.65 604.22 394.99 7 394.99 0 291.65" />
                </clipPath>
                <linearGradient id="mountain-gradient2" x1="304.2" y1="373.99" x2="304.2" y2="202.94"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={mode ? '#b33900' : '#261647'} stopOpacity="0" />
                    <stop offset=".45" stopColor={mode ? '#b3450a' : '#201240'} stopOpacity=".48" />
                    <stop offset="1" stopColor={mode ? '#b35216' : '#190d33'} />
                </linearGradient>
            </defs>
            <g clipPath="url(#clip-path-2)">
                <rect fill="url(#overlay-mountain)" x="8.99" width="100%" height="100%" />
                <g>
                    <polygon fill="url(#mountain-gradient2)"
                        points="0 291.65 45.9 270.55 75.25 292.12 120.78 300.5 136.95 293.91 181.88 314.88 247.18 289.12 294.5 312.49 364.59 296.91 415.51 270.55 447.26 289.72 480.21 295.11 528.14 283.13 567.08 296.31 605.25 278.65 604.22 394.99 7 394.99 0 291.65" />
                    <g>
                        <polygon fill={mode ? '#f4b985' : '#6fa8c1'}
                            points="120.78 300.5 136.95 293.91 181.88 314.88 247.18 289.12 294.5 312.49 364.59 296.91 415.67 269.99 447.26 289.72 480.21 295.11 528.14 283.13 481.83 300.32 446.5 294.65 415.5 275.65 367.5 301.65 295 317.65 246 293.65 182.5 320.65 135.5 299.15 120.78 300.5" />
                        <polyline fill={mode ? '#f4b985' : '#6fa8c1'} points="446.17 294.4 465.75 306.74 448.95 290.17" />
                        <polyline fill={mode ? '#f4b985' : '#6fa8c1'} points="295.08 317.69 314.5 329.9 297.7 313.34" />
                    </g>
                </g>
            </g>
        </svg>
    )
}
