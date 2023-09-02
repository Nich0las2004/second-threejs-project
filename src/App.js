import { Canvas } from "@react-three/fiber";

import Dodecahedron from "./components/Dodecahedron";
import Ring from "./components/Ring";
import TorusKnot from "./components/TorusKnot";

const App = () => {
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
