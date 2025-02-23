import { useState, useRef, Suspense, useContext } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import useMode from "../Components/Mode"
import './Stars.css'

export default function StarsCanvas() {

  const ref = useRef()
  const { mode } = useContext(useMode)

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
  const [sphere] = useState(() => inSphere(new Float32Array(5001), 1.2))

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} onAfterRender={() => rel.current?.classList.add('fade')}>
        <PointMaterial transparent color={mode ? '#000' : '#fff'} size={0.002} depthWrite={false} />
      </Points>
    </group>
  )
}

function inSphere(coordsArr, radius) {

  for (let i = 0; i < coordsArr.length; i += 3) {
    const u = Math.pow(Math.random(), 1 / 3)
    let x = Math.random() * 2 - 1
    let y = Math.random() * 2 - 1
    let z = Math.random() * 2 - 1
    const mag = Math.sqrt(x * x + y * y + z * z)
    x = (u * x) / mag
    y = (u * y) / mag
    z = (u * z) / mag
    coordsArr[i] = x * radius
    coordsArr[i + 1] = y * radius
    coordsArr[i + 2] = z * radius
  }

  return coordsArr
}