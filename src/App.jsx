import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#F6B17A" />
    </mesh>
  )
}

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#2D3250] to-[#424769]">
      {/* Game Title */}
      <div className="absolute top-0 left-0 w-full p-4 text-center z-10">
        <h1 className="text-4xl font-bold text-[#F6B17A] mb-2">Shadow Monarch's Gambit</h1>
        <p className="text-[#7077A1]">A Tactical Strategy Game</p>
      </div>

      {/* 3D Scene */}
      <div className="w-full h-full">
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            castShadow
            intensity={1}
            shadow-mapSize={[1024, 1024]}
          />
          <Box />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Game UI */}
      <div className="absolute bottom-0 left-0 w-full p-4 text-center">
        <p className="text-[#F6B17A] text-lg">Coming Soon: Tactical Combat System</p>
      </div>
    </div>
  )
}

export default App
