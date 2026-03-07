'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ConfigurableModel } from '@/components/3d/ConfigurableModel';
import type { MaterialOverrides, ExteriorConfig } from '@/types/configurator';

interface ThreeDViewerSectionProps {
  materialOverrides?: MaterialOverrides;
  exterior?: ExteriorConfig;
}

export default function ThreeDViewerSection({
  materialOverrides,
  exterior,
}: ThreeDViewerSectionProps) {
  return (
    <div className='sticky top-10 z-10 h-[50vh] w-full md:top-24 lg:top-0 lg:h-screen lg:w-[65%]'>
      <Canvas camera={{ position: [4, 4, 4], fov: 50 }} className='bg-dark'>
        <color attach='background' args={['#1a1a1a']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, 3, -5]} intensity={0.5} />
        <Environment preset='city' />
        <ConfigurableModel materialOverrides={materialOverrides} exterior={exterior} />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          enableZoom={true}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
}
