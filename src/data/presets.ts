/**
 * 社区预设 - 专业级中国风提示词集合
 * 风格准则：
 * 1. 25岁左右精致东方形象
 * 2. 专业摄影级别提示词
 * 3. 中国元素与现代审美融合
 */

export interface PresetData {
  subject: string;
  lighting: string;
  camera: string;
  cameraSettings?: string;
  style?: string;
  mood?: string;
}

export interface Preset {
  id: string;
  title: string;
  author: string;
  sceneId: string;
  url: string;
  likes: string;
  data: PresetData;
  prompt: string;
  category: string;
}

export const COMMUNITY_PRESETS: Preset[] = [
  {
    id: 'p1',
    title: '绯色·新中式',
    author: '墨羽轩',
    sceneId: 'portrait',
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
    likes: '2.4k',
    category: '时尚人像',
    prompt: 'A stunning 25-year-old Chinese female model, exquisite high-bone structure, detailed silk embroidery, modern neo-Hanfu, high-contrast dramatic side lighting, sharp shadows, chiaroscuro effect, Sony A7R V, FE 85mm f/1.2 GM, f/1.2, 1/160s, ISO 100',
    data: {
      subject: 'A stunning 25-year-old Chinese female model, exquisite high-bone structure, detailed silk embroidery, modern neo-Hanfu',
      lighting: 'high-contrast dramatic side lighting, sharp shadows, chiaroscuro effect',
      camera: 'Sony A7R V, FE 85mm f/1.2 GM',
      cameraSettings: 'f/1.2, 1/160s, ISO 100'
    }
  },
  {
    id: 'p2',
    title: '苍山·雾语',
    author: '风之谷',
    sceneId: 'nature',
    url: 'https://images.unsplash.com/photo-1524055988636-43b1daad9e29?auto=format&fit=crop&q=80&w=800',
    likes: '3.1k',
    category: '水墨风光',
    prompt: 'Mystical sea of clouds flowing through ancient pine forests of Huangshan, ethereal morning mist, diffused cold blue light, Fujifilm GFX 100 II, f/11, long exposure 2s, panoramic landscape photography, 100 megapixel resolution',
    data: {
      subject: 'mystical sea of clouds flowing through ancient pine forests of Huangshan',
      lighting: 'ethereal morning mist, diffused cold blue light',
      camera: 'Fujifilm GFX 100 II',
      cameraSettings: 'f/11, long exposure 2s'
    }
  },
  {
    id: 'p3',
    title: '戏梦·梨园',
    author: '梨园子弟',
    sceneId: 'portrait',
    url: 'https://images.unsplash.com/photo-1627063411429-7188dd741db8?auto=format&fit=crop&q=80&w=800',
    likes: '1.8k',
    category: '国粹艺术',
    prompt: '25-year-old Chinese woman with modern Peking Opera facial painting, refined features, dramatic spotlight, deep shadows, Leica SL2, Cinematic Avant-garde style, theatrical atmosphere, cultural heritage meets contemporary art',
    data: {
      subject: '25-year-old Chinese woman with modern Peking Opera facial painting, refined features',
      lighting: 'dramatic spotlight, deep shadows',
      camera: 'Leica SL2',
      style: 'Cinematic Avant-garde'
    }
  },
  {
    id: 'p4',
    title: '江南·烟雨',
    author: '青石巷',
    sceneId: 'narrative',
    url: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&q=80&w=800',
    likes: '4.2k',
    category: '电影叙事',
    prompt: '25-year-old elegant Chinese woman holding an oil-paper umbrella, walking through ancient Suzhou water town alley, spring drizzle, wet cobblestone reflections, white-washed walls with moss, morning fog, soft diffused overcast light, nostalgic film grain, Hasselblad X2D, 80mm f/1.9, cinematic color grading, Wong Kar-wai atmosphere',
    data: {
      subject: '25-year-old elegant Chinese woman holding an oil-paper umbrella, walking through ancient Suzhou water town alley, spring drizzle, wet cobblestone reflections, white-washed walls with moss',
      lighting: 'morning fog, soft diffused overcast light, nostalgic film grain',
      camera: 'Hasselblad X2D, 80mm f/1.9',
      style: 'Wong Kar-wai atmosphere',
      mood: 'melancholic romance'
    }
  },
  {
    id: 'p5',
    title: '月下·琴音',
    author: '清风明月',
    sceneId: 'artistic',
    url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
    likes: '2.9k',
    category: '古典意境',
    prompt: '25-year-old refined Chinese woman in Song Dynasty literati robe, playing guqin in a bamboo grove pavilion, full moon rising behind misty mountains, cool blue moonlight with warm candlelight accent, floating fireflies, ink-wash painting aesthetic with photorealistic texture, Phase One IQ4 150MP, contemplative serenity',
    data: {
      subject: '25-year-old refined Chinese woman in Song Dynasty literati robe, playing guqin in a bamboo grove pavilion, full moon rising behind misty mountains',
      lighting: 'cool blue moonlight with warm candlelight accent, floating fireflies',
      camera: 'Phase One IQ4 150MP',
      style: 'ink-wash painting aesthetic with photorealistic texture',
      mood: 'contemplative serenity'
    }
  },
  {
    id: 'p6',
    title: '茶烟·晨起',
    author: '半山茶舍',
    sceneId: 'stilllife',
    url: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800',
    likes: '1.6k',
    category: '禅意静物',
    prompt: 'Morning tea ceremony setup, Song Dynasty celadon gaiwan, steam rising in golden hour sunlight rays, ancient rosewood tea table, scattered tea leaves, dried lotus pod, weathered linen cloth, minimalist Zen aesthetic, tilt-shift macro photography, Sigma 105mm f/2.8 Macro, natural window light with dust particles',
    data: {
      subject: 'Song Dynasty celadon gaiwan, steam rising, ancient rosewood tea table, scattered tea leaves, dried lotus pod, weathered linen cloth',
      lighting: 'golden hour sunlight rays, natural window light with dust particles',
      camera: 'Sigma 105mm f/2.8 Macro',
      style: 'minimalist Zen aesthetic, tilt-shift',
      mood: 'peaceful morning ritual'
    }
  },
  {
    id: 'p7',
    title: '霓裳·敦煌',
    author: '飞天工坊',
    sceneId: 'artistic',
    url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800',
    likes: '5.3k',
    category: '敦煌艺术',
    prompt: '25-year-old Chinese celestial dancer inspired by Dunhuang Cave 112 Flying Apsara murals, flowing silk ribbons in dynamic spiral motion, mineral pigment color palette of azurite blue and malachite green, gold leaf halo, lotus pedestal, fusion of Tang Dynasty aesthetics with modern fashion photography, dramatic rim lighting, mystical atmosphere',
    data: {
      subject: '25-year-old Chinese celestial dancer inspired by Dunhuang Cave 112 Flying Apsara murals, flowing silk ribbons in dynamic spiral motion',
      lighting: 'dramatic rim lighting, gold leaf halo illumination',
      camera: 'Canon EOS R5, RF 28-70mm f/2L',
      style: 'mineral pigment palette, Tang Dynasty aesthetics with modern fashion',
      mood: 'mystical transcendence'
    }
  },
  {
    id: 'p8',
    title: '青瓷·流光',
    author: '龙泉窑',
    sceneId: 'commercial',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    likes: '2.1k',
    category: '商业摄影',
    prompt: 'Premium product photography of Longquan celadon vase, Song Dynasty plum-green glaze with natural crackle pattern, studio lighting with caustic reflections, black gradient background, floating water droplets catching light, hyper-detailed 8K macro, focus stacking composite, luxury brand aesthetic, Broncolor lighting setup',
    data: {
      subject: 'Longquan celadon vase, Song Dynasty plum-green glaze with natural crackle pattern, floating water droplets',
      lighting: 'studio lighting with caustic reflections, Broncolor setup',
      camera: 'Medium format digital, 120mm macro',
      cameraSettings: 'f/16, focus stacking, 8K resolution',
      style: 'luxury brand aesthetic'
    }
  },
  {
    id: 'p9',
    title: '侠客·行',
    author: '江湖客',
    sceneId: 'narrative',
    url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    likes: '3.7k',
    category: '武侠意境',
    prompt: '25-year-old Chinese swordsman in flowing white robes standing on cliff edge, overlooking vast sea of clouds at sunrise, hair and fabric dramatically windswept, ancient longsword with jade hilt, Wudang Mountain landscape, epic wide shot, anamorphic lens flares, cinematic 2.39:1 aspect ratio, Wuxia film aesthetic, heroic isolation',
    data: {
      subject: '25-year-old Chinese swordsman in flowing white robes standing on cliff edge, overlooking vast sea of clouds at sunrise, ancient longsword with jade hilt',
      lighting: 'sunrise backlighting, anamorphic lens flares',
      camera: 'ARRI Alexa 65, Panavision Ultra Vista',
      style: 'Wuxia film aesthetic, epic wide shot',
      mood: 'heroic isolation'
    }
  },
  {
    id: 'p10',
    title: '书香·门第',
    author: '翰墨书斋',
    sceneId: 'space',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    likes: '1.9k',
    category: '建筑空间',
    prompt: 'Traditional Chinese scholar study interior, Ming Dynasty huanghuali wood furniture, scroll paintings on wall, Four Treasures of Study on desk, circular moon window framing bamboo garden, morning light casting geometric shadows, architectural photography with perfect one-point perspective, Phase One XF, 23mm Rodenstock, Feng Shui balanced composition',
    data: {
      subject: 'Ming Dynasty huanghuali wood furniture, scroll paintings, Four Treasures of Study, circular moon window framing bamboo garden',
      lighting: 'morning light casting geometric shadows',
      camera: 'Phase One XF, 23mm Rodenstock',
      style: 'architectural photography, one-point perspective',
      mood: 'scholarly tranquility'
    }
  },
  {
    id: 'p11',
    title: '锦鲤·祥云',
    author: '鱼跃龙门',
    sceneId: 'artistic',
    url: 'https://images.unsplash.com/photo-1584433305355-9cb73387ee61?auto=format&fit=crop&q=80&w=800',
    likes: '4.8k',
    category: '国潮艺术',
    prompt: 'Majestic red and gold koi fish swimming through stylized cloud patterns, fusion of traditional Chinese auspicious symbolism with contemporary digital art, intricate scale details with metallic gold highlights, flowing water rendered as abstract silk ribbons, deep crimson and imperial yellow palette, museum-quality fine art print aesthetic',
    data: {
      subject: 'Majestic red and gold koi fish swimming through stylized cloud patterns, intricate scale details with metallic gold highlights',
      lighting: 'ambient diffused, metallic reflections',
      camera: 'Digital painting, 8K resolution',
      style: 'traditional symbolism meets contemporary digital art',
      mood: 'auspicious prosperity'
    }
  },
  {
    id: 'p12',
    title: '春·杏花',
    author: '桃源居士',
    sceneId: 'fresh',
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800',
    likes: '3.2k',
    category: '清新人像',
    prompt: '25-year-old innocent Chinese girl standing in blooming apricot orchard, natural no-makeup look, freckles, wearing simple white cotton dress, petals falling in gentle breeze, soft overexposed high-key lighting, dreamy bokeh background, pastel pink and cream tones, Contax 645, Zeiss 80mm f/2, Kodak Portra 400 film aesthetic, pure and ethereal',
    data: {
      subject: '25-year-old innocent Chinese girl in blooming apricot orchard, natural no-makeup look, freckles, white cotton dress, falling petals',
      lighting: 'soft overexposed high-key lighting, dreamy bokeh',
      camera: 'Contax 645, Zeiss 80mm f/2',
      style: 'Kodak Portra 400 film aesthetic',
      mood: 'pure and ethereal innocence'
    }
  },
  {
    id: 'p13',
    title: '夜·长安',
    author: '盛唐遗梦',
    sceneId: 'future',
    url: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec36bd6?auto=format&fit=crop&q=80&w=800',
    likes: '4.5k',
    category: '赛博国潮',
    prompt: '25-year-old Chinese woman in cyberpunk Tang Dynasty fusion outfit, neon-lit ancient Chang\'an city reimagined as futuristic metropolis, holographic traditional Chinese calligraphy floating in air, jade and copper tech accessories, rain-soaked streets reflecting colorful signage, volumetric fog, Blade Runner meets Silk Road aesthetic',
    data: {
      subject: '25-year-old Chinese woman in cyberpunk Tang Dynasty fusion outfit, holographic Chinese calligraphy, jade tech accessories',
      lighting: 'neon lights, rain reflections, volumetric fog',
      camera: 'Sony Venice 2, anamorphic lenses',
      style: 'Blade Runner meets Silk Road aesthetic',
      mood: 'futuristic nostalgia'
    }
  },
  {
    id: 'p14',
    title: '墨竹·清影',
    author: '竹林七贤',
    sceneId: 'emotional',
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    likes: '2.6k',
    category: '情感表达',
    prompt: '25-year-old contemplative Chinese scholar in simple grey hemp robe, sitting alone in bamboo forest after rain, water droplets on bamboo leaves, misty atmosphere, profound solitude, extensive negative space, minimalist Zen composition, muted sage green and grey palette, Leica M11 Monochrom, 50mm Summilux, Wabi-sabi imperfection beauty',
    data: {
      subject: '25-year-old contemplative Chinese scholar in grey hemp robe, sitting alone in bamboo forest after rain',
      lighting: 'overcast diffused light, misty atmosphere',
      camera: 'Leica M11 Monochrom, 50mm Summilux',
      style: 'Wabi-sabi, minimalist Zen composition',
      mood: 'profound solitude and contemplation'
    }
  },
  {
    id: 'p15',
    title: '凤冠·霞帔',
    author: '红妆阁',
    sceneId: 'vintage',
    url: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=800',
    likes: '5.8k',
    category: '古典婚嫁',
    prompt: '25-year-old breathtaking Chinese bride in authentic Ming Dynasty phoenix crown (凤冠) and red ceremonial robes (霞帔), intricate gold filigree with kingfisher feathers and pearl drops, subtle shy smile with lowered gaze, traditional Chinese wedding chamber setting, red silk curtains, gold candlelight, Hasselblad H6D-100c, museum artifact level detail',
    data: {
      subject: '25-year-old Chinese bride in Ming Dynasty phoenix crown and red ceremonial robes, gold filigree with kingfisher feathers and pearl drops',
      lighting: 'warm gold candlelight, red silk reflections',
      camera: 'Hasselblad H6D-100c, HC 100mm',
      style: 'museum artifact level detail, traditional wedding',
      mood: 'shy bridal elegance'
    }
  },
  {
    id: 'p16',
    title: '踏雪·寻梅',
    author: '寒香斋',
    sceneId: 'nature',
    url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=800',
    likes: '3.4k',
    category: '意境风光',
    prompt: 'Ancient red plum blossom tree in full bloom against fresh snowfall, gnarled twisted trunk showing centuries of age, delicate pink petals contrasting with pristine white snow, single magpie perched on branch, traditional Chinese painting composition with modern photographic realism, medium format film texture, poetic winter solitude',
    data: {
      subject: 'Ancient red plum blossom tree in full bloom, gnarled trunk, pink petals against white snow, single magpie on branch',
      lighting: 'overcast soft winter light, snow reflections',
      camera: 'Pentax 645Z, 90mm macro',
      style: 'Chinese painting composition with photo realism',
      mood: 'poetic winter solitude'
    }
  }
];
