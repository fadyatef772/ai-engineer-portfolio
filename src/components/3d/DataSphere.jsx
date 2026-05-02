import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function DataSphere({ position = [0, 0, 0], color = '#7c3aed', size = 0.4, speed = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      ref.current.rotation.y = state.clock.elapsedTime * 0.5 * speed
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
    }
  })

  return (
    <group ref={ref} position={position}>
      <Sphere args={[size, 16, 16]}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.5}
        />
      </Sphere>
      <Sphere args={[size + 0.05, 8, 8]}>
        <meshStandardMaterial color={color} wireframe transparent opacity={0.2} />
      </Sphere>
    </group>
  )
}
