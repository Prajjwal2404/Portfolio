import React, { useContext } from 'react'
import useMode from '../../Components/Mode'

export default function Background() {

    const { mode } = useContext(useMode)
    const sun_moon = mode ? '#feff50' : '#fff'

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="4.49 0 596.3 372.7" width="100%" className='layer-1'>
            <defs>
                <linearGradient id="overlay" x1="302.62" y1="279.9" x2="302.62" y2="23.64" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={mode ? '#f0a060' : '#3ca1e5'} />
                    <stop offset=".04" stopColor={mode ? '#e2a870' : '#3c93d8'} />
                    <stop offset=".16" stopColor={mode ? '#d0b080' : '#3f6eb6'} />
                    <stop offset=".28" stopColor={mode ? '#b0b890' : '#40509b'} />
                    <stop offset=".4" stopColor={mode ? '#90c0a0' : '#423b88'} />
                    <stop offset=".52" stopColor={mode ? '#70c8b0' : '#422f7c'} />
                    <stop offset="1" stopColor={mode ? '#40bcff' : '#392168'} />
                </linearGradient>
                <linearGradient id="cloud-left" x1="88.81" y1="212.47" x2="71.09" y2="287.09" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fff" />
                    <stop offset=".2" stopColor="#fff" stopOpacity=".73" />
                    <stop offset=".4" stopColor="#fff" stopOpacity=".47" />
                    <stop offset=".59" stopColor="#fff" stopOpacity=".27" />
                    <stop offset=".76" stopColor="#fff" stopOpacity=".12" />
                    <stop offset=".89" stopColor="#fff" stopOpacity=".03" />
                    <stop offset=".97" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="cloud-right" x1="554.73" y1="213.09" x2="537.01" y2="287.7"
                    gradientTransform="translate(1064.23) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fff" />
                    <stop offset=".16" stopColor="#fff" stopOpacity=".83" />
                    <stop offset=".58" stopColor="#fff" stopOpacity=".39" />
                    <stop offset=".87" stopColor="#fff" stopOpacity=".11" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="sun-moon-bg" cx="302" cy="265.65" fx="302" fy="265.65" r="70.5"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={sun_moon} />
                    <stop offset=".16" stopColor={sun_moon} stopOpacity=".83" />
                    <stop offset=".58" stopColor={sun_moon} stopOpacity=".39" />
                    <stop offset=".87" stopColor={sun_moon} stopOpacity=".11" />
                    <stop offset="1" stopColor={sun_moon} stopOpacity="0" />
                </radialGradient>
            </defs>
            <g>
                <rect fill="url(#overlay)" x="4.49" width="100%" height="100%" />
                <g opacity={mode ? 0 : 1}>
                    <g className="blend">
                        <path fill="#fff"
                            d="M26.17,25.65c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <path fill="#fff"
                            d="M77.17,161.65c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <circle fill="#fff" cx="99.5" cy="179.65" r="1.33" />
                        <path fill="#fff"
                            d="M118.17,15.65c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <circle fill="#fff" cx="48" cy="55.15" r="1.33" />
                        <path fill="#fff"
                            d="M104.17,63.99c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <circle fill="#fff" cx="104.5" cy="86.65" r="1.33" />
                        <path fill="#fff"
                            d="M21.83,113.99c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <path fill="#fff"
                            d="M62.17,69.99c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <circle fill="#fff" cx="94.5" cy="116.65" r="1.33" />
                        <circle fill="#fff" cx="22.5" cy="135.65" r="1.33" />
                        <path fill="#fff"
                            d="M36.17,100.99c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <path fill="#fff"
                            d="M128.83,85.32c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <path fill="#fff"
                            d="M56.83,145.99c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <circle fill="#fff" cx="70.89" cy="48.04" r=".55" />
                        <path fill="#fff" d="M119.27,47.65c0,.3-.25.55-.55.55s-.55-.25-.55-.55.25-.55.55-.55.55.25.55.55Z" />
                        <path fill="#fff" d="M167.83,47.99c0,.3-.25.55-.55.55s-.55-.25-.55-.55.25-.55.55-.55.55.25.55.55Z" />
                        <path fill="#fff"
                            d="M26,61.65c0,.74-.6,1.33-1.33,1.33s-1.33-.6-1.33-1.33.6-1.33,1.33-1.33,1.33.6,1.33,1.33Z" />
                        <circle fill="#fff" cx="24.92" cy="42.74" r=".75" />
                        <circle fill="#fff" cx="22.83" cy="9.99" r=".75" />
                        <circle fill="#fff" cx="41" cy="73.07" r=".75" />
                        <circle fill="#fff" cx="31.83" cy="164.24" r=".75" />
                        <circle fill="#fff" cx="44.17" cy="111.57" r=".75" />
                        <circle fill="#fff" cx="69.83" cy="186.9" r=".75" />
                        <circle fill="#fff" cx="65.83" cy="112.74" r=".75" />
                        <circle fill="#fff" cx="87.17" cy="71.74" r=".75" />
                        <circle fill="#fff" cx="81.83" cy="92.4" r=".75" />
                        <circle fill="#fff" cx="122.83" cy="109.4" r=".75" />
                        <circle fill="#fff" cx="46.92" cy="35.82" r=".75" />
                        <circle fill="#fff" cx="59.46" cy="17.03" r="1.38" />
                        <circle fill="#fff" cx="61.5" cy="92.61" r="1.38" />
                        <circle fill="#fff" cx="166.5" cy="75.65" r="1.38" />
                        <circle fill="#fff" cx="153.5" cy="22.99" r="1.38" />
                        <circle fill="#fff" cx="97.83" cy="138.32" r="1.38" />
                        <circle fill="#fff" cx="119.54" cy="153.65" r="1.38" />
                        <circle fill="#fff" cx="21.17" cy="90.65" r="1.38" />
                        <circle fill="#fff" cx="84.17" cy="25.57" r=".75" />
                        <circle fill="#fff" cx="99.5" cy="34.24" r=".75" />
                        <circle fill="#fff" cx="143.75" cy="55.65" r=".75" />
                        <circle fill="#fff" cx="147.92" cy="85.65" r=".75" />
                        <circle fill="#fff" cx="132.83" cy="32.99" r=".75" />
                    </g>
                    <g className="blend">
                        <path fill="#fff"
                            d="M585.83,25.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M534.83,161.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M511.17,179.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M493.83,15.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M562.67,55.15c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M507.83,63.99c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M506.17,86.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M590.17,113.99c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M549.83,69.99c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M516.17,116.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M588.17,135.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M575.83,100.99c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M483.17,85.32c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <path fill="#fff"
                            d="M555.17,145.99c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <circle fill="#fff" cx="541.11" cy="48.04" r=".55" />
                        <path fill="#fff" d="M492.73,47.65c0,.3.25.55.55.55s.55-.25.55-.55-.25-.55-.55-.55-.55.25-.55.55Z" />
                        <path fill="#fff" d="M444.17,47.99c0,.3.25.55.55.55s.55-.25.55-.55-.25-.55-.55-.55-.55.25-.55.55Z" />
                        <path fill="#fff"
                            d="M586,61.65c0,.74.6,1.33,1.33,1.33s1.33-.6,1.33-1.33-.6-1.33-1.33-1.33-1.33.6-1.33,1.33Z" />
                        <circle fill="#fff" cx="587.08" cy="42.74" r=".75" />
                        <circle fill="#fff" cx="589.17" cy="9.99" r=".75" />
                        <circle fill="#fff" cx="571" cy="73.07" r=".75" />
                        <circle fill="#fff" cx="580.17" cy="164.24" r=".75" />
                        <circle fill="#fff" cx="567.83" cy="111.57" r=".75" />
                        <circle fill="#fff" cx="542.17" cy="186.9" r=".75" />
                        <circle fill="#fff" cx="546.17" cy="112.74" r=".75" />
                        <circle fill="#fff" cx="524.83" cy="71.74" r=".75" />
                        <circle fill="#fff" cx="530.17" cy="92.4" r=".75" />
                        <circle fill="#fff" cx="489.17" cy="109.4" r=".75" />
                        <circle fill="#fff" cx="565.08" cy="35.82" r=".75" />
                        <circle fill="#fff" cx="552.54" cy="17.03" r="1.37" />
                        <circle fill="#fff" cx="550.5" cy="92.61" r="1.38" />
                        <circle fill="#fff" cx="445.5" cy="75.65" r="1.38" />
                        <circle fill="#fff" cx="458.5" cy="22.99" r="1.38" />
                        <circle fill="#fff" cx="514.17" cy="138.32" r="1.37" />
                        <circle fill="#fff" cx="492.46" cy="153.65" r="1.37" />
                        <circle fill="#fff" cx="590.83" cy="90.65" r="1.37" />
                        <circle fill="#fff" cx="527.83" cy="25.57" r=".75" />
                        <circle fill="#fff" cx="512.5" cy="34.24" r=".75" />
                        <circle fill="#fff" cx="468.25" cy="55.65" r=".75" />
                        <circle fill="#fff" cx="464.08" cy="85.65" r=".75" />
                        <circle fill="#fff" cx="479.17" cy="32.99" r=".75" />
                    </g>
                </g>
                <g>
                    <g>
                        <path fill="url(#cloud-left)" opacity="0.9" className="blend"
                            d="M158.69,262.04c-5.96,0-11.51,1.69-16.23,4.62-5.34-9.17-15.26-15.34-26.64-15.34-4.07,0-7.95.8-11.5,2.23-5.3-10.46-16.15-17.63-28.68-17.63-1.36,0-2.7.09-4.01.26-1.9-18.28-17.35-32.52-36.13-32.52-1.13,0-2.24.06-3.35.16-.19-23.21-13.13-43.37-32.15-53.84v155.18h5.86l.19-2.85,94.65-33.55,48.52,17.97,29.67-17.13c-5.41-4.7-12.47-7.56-20.2-7.56Z" />
                        <path fill="url(#cloud-right)" opacity="0.9" className="blend"
                            d="M496.08,277.74l45.53-10.78,59.28,19.58v-136.57c-19.03,10.47-31.97,30.63-32.15,53.84-1.1-.1-2.22-.16-3.35-.16-18.78,0-34.23,14.25-36.13,32.52-1.32-.16-2.65-.26-4.01-.26-12.53,0-23.38,7.17-28.68,17.63-3.56-1.43-7.43-2.23-11.5-2.23-11.37,0-21.3,6.17-26.64,15.34-4.71-2.93-10.27-4.62-16.23-4.62-7.73,0-18.45,3.61-24.7,11.61l17.67,12,36.95-16.3,23.96,8.39Z" />
                    </g>
                    <g>
                        <path fill={sun_moon}
                            d="M284.61,266.96l35.89,18.2,24.74-12.81c.17-1.54.26-3.1.26-4.69,0-23.75-19.25-43-43-43-21.68,0-39.6,16.04-42.56,36.9l12.09,7.2,12.58-1.8Z" />
                        <path fill="url(#sun-moon-bg)" className="blend"
                            d="M272.03,268.75l12.58-1.8,35.89,18.2,44.39-22.99,7.6,3.96c0-.16.01-.32.01-.47,0-38.94-31.56-70.5-70.5-70.5-34.39,0-63.02,24.63-69.23,57.22l6.07-3.38,33.2,19.77Z" />
                    </g>
                </g>
            </g>
        </svg>
    )
}