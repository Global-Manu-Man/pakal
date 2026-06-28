/**
 * Variantes visuales del portafolio (el texto vive en translations).
 * Cada variante corresponde a un "mockup" decorativo distinto, emparejado por
 * índice con translations.portfolio.items.
 *  - variant: 'mobile' | 'logo' | 'brand'
 */
export const portfolioMeta = [
  {
    variant: 'mobile',
    images: [
      'https://images.pexels.com/photos/6207729/pexels-photo-6207729.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    variant: 'logo',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    variant: 'brand',
    images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

/** Tecnologías mostradas en la tira "Stack" (no traducibles). */
export const techStack = [
  '◆ AWS',
  '◇ Node.js',
  '◯ React',
  '▲ Next.js',
  '✦ PostgreSQL',
  '⬢ Docker',
];
