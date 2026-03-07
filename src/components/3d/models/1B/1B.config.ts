/**
 * 1B Model Configuration
 * Explicit node mappings for modular openings and exterior components
 */

import type { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type GLTFNodes = {
  [key: string]: THREE.Mesh;
};

/**
 * Transform data for a mesh within an opening
 */
export interface MeshTransform {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

/**
 * Opening node mapping for a single slot
 */
export interface OpeningNodeMap {
  window: {
    frame: string;
    frameChannel?: string;
    frameWood?: string;
    frameMetal?: string;
    glass: string;
    socket?: string;
  };
  door: {
    door: string;
    doorGlass?: string;
    frame: string;
    frameChannel?: string;
    frameWood?: string;
    awning?: string;
    deck?: string;
    downlight?: string;
    socket?: string;
    undersructure?: string;
  };
}

/**
 * Transform mappings for opening elements
 */
export interface OpeningTransforms {
  window: {
    frame: MeshTransform;
    frameChannel?: MeshTransform;
    frameWood?: MeshTransform;
    frameMetal?: MeshTransform;
    glass: MeshTransform;
    socket?: MeshTransform;
  };
  door: {
    door: MeshTransform;
    doorGlass?: MeshTransform;
    frame: MeshTransform;
    frameChannel?: MeshTransform;
    frameWood?: MeshTransform;
    awning?: MeshTransform;
    deck?: MeshTransform;
    downlight?: MeshTransform;
    socket?: MeshTransform;
    undersructure?: MeshTransform;
  };
}

/**
 * Opening slot configuration
 */
export interface OpeningSlotConfig {
  position: [number, number, number];
  nodes: OpeningNodeMap;
  transforms: OpeningTransforms;
}

/**
 * Complete 1B model configuration
 */
export interface Model1BConfig {
  openings: {
    front: OpeningSlotConfig;
    left: OpeningSlotConfig;
  };
}

/**
 * Explicit node mappings and transforms for 1B model openings
 */
export const MODEL_1B_OPENINGS: Model1BConfig['openings'] = {
  front: {
    position: [2.641, 0.056, -2.057],
    nodes: {
      window: {
        frame: 'Frame_FrontWindow_1B',
        frameChannel: 'Frame_FrontWindow__channel_1B',
        frameWood: 'Frame_FrontWindow_W_1B',
        frameMetal: 'Frame_m_FrontWindow_1B',
        glass: 'Glass_Front_1B',
        socket: 'Socket_e_Front_1B',
      },
      door: {
        door: 'Door_Front_1B',
        doorGlass: 'Door_GlassFront_1B',
        frame: 'Frame_m_FrontDoor_1B',
        frameChannel: 'Frame_m_FrontDoor__channel_1B',
        frameWood: 'Frame_m_FrontDoor_W_1B',
        awning: 'Awning_Front_1B',
        deck: 'Deck_Front_1B',
        downlight: 'Downlight_e_Front_1B',
        socket: 'Socket_e_DDF_1B',
        undersructure: 'Undersructure_Front_1B',
      },
    },
    transforms: {
      window: {
        frame: { position: [-0.212, -0.027, -0.193], rotation: [0, -1.571, 0] },
        frameChannel: { position: [-0.212, -0.027, -0.193], rotation: [0, -1.571, 0] },
        frameWood: { position: [-0.212, -0.027, -0.193], rotation: [0, -1.571, 0] },
        frameMetal: { position: [-0.212, -0.027, -0.193], rotation: [0, -1.571, 0], scale: 0.025 },
        glass: { position: [-0.212, -0.027, -0.193], rotation: [0, -1.571, 0], scale: 0.025 },
        socket: { position: [0.474, -0.702, -0.21], rotation: [0, 1.571, 0], scale: 0.025 },
      },
      door: {
        awning: { position: [-4.472, 1.238, -0.203], scale: 0.025 },
        deck: { position: [-0.51, -1.213, -0.218] },
        door: { position: [-4.475, -0.199, -0.137], rotation: [-Math.PI, 0, 0], scale: -1 },
        doorGlass: { position: [-0.508, -0.241, -0.211], scale: 0.025 },
        downlight: { position: [0.472, 0.521, -0.203], rotation: [0, 1.571, 0], scale: 0.025 },
        frame: { position: [-0.508, -0.241, -0.211] },
        frameChannel: { position: [-0.508, -0.241, -0.211] },
        frameWood: { position: [-0.508, -0.241, -0.211] },
        socket: { position: [0.472, 0.521, -0.203], rotation: [0, 1.571, 0], scale: 0.025 },
        undersructure: { position: [-0.51, -1.213, -0.218] },
      },
    },
  },
  left: {
    position: [5.394, 0.056, 0],
    nodes: {
      window: {
        frame: 'Frame_e_LefttWindow_1B',
        frameWood: 'Frame_e_LefttWindow_W_1B',
        frameMetal: 'Frame_m_LefttWindow_1B',
        glass: 'Glass_e_LefttWindow_1B',
        socket: 'Socket_e_Left_1B',
      },
      door: {
        door: 'Door_Left_1B',
        doorGlass: 'Door_GlassLeft_1B',
        frame: 'Frame_LeftDoor_1B',
        frameWood: 'Frame_LeftDoor_W_1B',
        awning: 'Awning_Left_1B',
        deck: 'Deck_Left_1B',
        downlight: 'Downlight_e_Left_1B',
        undersructure: 'Undersructure_Left_1B',
      },
    },
    transforms: {
      window: {
        frame: { position: [0.193, -0.027, 0.829], rotation: [Math.PI, 0, Math.PI] },
        frameWood: { position: [0.193, -0.027, 0.829], rotation: [-Math.PI, 0, -Math.PI] },
        frameMetal: { position: [0.193, -0.027, 0.829], rotation: [Math.PI, 0, Math.PI], scale: 0.025 },
        glass: { position: [0.193, -0.027, 0.829], rotation: [Math.PI, 0, Math.PI], scale: 0.025 },
        socket: { position: [0.21, -0.702, 1.514], scale: 0.025 },
      },
      door: {
        awning: { position: [0.206, 1.238, 0.542], rotation: [0, -1.571, 0], scale: 0.025 },
        deck: { position: [0.217, -1.213, 0.533], rotation: [0, -1.571, 0] },
        door: { position: [0.137, -0.199, -3.423], rotation: [-Math.PI, 1.571, 0], scale: -1 },
        doorGlass: { position: [0.137, -0.199, -3.423], rotation: [-Math.PI, 1.571, 0], scale: -1 },
        downlight: { position: [0.203, 0.521, 1.514], scale: 0.025 },
        frame: { position: [0.211, -0.241, 0.544], rotation: [0, -1.571, 0] },
        frameWood: { position: [0.211, -0.241, 0.544], rotation: [0, -1.571, 0] },
        undersructure: { position: [0.217, -1.213, 0.533], rotation: [0, -1.571, 0] },
      },
    },
  },
};

/**
 * Helper to get node from GLTF nodes object
 */
export function getNode<T extends GLTFNodes>(
  nodes: T,
  nodeName: string
): THREE.Mesh | null {
  return (nodes[nodeName as keyof T] as THREE.Mesh) || null;
}
