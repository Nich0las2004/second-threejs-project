import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Dodecahedron = () => {
  const dodecahedronRef = useRef();

  useFrame(() => {
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x += 0.01;
      dodecahedronRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh scale={[1, 1, 1]} position={[3, 0, -1]} ref={dodecahedronRef}>
      <ambientLight />
      <dodecahedronGeometry />
      <meshLambertMaterial color="red" wireframe={true} />
    </mesh>
  );
};

export default Dodecahedron;
