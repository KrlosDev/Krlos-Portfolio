import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Sagi = ({isMobile}) => {
  const sagiA = useGLTF('./SagiA/scene.gltf')
  return (
    
    <mesh>
       <primitive object={sagiA.scene} scale={isMobile ? 2 : 3} position={isMobile?[0,-1,0]:[0,-0.5, -0]} rotation={[0, 0, 0]}/>
    </mesh>
  )
}

const SagiCanvas = ()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return(
    <Canvas className='cursor-pointer' frameloop='demand' shadows camera={{position:[20, 3, 5], fov:20}} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader/>}>
           <OrbitControls autoRotate={true} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
          <Sagi isMobile={isMobile}/>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}
export default SagiCanvas