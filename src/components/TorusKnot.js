import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TorusKnot = () => {
  const torusknowRef = useRef();

  useFrame(() => {
    if (torusknowRef.current) {
      torusknowRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh scale={[1, 1, 1]} ref={torusknowRef} position={[-3, 0, -1]}>
      <meshBasicMaterial wireframe={true} flatShading={false} color="blue" />
      <torusKnotGeometry />
    </mesh>
  );
};

export default TorusKnot;
