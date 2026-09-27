import { Canvas, useFrame } from "@react-three/fiber";

import {
    Float,
    OrbitControls,
    Stars,
} from "@react-three/drei";

import { useRef } from "react";

function CentralObject() {
    const meshRef = useRef();
    const isMobile = window.innerWidth < 768;

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x =
            state.clock.elapsedTime * 0.25;
        meshRef.current.rotation.y =
            state.clock.elapsedTime * 0.4;
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1.6, 2]} />
            <meshStandardMaterial
                color="#d4af37"
                wireframe
                transparent
                opacity={0.8}
            />
        </mesh>
    );
}

function FloatingNode({ position, scale = 0.08 }) {
    return (
        <Float
            speed={1.5}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <mesh position={position}>
                <sphereGeometry args={[scale, 16, 16]} />
                <meshStandardMaterial
                    color="#d4af37"
                    emissive="#d4af37"
                    emissiveIntensity={1}
                />
            </mesh>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight
                position={[4, 3, 5]}
                intensity={5}
            />
            <pointLight
                position={[-4, -2, 2]}
                intensity={3}
            />
            <Stars
                radius={50}
                depth={30}
                count={isMobile ? 300 : 1000}
                factor={2}
                saturation={0}
                fade
                speed={0.5}
            />
            <CentralObject />
            <FloatingNode position={[2.5, 1.2, 0]} />
            <FloatingNode position={[-2.5, 1.5, -1]} />
            <FloatingNode position={[2, -1.7, 0]} />
            <FloatingNode position={[-2, -1.4, 1]} />
            <FloatingNode position={[0.2, 2.4, -1]} />
            <FloatingNode position={[0, -2.5, 0]} scale={0.06} />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
            />
        </>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0">
            <Canvas
                camera={{
                    position: [0, 0, 8],
                    fov: 45,
                }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    powerPreference: "high-performance",
                }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}