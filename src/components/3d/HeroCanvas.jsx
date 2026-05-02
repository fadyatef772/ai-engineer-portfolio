import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import FloatingBrain from './FloatingBrain'
import ParticleField from './ParticleField'
import DataSphere from './DataSphere'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00d4ff" intensity={1.5} />
      <pointLight position={[-10, -10, -5]} color="#7c3aed" intensity={1} />
      <pointLight position={[0, 5, 0]} color="#06b6d4" intensity={0.8} />

      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
      <ParticleField count={1500} />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <FloatingBrain />
      </Float>

      <Float speed={3} floatIntensity={2} position={[3, 1, -2]}>
        <DataSphere position={[0, 0, 0]} color="#00d4ff" size={0.3} speed={1.2} />
      </Float>

      <Float speed={2.5} floatIntensity={1.5} position={[-3, -1, -1]}>
        <DataSphere position={[0, 0, 0]} color="#7c3aed" size={0.2} speed={0.8} />
      </Float>

      <Float speed={4} floatIntensity={2} position={[2, -2, 0]}>
        <DataSphere position={[0, 0, 0]} color="#06b6d4" size={0.15} speed={1.5} />
      </Float>
    </>
  )
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
