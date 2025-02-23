import React, { useContext } from 'react'
import useMode from '../../Components/Mode'

export default function Meteor() {

    const { mode } = useContext(useMode)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596.3 372.7" width="100%" className='layer-2'>
            <defs>
                <linearGradient id="meteor-gradient" x1="425.84" y1="159.37" x2="545.84" y2="101.37"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={mode ? '#ffa500' : '#00deff'} />
                    <stop offset=".1" stopColor={mode ? '#ffb020' : '#10e0ff'} stopOpacity=".94" />
                    <stop offset=".29" stopColor={mode ? '#ffc850' : '#3be5ff'} stopOpacity=".77" />
                    <stop offset=".56" stopColor={mode ? '#ffe080' : '#7feeff'} stopOpacity=".5" />
                    <stop offset=".89" stopColor={mode ? '#fff5cc' : '#ddfaff'} stopOpacity=".13" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
            </defs>
            <g>
                <path fill="url(#meteor-gradient)"
                    d="M424.86,155.72l122.02-58.03c.19-.09.41,0,.5.18.09.18.01.4-.16.5l-119,63.99c-1.81.97-4.07.3-5.04-1.52-.97-1.81-.3-4.07,1.52-5.04.05-.03.11-.06.16-.08Z" />
                <path fill="#fff"
                    d="M423.93,159.07c0-1.43,1.16-2.58,2.58-2.58s2.58,1.16,2.58,2.58-1.16,2.58-2.58,2.58-2.58-1.16-2.58-2.58Z" />
            </g>
        </svg>
    )
}
