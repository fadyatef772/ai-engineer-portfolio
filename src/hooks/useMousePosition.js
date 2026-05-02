import { useState, useEffect } from 'react'

export const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [normalizedPos, setNormalizedPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setNormalizedPos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { mousePos, normalizedPos }
}
