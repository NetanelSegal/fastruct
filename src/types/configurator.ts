/**
 * 3D Configurator Types
 * Defines the structure for material overrides and configuration state
 */

import * as THREE from 'three';

/**
 * Material override configuration
 * Maps material names to their override values
 */
export interface MaterialOverrides {
  // Exterior Colors
  Color_Roof?: string | THREE.Texture;
  Color_Exterior?: string | THREE.Texture;
  Color_Exterior_walls?: string | THREE.Texture;
  Color_Exterior_channels?: string | THREE.Texture;
  Color_ExteriorSupp?: string | THREE.Texture;
  Color_Exterior_Wood?: string | THREE.Texture;
  
  // Other materials that can be customized
  Cedar?: string | THREE.Texture;
  Color_Dark?: string | THREE.Texture;
  Color_Piles?: string | THREE.Texture;
  
  // Allow any material name for flexibility
  [key: string]: string | THREE.Texture | undefined;
}

/**
 * Siding material type
 */
export type SidingMaterial = 'smooth_paint' | 'wood' | 'concrete';

/**
 * Roof material type
 */
export type RoofMaterial = 'standard_metal' | 'tiles';

/**
 * Opening type for modular openings
 */
export type OpeningType = 'window' | 'door';

/**
 * Exterior configuration
 */
export interface ExteriorConfig {
  siding: {
    material: SidingMaterial;
    color: string; // Hex color
  };
  roof: {
    material: RoofMaterial;
    color: string; // Hex color
  };
  frames: {
    color: string; // Hex color for window/door frames
  };
  openings: {
    [slot: string]: OpeningType; // e.g., { front: 'door', left: 'window' }
  };
}

/**
 * Texture configuration
 */
export interface TextureConfig {
  url: string;
  repeat?: [number, number];
  offset?: [number, number];
  rotation?: number;
}

/**
 * Exterior color presets
 */
export type ExteriorColorPreset = 
  | 'default'
  | 'charcoal'
  | 'sage'
  | 'navy'
  | 'terracotta'
  | 'cream'
  | 'slate';

/**
 * Material texture presets
 */
export type MaterialTexturePreset = 
  | 'cedar'
  | 'siding'
  | 'concrete'
  | 'metal'
  | 'wood';

/**
 * Model sides
 */
export type ModelSide = 'front' | 'left' | 'back' | 'right';

/**
 * Door material presets
 */
export type DoorMaterialPreset = 
  | 'dark_bronze'
  | 'light_bronze'
  | 'black'
  | 'white'
  | 'wood';

/**
 * Window frame material presets
 */
export type WindowFramePreset = 
  | 'dark_bronze'
  | 'light_bronze'
  | 'black'
  | 'white'
  | 'wood';

/**
 * Side-specific configuration
 */
export interface SideConfiguration {
  // Wall color/texture
  wallColor?: string;
  wallTexture?: MaterialTexturePreset | null;
  
  // Door configuration
  doorMaterial?: DoorMaterialPreset;
  doorColor?: string;
  
  // Window configuration
  windowFrameMaterial?: WindowFramePreset;
  windowFrameColor?: string;
}

/**
 * Complete configurator state
 */
export interface ConfiguratorState {
  // Exterior customization (new structure)
  exterior: ExteriorConfig;
  
  // Legacy material overrides (for backward compatibility)
  materialOverrides: MaterialOverrides;
  
  // Texture configurations
  textures: Record<string, TextureConfig>;
  
  // Active presets (global)
  exteriorColor: ExteriorColorPreset;
  materialTexture: MaterialTexturePreset;
  
  // Side-specific configurations
  sides: {
    front?: SideConfiguration;
    left?: SideConfiguration;
    back?: SideConfiguration;
    right?: SideConfiguration;
  };
  
  // Feature toggles (for future use)
  features: {
    windows: boolean;
    doors: boolean;
  };
}

/**
 * Default configurator state
 */
export const DEFAULT_CONFIGURATOR_STATE: ConfiguratorState = {
  exterior: {
    siding: {
      material: 'smooth_paint',
      color: '#a88e6b',
    },
    roof: {
      material: 'standard_metal',
      color: '#2d2d2d',
    },
    frames: {
      color: '#4a3728', // Dark bronze
    },
    openings: {
      front: 'door',
      left: 'window',
    },
  },
  materialOverrides: {},
  textures: {},
  exteriorColor: 'default',
  materialTexture: 'cedar',
  sides: {
    front: {},
    left: {},
  },
  features: {
    windows: true,
    doors: true,
  },
};

/**
 * Door material colors
 */
export const DOOR_MATERIALS: Record<DoorMaterialPreset, string> = {
  dark_bronze: '#4a3728',
  light_bronze: '#8b7355',
  black: '#1a1a1a',
  white: '#f5f5f5',
  wood: '#8b6f47',
};

/**
 * Window frame material colors
 */
export const WINDOW_FRAME_MATERIALS: Record<WindowFramePreset, string> = {
  dark_bronze: '#4a3728',
  light_bronze: '#8b7355',
  black: '#1a1a1a',
  white: '#f5f5f5',
  wood: '#8b6f47',
};

/**
 * Exterior color palette
 */
export const EXTERIOR_COLORS: Record<ExteriorColorPreset, string> = {
  default: '#a88e6b',
  charcoal: '#2d2d2d',
  sage: '#87a96b',
  navy: '#1e3a5f',
  terracotta: '#c85a3a',
  cream: '#f5f1e8',
  slate: '#4a5568',
};

/**
 * Material texture URLs (placeholder - replace with actual texture paths)
 */
export const MATERIAL_TEXTURES: Record<MaterialTexturePreset, string> = {
  cedar: '/assets/textures/cedar.jpg',
  siding: '/assets/textures/siding.jpg',
  concrete: '/assets/textures/concrete.jpg',
  metal: '/assets/textures/metal.jpg',
  wood: '/assets/textures/wood.jpg',
};
