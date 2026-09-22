// Each RGB row sums to one: neutral metal/white stays neutral and alpha is untouched.
// Convex channel mixes recolor the original pixels without clipping highlights.
export const productColorTones = [
  {
    id: 'bracelet-teal',
    matrix: [
      .372, 0, .628, 0, 0,
      0, .764, .236, 0, 0,
      .704, 0, .296, 0, 0,
      0, 0, 0, 1, 0,
    ],
  },
  {
    id: 'purifier-pale-blue',
    matrix: [
      .55, 0, .45, 0, 0,
      0, .45, .55, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 0, 1, 0,
    ],
  },
] as const;
