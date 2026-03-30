"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, ContactShadows, Image, PerspectiveCamera, RoundedBox } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

const skills = [
  { name: "C++", color: "#00599C", pos: [-4, 2, 0], icon: "cplusplus" },
  { name: "Java", color: "#f89820", pos: [-2, 3, -2], icon: "java" },
  { name: "Python", color: "#3776AB", pos: [0, 2, 0], icon: "python" },
  { name: "AWS", color: "#FF9900", pos: [2, 3, 2], icon: "amazonaws" },
  { name: "Azure", color: "#0089D6", pos: [4, 2, -1], icon: "microsoftazure" },
  { name: "Docker", color: "#2496ED", pos: [-3, -1, 1], icon: "docker" },
  { name: "K8s", color: "#326CE5", pos: [-1, -2, -1], icon: "kubernetes" },
  { name: "Git", color: "#F05032", pos: [1, -1, 2], icon: "git" },
  { name: "HTML", color: "#E34F26", pos: [-2, 0, 2], icon: "html5" },
  { name: "CSS", color: "#1572B6", pos: [0, 0, 2], icon: "css3" },
  { name: "JS", color: "#F7DF1E", pos: [2, 0, 2], icon: "javascript" },
  { name: "PL", color: "#336791", pos: [0, -3, 1], icon: "postgresql" },
  { name: "DSA", color: "#6366f1", pos: [3, -2, -2], icon: "leetcode" },
  { name: "Linux", color: "#FCC624", pos: [4, -1, 1], icon: "linux" },
];

function SkillNode({ name, color, pos, icon }: { name: string; color: string; pos: number[]; icon: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons/icons/${icon}.svg`;

  useFrame((state, delta) => {
    if (mesh.current) {
      const targetScale = hovered ? 1.6 : 1;
      mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      // No automatic rotation
    }
  });

  return (
    <group position={new THREE.Vector3(...pos)}>
      <RoundedBox
        ref={mesh}
        args={[1.2, 1.2, 1.2]}
        radius={0.15}
        smoothness={10}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <meshPhysicalMaterial 
          color={color}
          metalness={0.2}
          roughness={0}
          transmission={0.4}
          thickness={1}
          transparent 
          opacity={0.9}
          emissive={color}
          emissiveIntensity={hovered ? 6 : 1.5}
        />
        
        {/* Logo Image */}
        <Image
          url={iconUrl}
          transparent
          position={[0, 0, 0.61]}
          scale={[0.8, 0.8]}
          toneMapped={false}
        />
      </RoundedBox>

      <Text
        position={[0, -1.4, 0]}
        fontSize={0.4}
        color={hovered ? "#ffffff" : "#c0c0c0"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor={color}
      >
        {name}
      </Text>
      
      {hovered && (
        <pointLight intensity={12} distance={5} color={color} />
      )}
    </group>
  );
}

export default function Skills3D() {
  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing relative z-10">
      <Canvas 
        shadows 
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 11]} fov={45} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
          <spotLight 
            position={[-15, 20, 10]} 
            intensity={4} 
            angle={0.5} 
            penumbra={1} 
            castShadow 
          />
          
          <ContactShadows 
            position={[0, -4.5, 0]} 
            opacity={0.8} 
            scale={25} 
            blur={3.5} 
            far={4.5} 
            color="#000000"
          />

          {skills.map((skill, index) => (
            <SkillNode 
              key={index} 
              name={skill.name} 
              color={skill.color} 
              pos={skill.pos} 
              icon={skill.icon} 
            />
          ))}

          {/* Post Processing Effects - Attention Grabbing Bloom */}
          <EffectComposer>
            <Bloom 
              luminanceThreshold={0.2} 
              mipmapBlur 
              intensity={2.5} 
              radius={0.5} 
            />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={false} 
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
