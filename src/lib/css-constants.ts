const CSSConstants = {
  colors: {
    light: '#e5e0d2',
    accent: '#a88e6b',
    dark: '#171717',
    white: '#ffffff',
    black: '#000000',
  },
} as const;

export type ColorsUnion = keyof (typeof CSSConstants)['colors'];

export default CSSConstants;
