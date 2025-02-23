import React, { useContext } from 'react'
import useMode from '../../Components/Mode'

export default function Mountain3() {

    const { mode } = useContext(useMode)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 0 596.3 372.7" width="100%" className='layer-6'>
            <g>
                <path fill={mode ? '#a96739' : '#1d1d4f'}
                    d="M613,382.3l-6-58.4c-1.2,0-99.4,25.8-150.7,40.4-4.5.1-15.7.8-31,1.8l-98.7-11.1-80.9-34.8-67.1,21.6L0,294.6c1.2,1.2,4,91,4,91l466.2-3.3h142.8Z" />
                <polygon fill={mode ? '#e9aa70' : '#6184a7'}
                    points="115.7 325 178.7 341.8 245.8 320 326.7 355 381.7 361 323 359.6 246.5 326.6 179.5 345.6 115.7 325" />
            </g>
        </svg>
    )
}
