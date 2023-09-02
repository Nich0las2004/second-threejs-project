import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TorusKnot = () => {
  const torusknotRef = useRef();

  useFrame(() => {
    if (torusknotRef.current) {
      torusknotRef.current.rotation.x += 0.01;

      
    }
  });

  return (
    <mesh scale={[1, 1, 1]} ref={torusknotRef} position={[-3, 0, -1]}>
      <meshBasicMaterial wireframe={true} flatShading={false} color="blue" />
      <torusKnotGeometry args={[1, 0.4, 128, 10]} />
    </mesh>
  );
};

export default TorusKnot;
