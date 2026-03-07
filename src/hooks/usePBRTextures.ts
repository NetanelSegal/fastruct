/**
 * PBR Texture Loading Hook
 * Loads base, normal, and roughness textures from the textures folder
 */

import { useMemo } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export interface PBRTextureSet {
  base: THREE.Texture;
  normal: THREE.Texture;
  roughness: THREE.Texture;
}

/**
 * Available texture materials
 */
export type TextureMaterial = 'Concrete019' | 'RoofingTiles001' | 'WoodSiding007';

/**
 * Hook to load PBR textures for a material
 * @param textureName - Name of the texture material (e.g., 'Concrete019')
 * @param repeat - Texture repeat values [x, y]
 * @returns PBR texture set or null if textureName is not provided
 */
export function usePBRTextures(
  textureName: TextureMaterial | string | null | undefined,
  repeat: [number, number] = [1, 1]
): PBRTextureSet | null {
  const texturePaths = useMemo(() => {
    if (!textureName) return [];
    const basePath = `/assets/3d/textures/${textureName}`;
    return [
      `${basePath}/base.jpg`,
      `${basePath}/normal.jpg`,
      `${basePath}/roughness.jpg`,
    ];
  }, [textureName]);

  // useTexture can handle empty arrays gracefully
  const textures = useTexture(
    texturePaths,
    (loadedTextures) => {
      // Configure texture properties
      loadedTextures.forEach((texture) => {
        if (texture instanceof THREE.Texture) {
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(repeat[0], repeat[1]);
        }
      });
    }
  ) as THREE.Texture[];

  return useMemo(() => {
    if (!textureName || !textures || textures.length !== 3) return null;

    return {
      base: textures[0],
      normal: textures[1],
      roughness: textures[2],
    };
  }, [textureName, textures]);
}
