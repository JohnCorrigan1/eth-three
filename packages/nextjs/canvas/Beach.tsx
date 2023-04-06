import { useGLTF } from "@react-three/drei";

const Beach: React.FC = () => {
  const beach = useGLTF("/Beach scene.glb");

  return (
    <mesh position={[100, 10, 100]} scale={100}>
      <primitive object={beach.scene} />
    </mesh>
  );
};

export { Beach };
