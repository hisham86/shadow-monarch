import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import './App.css'
import MainMenu from './components/MainMenu'

function Box() {
  return (
    <mesh rotation={[0, Math.PI * 0.25, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#7077A1" metalness={0.7} roughness={0.2} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[5, 5, 5]}
        castShadow
        intensity={0.5}
        shadow-mapSize={[1024, 1024]}
      />
      <Box />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
    </>
  )
}

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-shadow-primary to-shadow-secondary overflow-hidden">
      {/* 3D Background Scene */}
      <div className="w-full h-full absolute">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Main Menu Overlay */}
      <MainMenu />

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent to-shadow-primary/80" />
    </div>
  )
}

export default App
