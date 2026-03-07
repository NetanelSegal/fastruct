/**
 * Configurable Model Component
 * Uses component composition with SmartMesh for color and texture customization
 */

'use client';

import { Model } from './models/1B/1B';
import { usePBRTextures, type TextureMaterial } from '@/hooks/usePBRTextures';
import type { MaterialOverrides, ExteriorConfig } from '@/types/configurator';

interface ConfigurableModelProps {
    materialOverrides?: MaterialOverrides;
    exterior?: ExteriorConfig;
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number | [number, number, number];
    [key: string]: any;
}

/**
 * Configurable Model Component
 * Uses the 1B model with exterior configuration and texture overrides
 */
export function ConfigurableModel({
    materialOverrides = {},
    exterior,
    ...props
}: ConfigurableModelProps) {
    // Determine siding texture based on material type
    let sidingTextureName: TextureMaterial | null = null;
    if (exterior?.siding.material === 'wood') {
        sidingTextureName = 'WoodSiding007';
    } else if (exterior?.siding.material === 'concrete') {
        sidingTextureName = 'Concrete019';
    }
    const sidingTextures = usePBRTextures(sidingTextureName, [2, 2]);

    // Determine roof texture based on material type
    let roofTextureName: TextureMaterial | null = null;
    if (exterior?.roof.material === 'tiles') {
        roofTextureName = 'RoofingTiles001';
    }
    const roofTextures = usePBRTextures(roofTextureName, [2, 2]);

    return (
        <Model
            textures={{
                roof: roofTextures,
                siding: sidingTextures,
            }}
            exterior={exterior}
            {...props}
        />
    );
}
