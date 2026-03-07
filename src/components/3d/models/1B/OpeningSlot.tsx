/**
 * OpeningSlot Component
 * Renders either a window or door based on the selected opening type
 * Preserves the original group transform hierarchy
 */

'use client';

import * as THREE from 'three';
import { ComponentProps } from 'react';
import type { OpeningType } from '@/types/configurator';
import type { OpeningSlotConfig, MeshTransform } from './1B.config';

interface OpeningSlotProps extends ComponentProps<'group'> {
  slot: 'front' | 'left';
  openingType: OpeningType;
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
  config: OpeningSlotConfig;
  frameColor?: string;
}

/**
 * Helper to apply transform to a mesh
 */
function applyTransform(
  transform: MeshTransform | undefined,
  defaultPosition: [number, number, number] = [0, 0, 0]
) {
  if (!transform) return { position: defaultPosition };
  return {
    position: transform.position || defaultPosition,
    rotation: transform.rotation,
    scale: transform.scale,
  };
}

/**
 * OpeningSlot - Renders window or door based on type
 * 
 * Key: Preserves the group position transform from config
 * Visibility toggling ensures only one type (window OR door) is visible
 */
export function OpeningSlot({
  slot,
  openingType,
  nodes,
  materials,
  config,
  frameColor = '#4a3728',
  ...props
}: OpeningSlotProps) {
  const { position, nodes: nodeMap, transforms } = config;

  return (
    <group position={position} {...props}>
      {/* Window Group - visible only when openingType is 'window' */}
      <group visible={openingType === 'window'}>
        {/* Main Frame */}
        {nodeMap.window.frame && nodes[nodeMap.window.frame] && (
          <mesh
            geometry={(nodes[nodeMap.window.frame] as THREE.Mesh).geometry}
            {...applyTransform(transforms.window.frame)}
          >
            <meshStandardMaterial color={frameColor} />
          </mesh>
        )}

        {/* Frame Channel */}
        {nodeMap.window.frameChannel &&
          nodes[nodeMap.window.frameChannel] && (
            <mesh
              geometry={
                (nodes[nodeMap.window.frameChannel] as THREE.Mesh).geometry
              }
              material={materials.Color_Exterior_channels}
              {...applyTransform(transforms.window.frameChannel)}
            />
          )}

        {/* Frame Wood */}
        {nodeMap.window.frameWood && nodes[nodeMap.window.frameWood] && (
          <mesh
            geometry={(nodes[nodeMap.window.frameWood] as THREE.Mesh).geometry}
            material={materials.Color_Exterior_Wood}
            {...applyTransform(transforms.window.frameWood)}
          />
        )}

        {/* Frame Metal */}
        {nodeMap.window.frameMetal && nodes[nodeMap.window.frameMetal] && (
          <mesh
            geometry={(nodes[nodeMap.window.frameMetal] as THREE.Mesh).geometry}
            material={materials.Dark_Bronze}
            {...applyTransform(transforms.window.frameMetal)}
          />
        )}

        {/* Glass */}
        {nodeMap.window.glass && nodes[nodeMap.window.glass] && (
          <mesh
            geometry={(nodes[nodeMap.window.glass] as THREE.Mesh).geometry}
            material={materials.glassClear}
            {...applyTransform(transforms.window.glass)}
          />
        )}

        {/* Socket */}
        {nodeMap.window.socket && nodes[nodeMap.window.socket] && (
          <mesh
            geometry={(nodes[nodeMap.window.socket] as THREE.Mesh).geometry}
            material={materials.Color_Exterior}
            {...applyTransform(transforms.window.socket)}
          />
        )}
      </group>

      {/* Door Group - visible only when openingType is 'door' */}
      <group visible={openingType === 'door'}>
        {/* Awning */}
        {nodeMap.door.awning && nodes[nodeMap.door.awning] && (
          <mesh
            geometry={(nodes[nodeMap.door.awning] as THREE.Mesh).geometry}
            material={materials.Color_Exterior}
            {...applyTransform(transforms.door.awning)}
          />
        )}

        {/* Deck */}
        {nodeMap.door.deck && nodes[nodeMap.door.deck] && (
          <mesh
            geometry={(nodes[nodeMap.door.deck] as THREE.Mesh).geometry}
            material={materials.Cedar}
            {...applyTransform(transforms.door.deck)}
          />
        )}

        {/* Door Mesh */}
        {nodeMap.door.door && nodes[nodeMap.door.door] && (
          <mesh
            geometry={(nodes[nodeMap.door.door] as THREE.Mesh).geometry}
            material={materials.Dark_Bronze}
            {...applyTransform(transforms.door.door)}
          />
        )}

        {/* Door Glass */}
        {nodeMap.door.doorGlass && nodes[nodeMap.door.doorGlass] && (
          <mesh
            geometry={(nodes[nodeMap.door.doorGlass] as THREE.Mesh).geometry}
            material={materials.glassClear}
            {...applyTransform(transforms.door.doorGlass)}
          />
        )}

        {/* Downlight */}
        {nodeMap.door.downlight && nodes[nodeMap.door.downlight] && (
          <mesh
            geometry={(nodes[nodeMap.door.downlight] as THREE.Mesh).geometry}
            material={materials.Color_Exterior}
            {...applyTransform(transforms.door.downlight)}
          />
        )}

        {/* Door Frame */}
        {nodeMap.door.frame && nodes[nodeMap.door.frame] && (
          <mesh
            geometry={(nodes[nodeMap.door.frame] as THREE.Mesh).geometry}
            {...applyTransform(transforms.door.frame)}
          >
            <meshStandardMaterial color={frameColor} />
          </mesh>
        )}

        {/* Frame Channel */}
        {nodeMap.door.frameChannel &&
          nodes[nodeMap.door.frameChannel] && (
            <mesh
              geometry={
                (nodes[nodeMap.door.frameChannel] as THREE.Mesh).geometry
              }
              material={materials.Color_Exterior_channels}
              {...applyTransform(transforms.door.frameChannel)}
            />
          )}

        {/* Frame Wood */}
        {nodeMap.door.frameWood && nodes[nodeMap.door.frameWood] && (
          <mesh
            geometry={(nodes[nodeMap.door.frameWood] as THREE.Mesh).geometry}
            material={materials.Color_Exterior_Wood}
            {...applyTransform(transforms.door.frameWood)}
          />
        )}

        {/* Socket */}
        {nodeMap.door.socket && nodes[nodeMap.door.socket] && (
          <mesh
            geometry={(nodes[nodeMap.door.socket] as THREE.Mesh).geometry}
            material={materials.Color_Exterior}
            {...applyTransform(transforms.door.socket)}
          />
        )}

        {/* Undersructure */}
        {nodeMap.door.undersructure &&
          nodes[nodeMap.door.undersructure] && (
            <mesh
              geometry={
                (nodes[nodeMap.door.undersructure] as THREE.Mesh).geometry
              }
              material={materials.Color_ExteriorSupp}
              {...applyTransform(transforms.door.undersructure)}
            />
          )}
      </group>
    </group>
  );
}
