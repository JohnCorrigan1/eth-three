import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import InteractionModal from "./InteractionModal";
import DataModal from "./DataModal";

export default function Scene({ children, ...props }: any) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <>
      <Canvas
        {...props}
        style={{
          maxheight: "100vh",
          maxwidth: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          camera: { position: [1, 0, 0], fov: 75 },
        }}
      >
        <directionalLight intensity={1} />
        <ambientLight intensity={0.75} />
        {children}
        <Preload all />
        <OrbitControls />
      </Canvas>
      <InteractionModal />
      <DataModal />
    </>
  );
}
