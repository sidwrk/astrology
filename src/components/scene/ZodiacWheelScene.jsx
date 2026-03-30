import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const zodiacGlyphs = ['\u2648', '\u2649', '\u264A', '\u264B', '\u264C', '\u264D', '\u264E', '\u264F', '\u2650', '\u2651', '\u2652', '\u2653']

function createGlyphTexture(glyph, color) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const context = canvas.getContext('2d')

  context.clearRect(0, 0, 256, 256)
  context.fillStyle = 'rgba(10, 10, 24, 0)'
  context.fillRect(0, 0, 256, 256)
  context.font = '900 168px serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = color
  context.shadowColor = color
  context.shadowBlur = 28
  context.fillText(glyph, 128, 138)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function ZodiacRing() {
  const ringRef = useRef()
  const innerRef = useRef()
  const glyphGroup = useRef()
  const textures = useMemo(
    () => zodiacGlyphs.map((glyph, index) => createGlyphTexture(glyph, index % 2 === 0 ? '#f2c46d' : '#b28dff')),
    [],
  )

  useFrame((_, delta) => {
    ringRef.current.rotation.z += delta * 0.18
    innerRef.current.rotation.z -= delta * 0.25
    glyphGroup.current.rotation.z += delta * 0.12
  })

  return (
    <group>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.08, 16, 160]} />
        <meshStandardMaterial color="#f2c46d" emissive="#7c5b17" emissiveIntensity={1.2} metalness={0.85} roughness={0.25} />
      </mesh>

      <mesh ref={innerRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.15, 0.04, 16, 120]} />
        <meshStandardMaterial color="#6ddcff" emissive="#1e5b79" emissiveIntensity={1.6} transparent opacity={0.9} />
      </mesh>

      <group ref={glyphGroup}>
        {zodiacGlyphs.map((glyph, index) => {
          const angle = (index / zodiacGlyphs.length) * Math.PI * 2
          const radius = 2.8
          return (
            <Float
              key={glyph}
              speed={1.2 + index * 0.05}
              rotationIntensity={0.25}
              floatIntensity={0.3}
            >
              <sprite position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0.2]} scale={[0.52, 0.52, 0.52]}>
                <spriteMaterial map={textures[index]} transparent opacity={0.95} depthWrite={false} />
              </sprite>
            </Float>
          )
        })}
      </group>
    </group>
  )
}

function CentralOrb() {
  const orbRef = useRef()
  const haloRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    orbRef.current.rotation.y += 0.003
    haloRef.current.rotation.z -= 0.004
    orbRef.current.position.y = Math.sin(t * 0.9) * 0.12
  })

  return (
    <group>
      <mesh ref={haloRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.1, 0.03, 24, 120]} />
        <meshBasicMaterial color="#6ddcff" transparent opacity={0.7} />
      </mesh>
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.82, 64, 64]} />
        <MeshDistortMaterial
          color="#7448ff"
          emissive="#3b1f83"
          emissiveIntensity={1.4}
          roughness={0.1}
          metalness={0.2}
          distort={0.35}
          speed={2}
        />
      </mesh>
      <mesh scale={1.5}>
        <sphereGeometry args={[0.82, 64, 64]} />
        <meshBasicMaterial color="#b28dff" transparent opacity={0.08} />
      </mesh>
    </group>
  )
}

function OrbitingPlanets() {
  const group = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    group.current.children.forEach((child, index) => {
      const radius = 3.9 + index * 0.45
      const speed = 0.15 + index * 0.03
      child.position.x = Math.cos(t * speed + index) * radius
      child.position.z = Math.sin(t * speed + index) * radius
      child.position.y = Math.sin(t * speed * 1.8 + index) * 0.45
    })
    group.current.rotation.y += 0.001
  })

  return (
    <group ref={group}>
      {['#f2c46d', '#6ddcff', '#b28dff'].map((color) => (
        <mesh key={color}>
          <sphereGeometry args={[0.24, 32, 32]} />
          <meshStandardMaterial color={color} emissive={new THREE.Color(color).multiplyScalar(0.45)} emissiveIntensity={1.2} />
        </mesh>
      ))}
    </group>
  )
}

export function ZodiacWheelScene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#070816', 7, 18]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 5, 4]} intensity={1.8} color="#f2c46d" />
      <pointLight position={[-4, -2, -4]} intensity={2} color="#6ddcff" />
      <Stars radius={60} depth={40} count={2400} factor={3} saturation={0} fade speed={0.6} />
      <group rotation={[-0.45, 0.5, 0]}>
        <ZodiacRing />
        <CentralOrb />
        <OrbitingPlanets />
      </group>
    </>
  )
}
