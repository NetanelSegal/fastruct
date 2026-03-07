'use client';

import Page from '@/components/Page';
import ThreeDViewerSection from '@/sections/3d-test/ThreeDViewerSection';
import ThreeDControlPanel from '@/sections/3d-test/ThreeDControlPanel';
import { useConfigurator } from '@/hooks/useConfigurator';

export default function ThreeDTestPage() {
  const {
    computedOverrides,
    setExteriorColor,
    setSidingMaterial,
    setSidingColor,
    setRoofMaterial,
    setRoofColor,
    setFramesColor,
    state,
  } = useConfigurator();

  return (
    <Page className='bg-dark'>
      <div className='flex min-h-screen flex-col pt-10 md:pt-24 lg:flex-row lg:pt-0'>
        {/* 3D Canvas Area */}
        <ThreeDViewerSection
          materialOverrides={computedOverrides}
          exterior={state.exterior}
        />

        {/* Control Panel */}
        <div className='relative z-0 lg:w-[35%] lg:pt-20'>
          <ThreeDControlPanel
            exteriorColor={state.exteriorColor}
            setExteriorColor={setExteriorColor}
            materialOverrides={computedOverrides}
            exterior={state.exterior}
            setSidingMaterial={setSidingMaterial}
            setSidingColor={setSidingColor}
            setRoofMaterial={setRoofMaterial}
            setRoofColor={setRoofColor}
            setFramesColor={setFramesColor}
          />
        </div>
      </div>
    </Page>
  );
}
