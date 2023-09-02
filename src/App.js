import { Canvas } from "@react-three/fiber";

import Dodecahedron from "./components/Dodecahedron";
import Ring from "./components/Ring";
import TorusKnot from "./components/TorusKnot";

const App = () => {

  // camera.current.position.set(0, 0, 5);

  return (
    <Canvas
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
        background: "black"
      }}
    >
      <TorusKnot />
      <Dodecahedron />
      <Ring />
    </Canvas>
  );
};

export default App;
