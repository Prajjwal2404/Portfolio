import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import CanvasLoader from "./Loader";

export default function EarthCanvas({ mode }) {

  const ref = useRef()
  const [reload, setReload] = useState(false)

  return (
    <div key={reload} className="earth" ref={ref}>
      <ErrorBoundary earth={true} setReload={setReload} mode={mode}>
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

  const url = "./planet/scene.gltf"

  if (reload) {
    useGLTF.clear(url)
    setReload(false)
  }

  const { scene } = useGLTF(url)

  scene.onAfterRender(rel.current?.classList.add('fade'))

  return <primitive object={scene} scale={3} position-y={0} rotation-y={0} />
}