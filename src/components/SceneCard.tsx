import { useState } from 'react';
import { Copy, Check, Eye, Camera, Sun, Palette, Image, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { getSceneAsset, type Scene } from '@/data/scenes';

interface SceneCardProps {
  scene: Scene;
}

export function SceneCard({ scene }: SceneCardProps) {
  const [copied, setCopied] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const asset = getSceneAsset(scene);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(scene.prompt);
    setCopied(true);
    toast.success('提示词已复制到剪贴板');
    setTimeout(() => setCopied(false), 2000);
  };

  const sp = scene.structuredPrompt;
  const hasFields = sp && Object.values(sp).some(v => v);

  return (
    <>
      <Card className="group overflow-hidden border-border/50 bg-card card-hover cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={asset?.previewUrl}
            alt={scene.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="flex-1 backdrop-blur-sm bg-background/80"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetail(true);
                }}
              >
                <Eye className="h-4 w-4 mr-1" />
                查看
              </Button>
              <Button
                size="sm"
                variant="default"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
              >
                {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                复制
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-medium text-foreground">{scene.title}</h3>
              <Badge variant="secondary" className="mt-1 text-xs">
                {scene.category}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-3">
              {scene.title}
              <Badge variant="outline">{scene.category}</Badge>
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh]">
            <div className="grid gap-6 lg:grid-cols-2 pr-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={asset?.previewUrl}
                  alt={scene.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                {hasFields && (
                  <div className="space-y-3">
                    {sp.subject && (
                      <PromptField icon={Palette} label="主体" value={sp.subject} />
                    )}
                    {sp.environment && (
                      <PromptField icon={Image} label="环境" value={sp.environment} />
                    )}
                    {sp.lighting && (
                      <PromptField icon={Sun} label="光线" value={sp.lighting} />
                    )}
                    {sp.camera && (
                      <PromptField icon={Camera} label="相机" value={sp.camera} extra={sp.cameraSettings} />
                    )}
                    {sp.style && (
                      <PromptField icon={Sparkles} label="风格" value={sp.style} />
                    )}
                    {(sp.composition || sp.color || sp.medium || sp.genre || sp.mood || sp.quality) && (
                      <div className="grid grid-cols-2 gap-2">
                        {sp.composition && <MiniField label="构图" value={sp.composition} />}
                        {sp.color && <MiniField label="色彩" value={sp.color} />}
                        {sp.medium && <MiniField label="介质" value={sp.medium} />}
                        {sp.genre && <MiniField label="类型" value={sp.genre} />}
                        {sp.mood && <MiniField label="情绪" value={sp.mood} />}
                        {sp.quality && <MiniField label="质量" value={sp.quality} />}
                      </div>
                    )}
                  </div>
                )}

                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs text-muted-foreground mb-2">完整提示词</p>
                  <p className="text-sm leading-relaxed">{scene.prompt}</p>
                </div>

                <Button onClick={handleCopy} className="w-full">
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  复制提示词
                </Button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}

function PromptField({ icon: Icon, label, value, extra }: { icon: React.ElementType; label: string; value: string; extra?: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
      <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        <p className="text-sm">{value}</p>
        {extra && <p className="text-xs text-muted-foreground mt-1">{extra}</p>}
      </div>
    </div>
  );
}

function MiniField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted/30 p-2">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-xs mt-0.5 line-clamp-2">{value}</p>
    </div>
  );
}
