/**
 * Configurator Hook
 * Manages 3D model configuration state and material overrides
 */

import { useState, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import {
  ConfiguratorState,
  MaterialOverrides,
  ExteriorColorPreset,
  MaterialTexturePreset,
  DEFAULT_CONFIGURATOR_STATE,
  EXTERIOR_COLORS,
  SidingMaterial,
  RoofMaterial,
} from '@/types/configurator';

export function useConfigurator(initialState?: Partial<ConfiguratorState>) {
  const [state, setState] = useState<ConfiguratorState>({
    ...DEFAULT_CONFIGURATOR_STATE,
    ...initialState,
  });

  /**
   * Update material override
   */
  const setMaterialOverride = useCallback(
    (materialName: string, value: string | THREE.Texture | null) => {
      setState((prev) => ({
        ...prev,
        materialOverrides: {
          ...prev.materialOverrides,
          [materialName]: value ?? undefined,
        },
      }));
    },
    []
  );

  /**
   * Set exterior color preset (legacy - updates exterior.siding.color)
   */
  const setExteriorColor = useCallback((preset: ExteriorColorPreset) => {
    const color = EXTERIOR_COLORS[preset];
    setState((prev) => ({
      ...prev,
      exteriorColor: preset,
      exterior: {
        ...prev.exterior,
        siding: {
          ...prev.exterior.siding,
          color,
        },
      },
      materialOverrides: {
        ...prev.materialOverrides,
        Color_Roof: color,
        Color_Exterior: color,
      },
    }));
  }, []);

  /**
   * Set siding material
   */
  const setSidingMaterial = useCallback((material: SidingMaterial) => {
    setState((prev) => ({
      ...prev,
      exterior: {
        ...prev.exterior,
        siding: {
          ...prev.exterior.siding,
          material,
        },
      },
    }));
  }, []);

  /**
   * Set siding color
   */
  const setSidingColor = useCallback((color: string) => {
    setState((prev) => ({
      ...prev,
      exterior: {
        ...prev.exterior,
        siding: {
          ...prev.exterior.siding,
          color,
        },
      },
    }));
  }, []);

  /**
   * Set roof material
   */
  const setRoofMaterial = useCallback((material: RoofMaterial) => {
    setState((prev) => ({
      ...prev,
      exterior: {
        ...prev.exterior,
        roof: {
          ...prev.exterior.roof,
          material,
        },
      },
    }));
  }, []);

  /**
   * Set roof color
   */
  const setRoofColor = useCallback((color: string) => {
    setState((prev) => ({
      ...prev,
      exterior: {
        ...prev.exterior,
        roof: {
          ...prev.exterior.roof,
          color,
        },
      },
    }));
  }, []);

  /**
   * Set frames color
   */
  const setFramesColor = useCallback((color: string) => {
    setState((prev) => ({
      ...prev,
      exterior: {
        ...prev.exterior,
        frames: {
          ...prev.exterior.frames,
          color,
        },
      },
    }));
  }, []);

  /**
   * Set material texture preset
   */
  const setMaterialTexture = useCallback((preset: MaterialTexturePreset) => {
    setState((prev) => ({
      ...prev,
      materialTexture: preset,
      // Texture loading will be handled in the Model component
    }));
  }, []);

  /**
   * Batch update material overrides
   */
  const setMaterialOverrides = useCallback((overrides: MaterialOverrides) => {
    setState((prev) => ({
      ...prev,
      materialOverrides: {
        ...prev.materialOverrides,
        ...overrides,
      },
    }));
  }, []);

  /**
   * Reset to default state
   */
  const reset = useCallback(() => {
    setState(DEFAULT_CONFIGURATOR_STATE);
  }, []);

  /**
   * Get computed material overrides with color values resolved
   */
  const computedOverrides = useMemo(() => {
    const overrides: MaterialOverrides = { ...state.materialOverrides };
    
    // Ensure roof color is set from exterior color preset
    if (!overrides.Color_Roof && state.exteriorColor) {
      overrides.Color_Roof = EXTERIOR_COLORS[state.exteriorColor];
    }
    
    return overrides;
  }, [state.materialOverrides, state.exteriorColor]);

  return {
    state,
    setMaterialOverride,
    setExteriorColor,
    setMaterialTexture,
    setMaterialOverrides,
    setSidingMaterial,
    setSidingColor,
    setRoofMaterial,
    setRoofColor,
    setFramesColor,
    reset,
    computedOverrides,
  };
}
