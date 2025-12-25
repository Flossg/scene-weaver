/**
 * 场景数据 - 引用assets资源，包含结构化提示词
 */

import { SCENE_IMAGES, type Asset } from './assets';

export interface StructuredPrompt {
  subject?: string;
  environment?: string;
  composition?: string;
  camera?: string;
  cameraSettings?: string;
  lighting?: string;
  color?: string;
  medium?: string;
  style?: string;
  genre?: string;
  mood?: string;
  quality?: string;
}

export interface Scene {
  id: string;
  title: string;
  category: string;
  assetId: string;
  prompt: string;
  structuredPrompt: StructuredPrompt;
}

// 获取场景对应的资源
export function getSceneAsset(scene: Scene): Asset | undefined {
  return SCENE_IMAGES[scene.assetId];
}

export const SCENES: Scene[] = [
  {
    id: 'scene-portrait',
    title: '时尚肖像',
    category: '人像摄影',
    assetId: 'portrait',
    prompt: 'Professional high-end fashion photography of a 25-year-old Chinese woman, refined Eastern bone structure, porcelain luminous skin, wearing minimalist modern silk qipao with subtle embroidery, cinematic Rembrandt lighting with soft fill, medium format film texture, 8k resolution, Hasselblad X2D 100C quality',
    structuredPrompt: {
      subject: '25-year-old Chinese woman, refined Eastern bone structure, porcelain luminous skin',
      environment: 'minimalist studio with neutral backdrop',
      composition: 'classic portrait framing, rule of thirds',
      camera: 'Hasselblad X2D 100C',
      cameraSettings: '80mm f/2.8, ISO 100',
      lighting: 'cinematic Rembrandt lighting with soft fill',
      style: 'high-end fashion photography',
      medium: 'medium format digital',
      mood: 'elegant confidence',
      quality: '8k resolution'
    }
  },
  {
    id: 'scene-nature',
    title: '山水意境',
    category: '风光摄影',
    assetId: 'nature',
    prompt: 'Grand landscape of Zhangjiajie sandstone pillar mountains emerging from morning mist, traditional Chinese ink-painting atmosphere rendered photorealistically, Tyndall light beams piercing through fog, epic spatial scale with layered mountain silhouettes, 100 megapixel medium format quality',
    structuredPrompt: {
      subject: 'Zhangjiajie sandstone pillar mountains',
      environment: 'morning mist, layered mountain silhouettes',
      composition: 'epic wide shot, vertical layers creating depth',
      camera: 'Fujifilm GFX 100 II',
      cameraSettings: 'GF 32-64mm f/4, f/11, 1/125s',
      lighting: 'golden hour, Tyndall light beams piercing through fog',
      color: 'muted blue-grey with warm golden accents',
      style: 'Chinese ink-painting atmosphere with photorealistic rendering',
      genre: 'landscape photography',
      mood: 'majestic tranquility',
      quality: '100 megapixel resolution'
    }
  },
  {
    id: 'scene-miniature',
    title: '微缩世界',
    category: '微距摄影',
    assetId: 'miniature',
    prompt: 'Macro photography of handcrafted 1:50 scale Suzhou classical garden model, exquisite wood carving pavilion, miniature koi pond with realistic water caustic reflections, tilt-shift selective focus aesthetic, hyper-detailed craftsmanship visible',
    structuredPrompt: {
      subject: 'handcrafted 1:50 scale Suzhou classical garden model',
      environment: 'miniature koi pond, wood carving pavilion',
      composition: 'tilt-shift selective focus, shallow depth of field',
      camera: 'Canon MP-E 65mm f/2.8 1-5x Macro',
      cameraSettings: 'f/8, focus stacking, studio strobe',
      lighting: 'controlled studio lighting, water caustic reflections',
      style: 'hyper-detailed macro photography',
      medium: 'focus-stacked composite',
      mood: 'whimsical wonder'
    }
  },
  {
    id: 'scene-vintage',
    title: '古韵茶道',
    category: '复古人像',
    assetId: 'vintage',
    prompt: 'Cinematic portrait of a 25-year-old refined woman in Ming Dynasty scholarly Hanfu, performing traditional gongfu tea ceremony, soft morning window light streaming through rice paper screens, Jiangnan literati study interior, muted elegant earth tones, historical accuracy meets contemporary aesthetics',
    structuredPrompt: {
      subject: '25-year-old refined woman in Ming Dynasty scholarly Hanfu',
      environment: 'Jiangnan literati study, rice paper screen windows',
      composition: 'environmental portrait, subject integrated with setting',
      camera: 'Leica SL2',
      cameraSettings: '50mm Summilux, f/1.4, natural light',
      lighting: 'soft morning window light, directional',
      color: 'muted elegant earth tones, desaturated warmth',
      style: 'cinematic portrait with historical accuracy',
      genre: 'cultural portrait',
      mood: 'contemplative serenity'
    }
  },
  {
    id: 'scene-artistic',
    title: '敦煌飞天',
    category: '艺术创作',
    assetId: 'artistic',
    prompt: 'Fine art digital painting fusing Dunhuang Cave 112 Flying Apsara mural style with contemporary abstract expressionism, celestial dancer in dynamic flowing movement, mineral pigment texture of azurite blue and malachite green, gold leaf accents, surreal floating composition',
    structuredPrompt: {
      subject: 'celestial Flying Apsara dancer in dynamic flowing movement',
      composition: 'surreal floating composition, dynamic diagonal flow',
      color: 'mineral pigment palette: azurite blue, malachite green, gold leaf',
      medium: 'digital painting with traditional texture simulation',
      style: 'Dunhuang mural fusion with contemporary abstract expressionism',
      genre: 'fine art digital painting',
      mood: 'ethereal transcendence',
      quality: 'museum exhibition quality'
    }
  },
  {
    id: 'scene-commercial',
    title: '玉器珠宝',
    category: '商业摄影',
    assetId: 'commercial',
    prompt: 'Premium commercial studio photography of imperial Hetian white jade carving pendant, pure white porcelain background, precision caustic light highlighting translucency and nephrite texture, extreme macro detail revealing natural fiber structure, luxury jewelry brand aesthetic',
    structuredPrompt: {
      subject: 'imperial Hetian white jade carving pendant',
      environment: 'pure white porcelain background, controlled studio',
      composition: 'centered product hero shot',
      camera: 'Phase One IQ4 150MP',
      cameraSettings: '120mm macro, f/16, focus stacking',
      lighting: 'precision caustic lighting highlighting translucency',
      style: 'luxury jewelry brand aesthetic',
      genre: 'premium commercial photography',
      quality: '8K resolution, extreme macro detail'
    }
  },
  {
    id: 'scene-stilllife',
    title: '禅意静物',
    category: '静物摄影',
    assetId: 'stilllife',
    prompt: 'Zen minimalist still life of authentic Song Dynasty Ru-ware celadon tea set, single plum blossom branch in shadow, weathered reclaimed wood surface texture, high contrast natural window light creating deep shadows, Wabi-sabi imperfection beauty aesthetic',
    structuredPrompt: {
      subject: 'Song Dynasty Ru-ware celadon tea set, single plum blossom branch',
      environment: 'weathered reclaimed wood surface',
      composition: 'asymmetric Zen minimalism, negative space emphasis',
      lighting: 'high contrast natural window light, deep shadows',
      color: 'celadon green, weathered brown, muted palette',
      style: 'Wabi-sabi imperfection beauty',
      genre: 'fine art still life',
      mood: 'meditative stillness'
    }
  },
  {
    id: 'scene-space',
    title: '禅意空间',
    category: '建筑摄影',
    assetId: 'space',
    prompt: 'Architectural photography of contemporary Zen interior design, circular moon gate window framing bamboo courtyard, cast concrete walls with bamboo shadow patterns, minimalist luxury materiality, perfect one-point perspective, natural light study',
    structuredPrompt: {
      subject: 'contemporary Zen interior with circular moon gate window',
      environment: 'bamboo courtyard visible through moon gate, cast concrete walls',
      composition: 'perfect one-point perspective, geometric framing',
      camera: 'Phase One XF, 23mm Rodenstock',
      cameraSettings: 'f/11, tripod, natural light',
      lighting: 'natural light with bamboo shadow patterns',
      style: 'minimalist luxury architectural',
      genre: 'architectural interior photography',
      mood: 'serene contemplation',
      quality: '8K resolution'
    }
  },
  {
    id: 'scene-future',
    title: '赛博汉风',
    category: '科幻创意',
    assetId: 'future',
    prompt: 'Cyberpunk reimagining of Chongqing layered cityscape at night, 25-year-old Chinese pilot in Neo-Tang tech-wear jacket, holographic red lanterns and jade energy circuit patterns, anamorphic lens flares, rain-soaked reflective streets, Silk Road meets Blade Runner aesthetic',
    structuredPrompt: {
      subject: '25-year-old Chinese pilot in Neo-Tang tech-wear jacket',
      environment: 'Cyberpunk Chongqing layered cityscape, rain-soaked streets',
      composition: 'environmental portrait, deep urban layering',
      camera: 'RED V-Raptor, anamorphic lenses',
      cameraSettings: '1.33x squeeze, 2.39:1 aspect ratio',
      lighting: 'neon lights, holographic lanterns, jade energy circuits',
      color: 'cyan-magenta contrast, jade green accents',
      style: 'Silk Road meets Blade Runner',
      genre: 'cyberpunk portraiture',
      mood: 'futuristic nostalgia'
    }
  },
  {
    id: 'scene-narrative',
    title: '雨夜邂逅',
    category: '电影叙事',
    assetId: 'narrative',
    prompt: 'Cinematic movie still of a 25-year-old Chinese man and woman meeting eyes under a rainy bus stop shelter in 1990s Shanghai, warm sodium street lamp glow, nostalgic urban romance atmosphere, ARRI Alexa film grain texture, Wong Kar-wai In the Mood for Love aesthetic',
    structuredPrompt: {
      subject: '25-year-old Chinese man and woman, chance meeting',
      environment: '1990s Shanghai rainy bus stop shelter',
      composition: 'two-shot with urban depth, wet reflections',
      camera: 'ARRI Alexa Mini LF',
      cameraSettings: 'Zeiss Supreme Prime 50mm, T1.5',
      lighting: 'warm sodium street lamp, rain backlit',
      color: 'nostalgic warm tones, slight desaturation',
      style: 'Wong Kar-wai romantic cinematography',
      genre: 'narrative cinema still',
      mood: 'melancholic longing',
      quality: 'film grain texture'
    }
  },
  {
    id: 'scene-emotional',
    title: '听雨哲思',
    category: '情感表达',
    assetId: 'emotional',
    prompt: 'Contemplative portrait of a 25-year-old Chinese scholar in simple grey hemp robe, watching rain from traditional wooden pavilion, extensive negative space composition, Wabi-sabi aesthetic, muted sage grey tones, profound philosophical solitude, Leica M11 Monochrom quality',
    structuredPrompt: {
      subject: '25-year-old Chinese scholar in grey hemp robe',
      environment: 'traditional wooden pavilion overlooking rain',
      composition: 'extensive negative space, subject small in frame',
      camera: 'Leica M11 Monochrom',
      cameraSettings: '50mm Summilux, f/2, available light',
      lighting: 'overcast diffused, rain atmosphere',
      color: 'muted sage grey monochromatic tones',
      style: 'Wabi-sabi minimalist',
      genre: 'contemplative portrait',
      mood: 'profound philosophical solitude'
    }
  },
  {
    id: 'scene-fresh',
    title: '清新少女',
    category: '生活美学',
    assetId: 'fresh',
    prompt: 'Lifestyle photography of a 25-year-old fresh-faced Chinese woman with clear dewy skin and natural hair, wearing simple white linen dress, bright airy morning backlight, high-key overexposed aesthetic, pastel cream tones, Contax 645 Kodak Portra 400 film look, pure innocent radiance',
    structuredPrompt: {
      subject: '25-year-old fresh-faced Chinese woman, clear dewy skin, natural hair',
      environment: 'bright airy interior or outdoor garden',
      composition: 'lifestyle candid feel, soft focus edges',
      camera: 'Contax 645',
      cameraSettings: 'Zeiss 80mm f/2, natural backlight',
      lighting: 'bright morning backlight, high-key overexposed',
      color: 'pastel cream tones, soft pastels',
      medium: 'Kodak Portra 400 film aesthetic',
      style: 'lifestyle photography',
      mood: 'pure innocent radiance'
    }
  }
];
