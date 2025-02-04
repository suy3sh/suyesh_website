import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.10}/>
      <directionalLight position={[0,0,0.5]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal}
          position={[0,0,1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {

  const mouseDown = () => {

  }

  return (
    <>
    <script>

    </script>
      <Canvas
        frameloop='always'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        className='cursor-grab'
        onMouseDown={mouseDown} 
      >
        <Suspense fallback = {<CanvasLoader/>}>
          <OrbitControls enableZoom={false}/>
          <Ball imgUrl={icon}/>
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  )
}

export default BallCanvas