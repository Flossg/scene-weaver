/**
 * 图片资源文件 - 纯资源定义，不含业务逻辑字段
 */

export interface Asset {
  id: string;
  path: string;
  previewUrl: string;
}

// 场景图片资源
export const SCENE_IMAGES: Record<string, Asset> = {
  portrait: {
    id: 'portrait',
    path: 'assets/images/scene/portrait.jpg',
    previewUrl: 'https://images.unsplash.com/photo-1542513217-0b0eed3a16ad?q=80&w=1200&auto=format&fit=crop'
  },
  nature: {
    id: 'nature',
    path: 'assets/images/scene/nature.webp',
    previewUrl: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=1200&auto=format&fit=crop'
  },
  miniature: {
    id: 'miniature',
    path: 'assets/images/scene/miniature.webp',
    previewUrl: 'https://images.unsplash.com/photo-1584433305355-9cb73387ee61?q=80&w=1200&auto=format&fit=crop'
  },
  vintage: {
    id: 'vintage',
    path: 'assets/images/scene/vintage.webp',
    previewUrl: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1200&auto=format&fit=crop'
  },
  artistic: {
    id: 'artistic',
    path: 'assets/images/scene/artistic.webp',
    previewUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1200&auto=format&fit=crop'
  },
  commercial: {
    id: 'commercial',
    path: 'assets/images/scene/commercial.webp',
    previewUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop'
  },
  stilllife: {
    id: 'stilllife',
    path: 'assets/images/scene/stilllife.webp',
    previewUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200&auto=format&fit=crop'
  },
  space: {
    id: 'space',
    path: 'assets/images/scene/space.webp',
    previewUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  future: {
    id: 'future',
    path: 'assets/images/scene/future.webp',
    previewUrl: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec36bd6?q=80&w=1200&auto=format&fit=crop'
  },
  narrative: {
    id: 'narrative',
    path: 'assets/images/scene/narrative.webp',
    previewUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop'
  },
  emotional: {
    id: 'emotional',
    path: 'assets/images/scene/emotional.webp',
    previewUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop'
  },
  fresh: {
    id: 'fresh',
    path: 'assets/images/scene/fresh.webp',
    previewUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop'
  }
};

// 预设图片资源
export const PRESET_IMAGES: Record<string, Asset> = {
  p1: {
    id: 'p1',
    path: 'assets/images/preset/p1.webp',
    previewUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800'
  },
  p2: {
    id: 'p2',
    path: 'assets/images/preset/p2.webp',
    previewUrl: 'https://images.unsplash.com/photo-1524055988636-43b1daad9e29?auto=format&fit=crop&q=80&w=800'
  },
  p3: {
    id: 'p3',
    path: 'assets/images/preset/p3.webp',
    previewUrl: 'https://images.unsplash.com/photo-1627063411429-7188dd741db8?auto=format&fit=crop&q=80&w=800'
  },
  p4: {
    id: 'p4',
    path: 'assets/images/preset/p4.webp',
    previewUrl: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&q=80&w=800'
  },
  p5: {
    id: 'p5',
    path: 'assets/images/preset/p5.webp',
    previewUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800'
  },
  p6: {
    id: 'p6',
    path: 'assets/images/preset/p6.webp',
    previewUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800'
  },
  p7: {
    id: 'p7',
    path: 'assets/images/preset/p7.webp',
    previewUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800'
  },
  p8: {
    id: 'p8',
    path: 'assets/images/preset/p8.webp',
    previewUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'
  },
  p9: {
    id: 'p9',
    path: 'assets/images/preset/p9.webp',
    previewUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'
  },
  p10: {
    id: 'p10',
    path: 'assets/images/preset/p10.webp',
    previewUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  p11: {
    id: 'p11',
    path: 'assets/images/preset/p11.webp',
    previewUrl: 'https://images.unsplash.com/photo-1584433305355-9cb73387ee61?auto=format&fit=crop&q=80&w=800'
  },
  p12: {
    id: 'p12',
    path: 'assets/images/preset/p12.webp',
    previewUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800'
  },
  p13: {
    id: 'p13',
    path: 'assets/images/preset/p13.webp',
    previewUrl: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec36bd6?auto=format&fit=crop&q=80&w=800'
  },
  p14: {
    id: 'p14',
    path: 'assets/images/preset/p14.webp',
    previewUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
  },
  p15: {
    id: 'p15',
    path: 'assets/images/preset/p15.webp',
    previewUrl: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=800'
  },
  p16: {
    id: 'p16',
    path: 'assets/images/preset/p16.webp',
    previewUrl: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=800'
  }
};
