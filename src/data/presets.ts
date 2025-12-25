/**
 * 社区预设数据 - 引用assets资源，包含结构化提示词
 */

import { PRESET_IMAGES, type Asset } from './assets';
import type { StructuredPrompt } from './scenes';

export interface Preset {
  id: string;
  title: string;
  author: string;
  assetId: string;
  likes: string;
  category: string;
  prompt: string;
  structuredPrompt: StructuredPrompt;
}

// 获取预设对应的资源
export function getPresetAsset(preset: Preset): Asset | undefined {
  return PRESET_IMAGES[preset.assetId];
}

export const COMMUNITY_PRESETS: Preset[] = [
  {
    id: 'p1',
    title: '绯色·新中式',
    author: '墨羽轩',
    assetId: 'p1',
    likes: '2.4k',
    category: '时尚人像',
    prompt: 'A stunning 25-year-old Chinese female model, exquisite refined bone structure with high cheekbones, detailed hand-embroidered silk modern neo-Hanfu with gradient crimson to burgundy tones, dramatic Rembrandt side lighting with sharp shadows and soft fill, chiaroscuro effect emphasizing facial contours, Sony A7R V with FE 85mm f/1.2 GM lens, f/1.2 aperture for creamy bokeh, 1/160s shutter, ISO 100, studio environment with neutral backdrop',
    structuredPrompt: {
      subject: '25-year-old Chinese female model, refined bone structure, high cheekbones',
      environment: 'studio with neutral backdrop',
      composition: 'classic portrait, dramatic shadow play',
      camera: 'Sony A7R V, FE 85mm f/1.2 GM',
      cameraSettings: 'f/1.2, 1/160s, ISO 100',
      lighting: 'dramatic Rembrandt side lighting, chiaroscuro effect',
      color: 'gradient crimson to burgundy, warm undertones',
      style: 'high-fashion editorial',
      mood: 'powerful elegance'
    }
  },
  {
    id: 'p2',
    title: '苍山·雾语',
    author: '风之谷',
    assetId: 'p2',
    likes: '3.1k',
    category: '水墨风光',
    prompt: 'Mystical sea of clouds flowing through ancient twisted pine forests of Huangshan Yellow Mountain at dawn, ethereal morning mist with diffused cold blue ambient light transitioning to warm golden horizon, lone weathered pine silhouette emerging from cloud ocean, Fujifilm GFX 100 II medium format, GF 32-64mm f/4, f/11 aperture, 2 second long exposure for cloud motion blur, 100 megapixel panoramic landscape',
    structuredPrompt: {
      subject: 'ancient twisted pine forests of Huangshan, lone weathered pine silhouette',
      environment: 'sea of clouds, dawn light transition',
      composition: 'panoramic wide shot, layered depth',
      camera: 'Fujifilm GFX 100 II, GF 32-64mm f/4',
      cameraSettings: 'f/11, 2s long exposure',
      lighting: 'diffused cold blue transitioning to warm golden horizon',
      color: 'cool blue mist with warm golden accents',
      style: 'traditional ink-painting atmosphere with photorealism',
      mood: 'ethereal transcendence',
      quality: '100 megapixel resolution'
    }
  },
  {
    id: 'p3',
    title: '戏梦·梨园',
    author: '梨园子弟',
    assetId: 'p3',
    likes: '1.8k',
    category: '国粹艺术',
    prompt: '25-year-old Chinese woman with contemporary interpretation of Peking Opera Dan角 facial painting, refined delicate features with elongated eye makeup and stylized brow, dramatic focused spotlight from above with deep theatrical shadows, Leica SL2-S with 90mm Summicron, cinematic avant-garde styling, cultural heritage reimagined through modern fashion lens, museum-quality fine art portrait',
    structuredPrompt: {
      subject: '25-year-old Chinese woman, contemporary Peking Opera Dan角 makeup',
      composition: 'tight facial portrait, theatrical framing',
      camera: 'Leica SL2-S, 90mm Summicron',
      lighting: 'dramatic focused spotlight from above, deep theatrical shadows',
      style: 'cinematic avant-garde, cultural heritage meets contemporary',
      genre: 'fine art portrait',
      mood: 'dramatic intensity',
      quality: 'museum exhibition quality'
    }
  },
  {
    id: 'p4',
    title: '江南·烟雨',
    author: '青石巷',
    assetId: 'p4',
    likes: '4.2k',
    category: '电影叙事',
    prompt: '25-year-old elegant Chinese woman in indigo-dyed cotton dress holding traditional oil-paper umbrella, walking through ancient Suzhou water town narrow alley during spring drizzle, wet moss-covered cobblestone reflections, white-washed walls with aged patina, soft diffused overcast morning light with visible rain droplets, nostalgic Kodak film grain texture, Hasselblad X2D with 80mm f/1.9, cinematic color grading inspired by Wong Kar-wai cinematography',
    structuredPrompt: {
      subject: '25-year-old elegant Chinese woman, indigo-dyed cotton dress, oil-paper umbrella',
      environment: 'ancient Suzhou water town alley, spring drizzle, wet cobblestones',
      composition: 'environmental portrait, depth through alley perspective',
      camera: 'Hasselblad X2D, 80mm f/1.9',
      lighting: 'soft diffused overcast, visible rain droplets',
      color: 'indigo, white-washed walls, aged patina tones',
      medium: 'Kodak film grain texture',
      style: 'Wong Kar-wai inspired cinematography',
      mood: 'melancholic romance, nostalgic longing'
    }
  },
  {
    id: 'p5',
    title: '月下·琴音',
    author: '清风明月',
    assetId: 'p5',
    likes: '2.9k',
    category: '古典意境',
    prompt: '25-year-old refined Chinese woman scholar in Song Dynasty literati hemp robe, playing guqin seven-string zither in bamboo grove pavilion, full harvest moon rising behind misty layered mountains, cool blue moonlight as main illumination with warm amber candlelight accent on face and instrument, floating fireflies adding magical atmosphere, traditional Chinese ink-wash painting aesthetic with photorealistic texture and detail, Phase One IQ4 150MP',
    structuredPrompt: {
      subject: '25-year-old refined Chinese woman, Song Dynasty literati robe, playing guqin',
      environment: 'bamboo grove pavilion, full moon, misty mountains',
      composition: 'environmental portrait with landscape integration',
      camera: 'Phase One IQ4 150MP',
      lighting: 'cool blue moonlight main, warm candlelight accent',
      color: 'blue-silver moonlight, amber candlelight, ink-wash tones',
      style: 'Chinese ink-wash painting with photorealistic texture',
      mood: 'contemplative serenity, poetic solitude'
    }
  },
  {
    id: 'p6',
    title: '茶烟·晨起',
    author: '半山茶舍',
    assetId: 'p6',
    likes: '1.6k',
    category: '禅意静物',
    prompt: 'Morning gongfu tea ceremony still life arrangement, authentic Song Dynasty celadon gaiwan with natural crackle glaze, visible steam rising through diagonal golden hour sunlight rays with dust particles, ancient rosewood tea table surface, scattered aged Pu-erh tea leaves, dried lotus pod and withered branch, weathered hand-woven linen cloth texture, tilt-shift macro photography with Sigma 105mm f/2.8 Art, minimalist Zen aesthetic composition',
    structuredPrompt: {
      subject: 'Song Dynasty celadon gaiwan, scattered Pu-erh tea leaves, dried lotus pod',
      environment: 'ancient rosewood tea table, weathered linen cloth',
      composition: 'asymmetric Zen arrangement, macro with shallow focus',
      camera: 'Sigma 105mm f/2.8 Art Macro',
      cameraSettings: 'f/4, focus stacking',
      lighting: 'diagonal golden hour rays, visible dust particles in light',
      style: 'minimalist Zen aesthetic, tilt-shift',
      genre: 'still life photography',
      mood: 'peaceful morning ritual'
    }
  },
  {
    id: 'p7',
    title: '霓裳·敦煌',
    author: '飞天工坊',
    assetId: 'p7',
    likes: '5.3k',
    category: '敦煌艺术',
    prompt: '25-year-old Chinese celestial dancer inspired by Dunhuang Mogao Cave 112 Tang Dynasty Flying Apsara murals, flowing silk ribbon piao-dai in dynamic spiral motion creating S-curve, mineral pigment color palette of azurite blue and malachite green with cinnabar red accents, authentic gold leaf halo nimbus behind head, lotus pedestal base, fusion of Tang Dynasty aesthetics with contemporary high-fashion photography, dramatic rim lighting creating ethereal glow, Canon EOS R5 with RF 28-70mm f/2L',
    structuredPrompt: {
      subject: '25-year-old Chinese celestial dancer, Flying Apsara inspired, flowing silk piao-dai ribbons',
      composition: 'dynamic S-curve spiral motion, vertical floating',
      camera: 'Canon EOS R5, RF 28-70mm f/2L',
      lighting: 'dramatic rim lighting, ethereal glow, gold leaf illumination',
      color: 'azurite blue, malachite green, cinnabar red, gold accents',
      style: 'Tang Dynasty murals meets contemporary fashion',
      medium: 'mineral pigment texture simulation',
      mood: 'mystical transcendence'
    }
  },
  {
    id: 'p8',
    title: '青瓷·流光',
    author: '龙泉窑',
    assetId: 'p8',
    likes: '2.1k',
    category: '商业摄影',
    prompt: 'Premium luxury product photography of authentic Longquan celadon vase from Southern Song Dynasty lineage, distinctive plum-green mei-zi-qing glaze with natural golden silk crackle pattern, precision studio lighting with caustic reflections revealing jade-like translucency, black gradient seamless background, floating suspended water droplets catching spectral light, hyper-detailed 8K macro with focus stacking composite, Broncolor Scoro flash system, museum artifact documentation quality',
    structuredPrompt: {
      subject: 'Longquan celadon vase, mei-zi-qing glaze, golden silk crackle pattern',
      environment: 'black gradient seamless studio background',
      composition: 'centered product hero shot, floating water droplets',
      camera: 'Medium format digital, 120mm macro',
      cameraSettings: 'f/16, focus stacking, 8K resolution',
      lighting: 'Broncolor Scoro precision studio, caustic jade reflections',
      style: 'luxury brand product photography',
      genre: 'commercial photography',
      quality: 'museum artifact documentation quality'
    }
  },
  {
    id: 'p9',
    title: '侠客·行',
    author: '江湖客',
    assetId: 'p9',
    likes: '3.7k',
    category: '武侠意境',
    prompt: '25-year-old Chinese swordsman xia-ke in flowing white silk robes standing at cliff edge precipice, overlooking vast sea of clouds at sunrise golden hour, hair and fabric dramatically windswept by mountain wind, ancient longsword with jade pommel and silk tassel at side, Wudang Mountain authentic landscape backdrop, epic ultra-wide shot composition, anamorphic Panavision Ultra Vista lens flares, cinematic 2.39:1 widescreen aspect ratio, ARRI Alexa 65 large format, classic Wuxia martial arts film aesthetic',
    structuredPrompt: {
      subject: '25-year-old Chinese swordsman, white silk robes, jade-pommeled longsword',
      environment: 'cliff edge precipice, sea of clouds, Wudang Mountain',
      composition: 'epic ultra-wide shot, subject small against vast landscape',
      camera: 'ARRI Alexa 65, Panavision Ultra Vista anamorphic',
      cameraSettings: '2.39:1 widescreen, anamorphic flares',
      lighting: 'sunrise golden hour backlighting',
      style: 'classic Wuxia martial arts film',
      genre: 'cinematic landscape portrait',
      mood: 'heroic isolation, noble solitude'
    }
  },
  {
    id: 'p10',
    title: '书香·门第',
    author: '翰墨书斋',
    assetId: 'p10',
    likes: '1.9k',
    category: '建筑空间',
    prompt: 'Traditional Chinese scholar study interior shuzhai, Ming Dynasty huanghuali rosewood furniture with ice-crack lattice details, mounted scroll painting of mountains and water on silk, Four Treasures of Study wen-fang-si-bao arranged on desk with inkstone and brush rack, circular moon gate window framing exterior bamboo garden courtyard, morning light casting geometric lattice shadow patterns on floor, Phase One XF camera system with 23mm Rodenstock, perfect single-point perspective architectural composition, Feng Shui balanced arrangement',
    structuredPrompt: {
      subject: 'Ming Dynasty huanghuali furniture, scroll paintings, Four Treasures of Study',
      environment: 'traditional shuzhai scholar study, circular moon gate window',
      composition: 'single-point perspective, geometric framing',
      camera: 'Phase One XF, 23mm Rodenstock',
      lighting: 'morning light casting geometric lattice shadows',
      style: 'architectural interior photography',
      mood: 'scholarly tranquility, cultured refinement'
    }
  },
  {
    id: 'p11',
    title: '锦鲤·祥云',
    author: '鱼跃龙门',
    assetId: 'p11',
    likes: '4.8k',
    category: '国潮艺术',
    prompt: 'Majestic Chinese koi fish jin-li in auspicious red and imperial gold coloration swimming through stylized traditional cloud patterns xiang-yun, fusion of ancient Chinese auspicious symbolism with contemporary digital art techniques, intricate individual scale details with metallic gold leaf highlights, flowing water rendered as abstract silk ribbon streams, deep vermillion crimson and imperial yellow palette, museum-quality fine art print aesthetic suitable for contemporary gallery exhibition',
    structuredPrompt: {
      subject: 'Chinese koi fish jin-li, red and gold coloration, stylized cloud patterns',
      composition: 'dynamic swimming motion, flowing ribbon water',
      color: 'vermillion crimson, imperial yellow, metallic gold accents',
      medium: 'digital painting with traditional texture',
      style: 'traditional symbolism meets contemporary digital art',
      genre: 'Guochao national trend fine art',
      mood: 'auspicious prosperity, fortune',
      quality: 'museum exhibition gallery quality'
    }
  },
  {
    id: 'p12',
    title: '春·杏花',
    author: '桃源居士',
    assetId: 'p12',
    likes: '3.2k',
    category: '清新人像',
    prompt: '25-year-old innocent youthful Chinese girl with dewy translucent skin and natural untouched eyebrows standing in full-bloom apricot xing-hua orchard, genuine no-makeup natural look with slight freckles across nose, wearing simple handwoven white cotton dress, soft pink petals drifting in gentle spring breeze, bright overexposed high-key lighting with dreamy creamy bokeh background, pastel pink and cream tonal palette, Contax 645 medium format with Zeiss 80mm f/2, authentic Kodak Portra 400 film aesthetic grain texture',
    structuredPrompt: {
      subject: '25-year-old innocent Chinese girl, dewy skin, natural freckles, white cotton dress',
      environment: 'blooming apricot orchard, drifting petals',
      composition: 'lifestyle portrait, soft focus edges',
      camera: 'Contax 645, Zeiss 80mm f/2',
      lighting: 'bright overexposed high-key, dreamy bokeh',
      color: 'pastel pink and cream tones',
      medium: 'Kodak Portra 400 film aesthetic',
      mood: 'pure ethereal innocence'
    }
  },
  {
    id: 'p13',
    title: '夜·长安',
    author: '盛唐遗梦',
    assetId: 'p13',
    likes: '4.5k',
    category: '赛博国潮',
    prompt: '25-year-old Chinese woman in cyberpunk-era Tang Dynasty fusion outfit with glowing jade circuit embroidery and copper tech accessories, ancient Chang\'an capital city reimagined as futuristic neon-lit metropolis, holographic traditional Chinese calligraphy shu-fa floating in mid-air, rain-soaked streets with colorful neon signage reflections in puddles, volumetric atmospheric fog, Sony Venice 2 digital cinema camera with Cooke anamorphic lenses, Blade Runner dystopian aesthetic meets historical Silk Road romanticism',
    structuredPrompt: {
      subject: '25-year-old Chinese woman, cyberpunk Tang Dynasty fusion outfit, jade circuit embroidery',
      environment: 'futuristic neon Chang\'an metropolis, rain-soaked streets',
      composition: 'environmental portrait, deep urban layering',
      camera: 'Sony Venice 2, Cooke anamorphic',
      lighting: 'neon signage, holographic calligraphy, volumetric fog',
      color: 'cyan-magenta contrast, jade green circuits',
      style: 'Blade Runner meets Silk Road',
      mood: 'futuristic nostalgia, technological mysticism'
    }
  },
  {
    id: 'p14',
    title: '墨竹·清影',
    author: '竹林七贤',
    assetId: 'p14',
    likes: '2.6k',
    category: '情感表达',
    prompt: '25-year-old contemplative Chinese scholar in simple grey hemp robe sitting alone in bamboo forest after fresh rain, individual water droplets visible on bamboo leaves, dense misty atmosphere creating depth layers, profound solitude and philosophical contemplation mood, extensive negative space composition following rule of thirds, minimalist Zen aesthetic, muted sage green and stone grey palette, Leica M11 Monochrom black and white capable, 50mm Summilux lens, Wabi-sabi imperfection beauty philosophy',
    structuredPrompt: {
      subject: '25-year-old contemplative Chinese scholar, grey hemp robe',
      environment: 'bamboo forest after rain, water droplets on leaves, misty',
      composition: 'extensive negative space, rule of thirds',
      camera: 'Leica M11 Monochrom, 50mm Summilux',
      lighting: 'overcast diffused, misty atmosphere',
      color: 'muted sage green and stone grey',
      style: 'Wabi-sabi minimalist Zen',
      mood: 'profound solitude, philosophical contemplation'
    }
  },
  {
    id: 'p15',
    title: '凤冠·霞帔',
    author: '红妆阁',
    assetId: 'p15',
    likes: '5.8k',
    category: '古典婚嫁',
    prompt: '25-year-old breathtakingly beautiful Chinese bride in meticulously accurate Ming Dynasty phoenix crown feng-guan with authentic kingfisher feather tian-cui inlay and natural pearl drops, matching crimson ceremonial robes xia-pei with gold couched embroidery, subtle shy bashful smile with traditionally lowered modest gaze, traditional Chinese wedding chamber setting with red silk curtains and golden candlelight illumination, Hasselblad H6D-100c medium format camera, HC 100mm lens, museum artifact level of authentic historical detail',
    structuredPrompt: {
      subject: '25-year-old Chinese bride, Ming Dynasty feng-guan phoenix crown, xia-pei ceremonial robes',
      environment: 'traditional wedding chamber, red silk curtains',
      composition: 'formal bridal portrait, artifact detail emphasis',
      camera: 'Hasselblad H6D-100c, HC 100mm',
      lighting: 'warm golden candlelight, red silk reflections',
      color: 'vermillion red, gold embroidery, pearl accents',
      style: 'historical accuracy museum documentation',
      mood: 'shy bridal elegance, traditional virtue'
    }
  },
  {
    id: 'p16',
    title: '踏雪·寻梅',
    author: '寒香斋',
    assetId: 'p16',
    likes: '3.4k',
    category: '意境风光',
    prompt: 'Ancient red plum blossom tree mei-hua in full winter bloom against pristine fresh snowfall, gnarled twisted trunk showing centuries of weathered age and character, delicate pink-red petals creating strong color contrast with pure white snow, single magpie xi-que perched on snow-laden branch, traditional Chinese painting composition principles with modern photographic hyperrealism, medium format film texture and grain, Pentax 645Z with 90mm macro lens, poetic winter solitude ta-xue-xun-mei literary allusion',
    structuredPrompt: {
      subject: 'ancient red plum blossom tree, gnarled trunk, single magpie',
      environment: 'pristine fresh snowfall, winter landscape',
      composition: 'traditional Chinese painting principles, branch framing',
      camera: 'Pentax 645Z, 90mm macro',
      lighting: 'overcast soft winter light, snow reflections',
      color: 'pink-red petals against white snow, high contrast',
      medium: 'medium format film texture',
      style: 'Chinese painting composition with photorealism',
      mood: 'poetic winter solitude, literary allusion'
    }
  }
];
