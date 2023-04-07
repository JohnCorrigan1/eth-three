import Three from "../components/Three";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Scaffold-eth Three.js</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <Three />
    </>
  );
}

/* export default function Three() {
 *   return (
 *     <Canvas>
 *       <ambientLight />
 *       <mesh>
 *         <boxBufferGeometry attach="geometry" />
 *         <meshStandardMaterial attach="material" color="hotpink" />
 *       </mesh>
 *     </Canvas>
 *   );
 * } */
