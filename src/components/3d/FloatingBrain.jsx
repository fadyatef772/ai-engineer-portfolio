import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNode({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.1
    }
  })
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  )
}

export default function FloatingBrain() {
  const groupRef = useRef()
  const torusRef = useRef()
  const innerRef = useRef()

  const nodePositions = useMemo(() => {
    return Array.from({ length: 20 }, () => [
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
    ])
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.5
    }
    if (innerRef.current) {
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core sphere */}
      <Sphere args={[0.8, 32, 32]}>
        <MeshDistortMaterial
          color="#0a0a1f"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[0.82, 16, 16]}>
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Orbiting torus */}
      <Torus ref={torusRef} args={[1.4, 0.015, 8, 64]}>
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1.5} />
      </Torus>

      {/* Second torus - rotated */}
      <Torus ref={innerRef} args={[1.1, 0.01, 8, 48]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={1.5} />
      </Torus>

      {/* Neural nodes */}
      {nodePositions.map((pos, i) => (
        <NeuralNode
          key={i}
          position={pos}
          color={i % 2 === 0 ? '#00d4ff' : '#7c3aed'}
        />
      ))}
    </group>
  )
}
