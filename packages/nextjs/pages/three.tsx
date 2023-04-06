import Three from "../components/Three";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Three.js</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Fasthand&display=swap"
          rel="stylesheet"
        />
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
