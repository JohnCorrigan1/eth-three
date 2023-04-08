import { Oceans, Beach } from "~~/canvas";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Sun } from "~~/canvas/Sun";
import { Camping } from "~~/canvas/islands/Camping";

export default function Three() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(250, 300, 0);
  });

  return (
    <group>
      <Oceans sideLength={20} />
      <Beach />
      <Sun />
      <Camping position={[50, 0, 50]} scale={[10, 10, 10]} />
    </group>
  );
}
