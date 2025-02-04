import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./nicolaus/scene.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={-1} />
      <pointLight intensity={0} />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 1.5 : 4.8}
        position={isMobile ? [-2.5, 8, -5.5] : [-8, 25.5, -18]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  })


  return (
    <Canvas
      frameloop='demand'
      
      camera={{ position: [20, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: false }}
      className="cursor-grab"
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
        
      </Suspense>
      <Preload all />
    </Canvas>

  )
}   

export default ComputersCanvas