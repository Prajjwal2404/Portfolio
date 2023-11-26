import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from './Loader'

export default function BallsCanvas({ icon, mode }) {
    return (
        <Canvas frameloop='demand'>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} enablePan={false} />
                <Ball img={icon} mode={mode} />
            </Suspense>
            <Preload all />
        </Canvas>
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