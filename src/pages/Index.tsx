import { useState } from 'react';
import { Images, Sparkles, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SceneCard } from '@/components/SceneCard';
import { PresetCard } from '@/components/PresetCard';
import { SCENES } from '@/data/scenes';
import { COMMUNITY_PRESETS } from '@/data/presets';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredScenes = SCENES.filter(
    (scene) =>
      scene.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scene.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scene.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPresets = COMMUNITY_PRESETS.filter(
    (preset) =>
      preset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      preset.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      preset.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      preset.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">提示词工坊</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              专业级中国风AI绘画提示词库，融合东方美学与现代摄影技法
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索提示词、场景或风格..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-card border-border/50"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="scenes" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
            <TabsTrigger value="scenes" className="gap-2 text-sm">
              <Images className="h-4 w-4" />
              场景素材
            </TabsTrigger>
            <TabsTrigger value="presets" className="gap-2 text-sm">
              <Sparkles className="h-4 w-4" />
              社区预设
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scenes" className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">场景素材库</h2>
              <p className="text-muted-foreground">
                精选{filteredScenes.length}个专业场景提示词
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredScenes.map((scene) => (
                <SceneCard key={scene.id} scene={scene} />
              ))}
            </div>
            {filteredScenes.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">未找到匹配的场景</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="presets" className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">社区精选预设</h2>
              <p className="text-muted-foreground">
                {filteredPresets.length}个专业级创作预设
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPresets.map((preset) => (
                <PresetCard key={preset.id} preset={preset} />
              ))}
            </div>
            {filteredPresets.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">未找到匹配的预设</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>提示词工坊 - 专业中国风AI绘画提示词</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
