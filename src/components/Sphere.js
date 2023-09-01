import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh scale={[3, 3, 3]} ref={sphereRef}>

      <sphereGeometry />
      <meshLambertMaterial color="white" /> 
    </mesh>
  );
};

export default Sphere;
