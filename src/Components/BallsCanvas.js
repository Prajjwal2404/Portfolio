import React, { Suspense, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import useMode from './Mode'
import CanvasLoader from './Loader'

export default function BallsCanvas({ icon }) {
    const [renderCrash, setRenderCrash] = useState(false)
    const canvasRef = useRef()
    const { mode } = useContext(useMode)

    useLayoutEffect(() => {
        function handleWebGLContextLost() {
            setRenderCrash(true)
        }
        canvasRef.current?.addEventListener('webglcontextlost', handleWebGLContextLost)
        return () => canvasRef.current?.removeEventListener('webglcontextlost', handleWebGLContextLost)
    }, [canvasRef.current])

    useLayoutEffect(() => {
        function handleWebGLContextRestored() {
            setRenderCrash(false)
        }
        canvasRef.current?.addEventListener('webglcontextrestored', handleWebGLContextRestored)
        return () => canvasRef.current?.removeEventListener('webglcontextrestored', handleWebGLContextRestored)
    }, [canvasRef.current])

    const imgUrl = useMemo(() => getImgSrc(icon, mode), [icon, mode])

    return (
        <>
            <div className={renderCrash ? 'low-spec' : ''}
                style={{ backgroundColor: mode ? '#606060' : '#bababa', display: renderCrash ? 'block' : 'none' }}>
                <img src={imgUrl} alt='skill-icon' /></div>
            <Canvas className='ball' frameloop='demand' ref={canvasRef} style={{ display: renderCrash ? 'none' : 'block' }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <Ball img={imgUrl} mode={mode} />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

function Ball({ img, mode }) {

    const [decal] = useTexture([img])

    return (
        <Float speed={1.75} rotationIntensity={1}>
            <ambientLight intensity={0.75} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color={mode ? '#959595' : '#fff'} flatShading />
                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
            </mesh>
        </Float>
    )
}

function getImgSrc(Icon, mode) {
    if (React.isValidElement(Icon) || typeof Icon === 'function') {
        const svgString = renderToStaticMarkup(<Icon mode={mode} />)
        const blob = new Blob([svgString], { type: 'image/svg+xml' })
        return URL.createObjectURL(blob)
    }
    return Icon
}