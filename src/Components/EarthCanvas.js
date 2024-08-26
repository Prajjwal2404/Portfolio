import React, { Suspense, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import CanvasLoader from "./Loader"

export default function EarthCanvas() {

  const ref = useRef()
  const [reload, setReload] = useState(false)

  return (
    <div key={reload} className="earth" ref={ref}>
      <ErrorBoundary earth={true} setReload={setReload}>
        <Canvas dpr={[1, 2]} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Earth rel={ref} reload={reload} setReload={setReload} />
            <Preload all />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}

function Earth({ rel, reload, setReload }) {

  const scene = EarthLoader()

  if (reload) {
    useGLTF.clear("./planet/scene.gltf")
    setReload(false)
  }

  scene.onAfterRender(rel.current?.classList.add('fade'))

  return <primitive object={scene} scale={3} position-y={0} rotation-y={0} />
}

export function EarthLoader() {
  const { scene } = useGLTF("./planet/scene.gltf")
  return scene
}