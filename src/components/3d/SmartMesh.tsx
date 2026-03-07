/**
 * SmartMesh Component
 * Handles mesh rendering with optional PBR textures and color tinting
 * 
 * Key fix: Applies color even when textures are present (for tinting)
 */

'use client';

import * as THREE from 'three';
import { ComponentProps, useMemo } from 'react';
import type { PBRTextureSet } from '@/hooks/usePBRTextures';

interface SmartMeshProps extends ComponentProps<'mesh'> {
    geometry: THREE.BufferGeometry;
    textureSet?: PBRTextureSet | null;
    color?: string; // Hex color string
    defaultMaterial?: THREE.MeshStandardMaterial;
}

/**
 * SmartMesh - Renders a mesh with optional PBR textures and color
 * 
 * Logic:
 * - If textureSet is provided: Use PBR textures with color tinting
 * - If no textureSet but color: Use solid color material
 * - If defaultMaterial: Use default material (with optional color override)
 */
export function SmartMesh({
    geometry,
    textureSet,
    color,
    defaultMaterial,
    ...props
}: SmartMeshProps) {
    const material = useMemo(() => {
        // If we have textures, create material with textures + color tinting
        if (textureSet) {
            const mat = new THREE.MeshStandardMaterial({
                map: textureSet.base,
                normalMap: textureSet.normal,
                roughnessMap: textureSet.roughness,
            });

            // Apply color tinting if color is provided
            if (color) {
                mat.color.set(color);
            }

            return mat;
        }

        // If we have a color but no texture, use solid color
        if (color) {
            return new THREE.MeshStandardMaterial({
                color: color,
            });
        }

        // Use default material if provided, otherwise create a default one
        if (defaultMaterial) {
            // Clone to avoid mutating the original
            const mat = defaultMaterial.clone();
            if (color) {
                mat.color.set(color);
            }
            return mat;
        }

        // Fallback: white material
        return new THREE.MeshStandardMaterial({ color: '#ffffff' });
    }, [textureSet, color, defaultMaterial]);

    return (
        <mesh geometry={geometry} material={material} {...props} />
    );
}
