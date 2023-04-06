import { Oceans, Beach } from "~~/canvas";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function Three() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(250, 300, 0);
  });

  return (
    <group>
      <Oceans sideLength={20} />
      <Beach />
    </group>
  );
}
