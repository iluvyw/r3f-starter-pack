import { OrbitControls } from "@react-three/drei";

function Experience() {
  return (
    <>
      <OrbitControls />
      <directionalLight position={[4, 3, 6]} />
      <ambientLight />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default Experience;
