import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Ring = () => {
  const ringRef = useRef();

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.01;
      ringRef.current.rotation.y += 0.01;
      ringRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -1]}>
      <ambientLight />
      <ringGeometry />
      <meshLambertMaterial wireframe={true} color="white" />
    </mesh>
  );
};

export default Ring;
