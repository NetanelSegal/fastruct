'use client';

import type {
  ExteriorColorPreset,
  MaterialTexturePreset,
  MaterialOverrides,
  ExteriorConfig,
  SidingMaterial,
  RoofMaterial,
} from '@/types/configurator';
import { EXTERIOR_COLORS } from '@/types/configurator';

interface ThreeDControlPanelProps {
  exteriorColor: ExteriorColorPreset;
  setExteriorColor: (preset: ExteriorColorPreset) => void;
  materialOverrides?: MaterialOverrides;
  exterior?: ExteriorConfig;
  setSidingMaterial: (material: SidingMaterial) => void;
  setSidingColor: (color: string) => void;
  setRoofMaterial: (material: RoofMaterial) => void;
  setRoofColor: (color: string) => void;
  setFramesColor: (color: string) => void;
}

// Color presets for quick selection
const COLOR_PRESETS = [
  { name: 'Charcoal', value: '#2d2d2d' },
  { name: 'Sage', value: '#87a96b' },
  { name: 'Navy', value: '#1e3a5f' },
  { name: 'Terracotta', value: '#c85a3a' },
  { name: 'Cream', value: '#f5f1e8' },
  { name: 'Slate', value: '#4a5568' },
  { name: 'Bronze', value: '#4a3728' },
  { name: 'White', value: '#ffffff' },
];

export default function ThreeDControlPanel({
  exteriorColor,
  setExteriorColor,
  materialOverrides,
  exterior,
  setSidingMaterial,
  setSidingColor,
  setRoofMaterial,
  setRoofColor,
  setFramesColor,
}: ThreeDControlPanelProps) {
  return (
    <div className='bg-dark border-accent/20 container-padding min-h-screen border-t py-6 pt-20 md:pt-24 lg:border-t-0 lg:border-l lg:pt-6'>
      <div className='mx-auto space-y-6 lg:max-w-none'>
        {/* Row 1: Model Selection */}
        <div className='space-y-2'>
          <label className='text-h6 font-bebas text-light block'>
            Choose Model
          </label>
          <div className='flex gap-3'>
            <button
              disabled
              className='btn btn-md cursor-not-allowed border border-white/20 bg-transparent text-white/40'>
              1B (Current)
            </button>
          </div>
        </div>

        {/* Row 2: Siding Material & Color */}
        <div className='space-y-3'>
          <label className='text-h6 font-bebas text-light block'>
            Siding
          </label>
          
          {/* Material Selection */}
          <div className='space-y-2'>
            <label className='text-light/80 font-poppins text-sm block'>
              Material
            </label>
            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => setSidingMaterial('smooth_paint')}
                className={`btn btn-sm ${
                  exterior?.siding.material === 'smooth_paint'
                    ? 'btn-primary'
                    : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                }`}>
                Paint
              </button>
              <button
                onClick={() => setSidingMaterial('wood')}
                className={`btn btn-sm ${
                  exterior?.siding.material === 'wood'
                    ? 'btn-primary'
                    : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                }`}>
                Wood
              </button>
              <button
                onClick={() => setSidingMaterial('concrete')}
                className={`btn btn-sm ${
                  exterior?.siding.material === 'concrete'
                    ? 'btn-primary'
                    : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                }`}>
                Concrete
              </button>
            </div>
          </div>

          {/* Color Selection */}
          <div className='space-y-2'>
            <label className='text-light/80 font-poppins text-sm block'>
              Color
            </label>
            <div className='flex flex-wrap gap-2'>
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setSidingColor(preset.value)}
                  className={`btn btn-sm relative ${
                    exterior?.siding.color === preset.value
                      ? 'btn-primary'
                      : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                  }`}
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: preset.value,
                  }}>
                  {preset.name}
                </button>
              ))}
            </div>
            <input
              type='color'
              value={exterior?.siding.color || '#a88e6b'}
              onChange={(e) => setSidingColor(e.target.value)}
              className='h-10 w-full cursor-pointer rounded border border-white/20 bg-transparent'
            />
          </div>
        </div>

        {/* Row 3: Roof Material & Color */}
        <div className='space-y-3'>
          <label className='text-h6 font-bebas text-light block'>
            Roof
          </label>
          
          {/* Material Selection */}
          <div className='space-y-2'>
            <label className='text-light/80 font-poppins text-sm block'>
              Material
            </label>
            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => setRoofMaterial('standard_metal')}
                className={`btn btn-sm ${
                  exterior?.roof.material === 'standard_metal'
                    ? 'btn-primary'
                    : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                }`}>
                Metal
              </button>
              <button
                onClick={() => setRoofMaterial('tiles')}
                className={`btn btn-sm ${
                  exterior?.roof.material === 'tiles'
                    ? 'btn-primary'
                    : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                }`}>
                Tiles
              </button>
            </div>
          </div>

          {/* Color Selection */}
          <div className='space-y-2'>
            <label className='text-light/80 font-poppins text-sm block'>
              Color
            </label>
            <div className='flex flex-wrap gap-2'>
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setRoofColor(preset.value)}
                  className={`btn btn-sm relative ${
                    exterior?.roof.color === preset.value
                      ? 'btn-primary'
                      : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                  }`}
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: preset.value,
                  }}>
                  {preset.name}
                </button>
              ))}
            </div>
            <input
              type='color'
              value={exterior?.roof.color || '#2d2d2d'}
              onChange={(e) => setRoofColor(e.target.value)}
              className='h-10 w-full cursor-pointer rounded border border-white/20 bg-transparent'
            />
          </div>
        </div>

        {/* Row 4: Frames Color */}
        <div className='space-y-3'>
          <label className='text-h6 font-bebas text-light block'>
            Window & Door Frames
          </label>
          
          {/* Color Selection */}
          <div className='space-y-2'>
            <label className='text-light/80 font-poppins text-sm block'>
              Frame Color
            </label>
            <div className='flex flex-wrap gap-2'>
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setFramesColor(preset.value)}
                  className={`btn btn-sm relative ${
                    exterior?.frames.color === preset.value
                      ? 'btn-primary'
                      : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                  }`}
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: preset.value,
                  }}>
                  {preset.name}
                </button>
              ))}
            </div>
            <input
              type='color'
              value={exterior?.frames.color || '#4a3728'}
              onChange={(e) => setFramesColor(e.target.value)}
              className='h-10 w-full cursor-pointer rounded border border-white/20 bg-transparent'
            />
          </div>
        </div>

        {/* Legacy: Exterior Color Presets (Quick Apply) */}
        <div className='space-y-2'>
          <label className='text-h6 font-bebas text-light block'>
            Quick Color Presets
          </label>
          <div className='flex flex-wrap gap-3'>
            {Object.entries(EXTERIOR_COLORS).map(([preset, color]) => (
              <button
                key={preset}
                onClick={() => setExteriorColor(preset as ExteriorColorPreset)}
                className={`btn btn-md relative ${
                  exteriorColor === preset
                    ? 'btn-primary'
                    : 'border border-white/20 bg-transparent text-white/70 hover:bg-white/10'
                }`}
                style={{
                  borderLeftWidth: '4px',
                  borderLeftColor: color,
                }}>
                <span className='capitalize'>{preset}</span>
              </button>
            ))}
          </div>
          <p className='text-light/60 font-poppins text-xs'>
            Applies color to siding
          </p>
        </div>

      </div>
    </div>
  );
}
