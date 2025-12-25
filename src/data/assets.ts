/**
 * 视觉资产清单 - 定义专业级别生成指令
 * 视觉准则：
 * 1. 25 岁左右精致东方形象（拒绝欧美化、日本元素）
 * 2. 专业摄影规格（哈苏/徕卡质感、中画幅影调、丁达尔光影）
 * 3. 场景化意境：基于各场景 defaults 提示词挑选预览图
 */

export interface AssetItem {
  id: string;
  path: string;
  previewUrl: string;
  prompt: string;
  title: string;
  category: string;
}

export const SCENE_ASSETS: Record<string, AssetItem> = {
  portrait: {
    id: 'portrait',
    path: 'assets/images/scene/portrait.jpg',
    previewUrl: 'https://images.unsplash.com/photo-1542513217-0b0eed3a16ad?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Professional high-end fashion photography of a 25-year-old Chinese woman, refined Eastern bone structure, porcelain skin, wearing a minimalist modern silk dress, cinematic chiaroscuro lighting, 8k resolution, Hasselblad texture.',
    title: '时尚肖像',
    category: '人像摄影'
  },
  nature: {
    id: 'nature',
    path: 'assets/images/scene/nature.webp',
    previewUrl: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Grand landscape of Zhangjiajie pillar mountains, morning mist, traditional Chinese ink-painting atmosphere but photorealistic, morning golden hour light, epic spatial scale, 8k resolution.',
    title: '山水意境',
    category: '风光摄影'
  },
  miniature: {
    id: 'miniature',
    path: 'assets/images/scene/miniature.webp',
    previewUrl: 'https://images.unsplash.com/photo-1584433305355-9cb73387ee61?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Macro photography of a handcrafted 1:50 scale Suzhou garden model, exquisite wood carving, tiny koi pond with light refraction, tilt-shift aesthetic, hyper-detailed.',
    title: '微缩世界',
    category: '微距摄影'
  },
  vintage: {
    id: 'vintage',
    path: 'assets/images/scene/vintage.webp',
    previewUrl: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Cinematic portrait of a 25-year-old woman in Ming Dynasty Hanfu, performing tea ceremony, soft morning window light, Jiangnan scholar study, muted elegant colors, historical accuracy.',
    title: '古韵茶道',
    category: '复古人像'
  },
  artistic: {
    id: 'artistic',
    path: 'assets/images/scene/artistic.webp',
    previewUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Fine art digital painting, fusion of Dunhuang mural style and modern abstract art, celestial flying goddess, mineral pigments, gold leaf textures, surreal composition.',
    title: '敦煌飞天',
    category: '艺术创作'
  },
  commercial: {
    id: 'commercial',
    path: 'assets/images/scene/commercial.webp',
    previewUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Commercial studio shot of a luxury jade carving pendant, white porcelain background, caustic light reflections, sharp macro detail, premium jewelry photography.',
    title: '玉器珠宝',
    category: '商业摄影'
  },
  stilllife: {
    id: 'stilllife',
    path: 'assets/images/scene/stilllife.webp',
    previewUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Still life photography of a Ru-ware celadon tea set, single plum blossom branch, weathered wood texture, Zen minimalism, high contrast natural light.',
    title: '禅意静物',
    category: '静物摄影'
  },
  space: {
    id: 'space',
    path: 'assets/images/scene/space.webp',
    previewUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Architectural photography of a modern Zen interior, circular moon gate, bamboo shadows on concrete walls, minimalist luxury, perfect perspective, 8k.',
    title: '禅意空间',
    category: '建筑摄影'
  },
  future: {
    id: 'future',
    path: 'assets/images/scene/future.webp',
    previewUrl: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec36bd6?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Cyberpunk Chongqing cityscape at night, Neo-Hanfu tech-wear on a 25-year-old Chinese pilot, glowing holographic red lanterns, jade energy circuits, anamorphic lens flares.',
    title: '赛博汉风',
    category: '科幻创意'
  },
  narrative: {
    id: 'narrative',
    path: 'assets/images/scene/narrative.webp',
    previewUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Movie still, a 25-year-old Chinese man and woman meeting under a rainy bus stop in 1990s Shanghai, warm nostalgic street lamp, cinematic longing, ARRI Alexa look.',
    title: '雨夜邂逅',
    category: '电影叙事'
  },
  emotional: {
    id: 'emotional',
    path: 'assets/images/scene/emotional.webp',
    previewUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Profound silence, a 25-year-old scholar watching rain from a pavilion, negative space, Wabi-sabi aesthetic, muted tones, deep emotional resonance.',
    title: '听雨哲思',
    category: '情感表达'
  },
  fresh: {
    id: 'fresh',
    path: 'assets/images/scene/fresh.webp',
    previewUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
    prompt: 'Lifestyle photography, 25-year-old Chinese woman with clear skin and natural hair, wearing white linen, bright airy morning light, high-key aesthetic, pure and innocent mood.',
    title: '清新少女',
    category: '生活美学'
  }
};

export const GALLERY_ASSETS: Record<string, AssetItem> = {
  p1: {
    id: 'p1',
    path: 'assets/images/gallery/p1.webp',
    previewUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
    prompt: 'Editorial portrait of a Chinese model in "Dragon Scales" haute couture, high micro-contrast, red and gold palette, fierce but elegant gaze.',
    title: '龙鳞华服',
    category: '时尚大片'
  },
  p2: {
    id: 'p2',
    path: 'assets/images/gallery/p2.webp',
    previewUrl: 'https://images.unsplash.com/photo-1524055988636-43b1daad9e29?auto=format&fit=crop&q=80&w=800',
    prompt: 'Landscape of misty yellow mountains, vertical composition, a single pine tree emerging from clouds, ink-wash spirit, 100MP detail.',
    title: '黄山云海',
    category: '水墨风光'
  },
  p3: {
    id: 'p3',
    path: 'assets/images/gallery/p3.webp',
    previewUrl: 'https://images.unsplash.com/photo-1627063411429-7188dd741db8?auto=format&fit=crop&q=80&w=800',
    prompt: 'Close up of a 25-year-old female face with traditional Peking Opera makeup elements, sharp focus on eyes, dramatic theater lighting.',
    title: '梨园戏韵',
    category: '国粹艺术'
  }
};
