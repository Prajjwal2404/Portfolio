import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import './Stars.css'

export default function StarsCanvas({ mode }) {

  const ref = useRef()

  return (
    <div className="star" ref={ref}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars mode={mode} rel={ref} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

function Stars({ mode, rel }) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }))

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} onAfterRender={() => rel.current?.classList.add('fade')}>
        <PointMaterial transparent color={mode ? '#000' : '#fff'} size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}