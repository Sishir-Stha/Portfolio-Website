import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

// Computer Monitor Component
const ComputerMonitor = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={meshRef} position={position}>
        {/* Monitor Screen */}
        <RoundedBox args={[3, 2, 0.1]} radius={0.1}>
          <meshStandardMaterial color="#1e293b" />
        </RoundedBox>
        {/* Screen Content */}
        <RoundedBox args={[2.6, 1.6, 0.05]} radius={0.05} position={[0, 0, 0.06]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.3} />
        </RoundedBox>
        {/* Monitor Stand */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
        {/* Base */}
        <mesh position={[0, -1.4, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      </group>
    </Float>
  );
};

// Code Window Component
const CodeWindow = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <RoundedBox args={[1.5, 1, 0.1]} radius={0.05}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </RoundedBox>
        {/* Code lines */}
        <mesh position={[0, 0, 0.06]}>
          <RoundedBox args={[1.2, 0.1, 0.02]} radius={0.01}>
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} />
          </RoundedBox>
        </mesh>
        <mesh position={[0, -0.2, 0.06]}>
          <RoundedBox args={[0.8, 0.05, 0.02]} radius={0.01}>
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
          </RoundedBox>
        </mesh>
      </mesh>
    </Float>
  );
};

// Settings Icon Component
const SettingsIcon = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <RoundedBox args={[1, 1, 0.2]} radius={0.1}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
        </RoundedBox>
        {/* Gear center */}
        <mesh position={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </mesh>
    </Float>
  );
};

// Cloud Icon Component
const CloudIcon = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 + position[1];
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={meshRef} position={position}>
        <RoundedBox args={[1.2, 0.8, 0.3]} radius={0.2}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.2} />
        </RoundedBox>
        {/* Download Arrow */}
        <mesh position={[0, -0.3, 0.2]}>
          <coneGeometry args={[0.15, 0.3]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
};

// Mobile Device Component
const MobileDevice = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <RoundedBox args={[0.6, 1.2, 0.1]} radius={0.1}>
          <meshStandardMaterial color="#5b21b6" emissive="#5b21b6" emissiveIntensity={0.2} />
        </RoundedBox>
        {/* Screen */}
        <mesh position={[0, 0, 0.06]}>
          <RoundedBox args={[0.4, 0.8, 0.02]} radius={0.05}>
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.4} />
          </RoundedBox>
        </mesh>
      </mesh>
    </Float>
  );
};

// Code Brackets Component
const CodeBrackets = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={meshRef} position={position}>
        <RoundedBox args={[1, 1, 0.2]} radius={0.1}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
        </RoundedBox>
        {/* Brackets visualization */}
        <mesh position={[-0.2, 0, 0.15]}>
          <boxGeometry args={[0.1, 0.6, 0.05]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.2, 0, 0.15]}>
          <boxGeometry args={[0.1, 0.6, 0.05]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
};

// Main Tech Scene
const TechScene = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Monitor */}
      <ComputerMonitor position={[0, 0, 0]} />
      
      {/* Code Windows */}
      <CodeWindow position={[-2.5, 1.5, 0.5]} color="#312e81" />
      <CodeWindow position={[2.5, 1, -0.5]} color="#1e40af" />
      <CodeWindow position={[-1.5, -2, 1]} color="#3730a3" />
      
      {/* Settings Icons */}
      <SettingsIcon position={[-3, 0, 1.5]} />
      <SettingsIcon position={[1, 2.5, 0]} />
      
      {/* Cloud Elements */}
      <CloudIcon position={[3, 0.5, 1]} />
      <CloudIcon position={[0, 3, -1]} />
      
      {/* Mobile Device */}
      <MobileDevice position={[2.8, -1.5, 0.8]} />
      
      {/* Code Brackets */}
      <CodeBrackets position={[-2, -1, -1]} />
      <CodeBrackets position={[1.5, -2.5, -0.5]} />
    </group>
  );
};

// Main component
const TechStack3D = () => {
  return (
    <div className="w-80 h-80 lg:w-96 lg:h-96">
      <Canvas
        camera={{ position: [6, 4, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[5, -5, 5]} intensity={0.6} color="#8b5cf6" />
        <spotLight position={[0, 15, 0]} intensity={0.7} color="#10b981" />
        
        <TechScene />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
};

export default TechStack3D;