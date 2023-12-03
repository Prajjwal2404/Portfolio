import React, { Suspense, useLayoutEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from './Loader'

export default function BallsCanvas({ icon, mode }) {
    const [renderCrash, setRenderCrash] = useState(false)
    const canvasRef = useRef()

    useLayoutEffect(() => {
        function handleWebGLContextLost() {
            setRenderCrash(true)
        }
        canvasRef.current?.addEventListener('webglcontextlost', handleWebGLContextLost)
        return () => canvasRef.current?.removeEventListener('webglcontextlost', handleWebGLContextLost)
    }, [])

    useLayoutEffect(() => {
        function handleWebGLContextRestored() {
            setRenderCrash(false)
        }
        canvasRef.current?.addEventListener('webglcontextrestored', handleWebGLContextRestored)
        return () => canvasRef.current?.removeEventListener('webglcontextrestored', handleWebGLContextRestored)
    }, [])

    return (
        <>
            <div className={renderCrash ? 'low-spec' : ''}
                style={{ backgroundColor: mode ? '#606060' : '#bababa', display: renderCrash ? 'block' : 'none' }}>
                <img src={icon} alt='skill-icon' /></div>
            <Canvas frameloop='demand' ref={canvasRef} style={{ display: renderCrash ? 'none' : 'block' }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <Ball img={icon} mode={mode} />
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