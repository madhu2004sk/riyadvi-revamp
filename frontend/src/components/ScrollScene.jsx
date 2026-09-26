import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
function AnimatedCore() {
    const mesh = useRef();
    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.x =
            state.clock.elapsedTime * 0.2;
        mesh.current.rotation.y =
            state.clock.elapsedTime * 0.35;
    });
    return (
        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <mesh ref={mesh}>
                <octahedronGeometry args={[1.4, 2]} />
                <meshStandardMaterial
                    color="#d4af37"
                    wireframe
                    transparent
                    opacity={0.75}
                />
            </mesh>
        </Float>
    );
}
export default function ScrollScene() {
    return (
        <div className="absolute inset-0">
            <Canvas
                camera={{
                    position: [0, 0, 6],
                    fov: 45,
                }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.5} />
                <pointLight
                    position={[3, 3, 4]}
                    intensity={4}
                />
                <Stars
                    radius={30}
                    depth={20}
                    count={600}
                    factor={1.5}
                    fade
                />
                <AnimatedCore />
            </Canvas>
        </div>
    );
}