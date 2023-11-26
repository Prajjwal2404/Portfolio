import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

export default function EarthCanvas() {

  const ref = useRef()

  return (
    <div className="earth" ref={ref}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Earth rel={ref} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Earth({ rel }) {

  const { scene } = useGLTF("./planet/scene.gltf")

  scene.onAfterRender(rel.current?.classList.add('fade'))

  return <primitive object={scene} scale={3} position-y={0} rotation-y={0} />
}