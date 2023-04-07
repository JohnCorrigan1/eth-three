import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";

export default function Camera() {
  const ref = useRef<any>();
  useFrame(({ mouse }) => {
    if (!ref.current) return;

    new Vector3((ref.current.position.x = mouse.x * 10), 3000, (ref.current.position.Z = mouse.y * 1));
  });

  return <PerspectiveCamera makeDefault ref={ref} />;
}
