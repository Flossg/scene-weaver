import { useState } from 'react';
import { Copy, Check, Heart, Camera, Sun, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import type { Preset } from '@/data/presets';

interface PresetCardProps {
  preset: Preset;
}

export function PresetCard({ preset }: PresetCardProps) {
  const [copied, setCopied] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(preset.prompt);
    setCopied(true);
    toast.success('提示词已复制到剪贴板');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Card
        className="group overflow-hidden border-border/50 bg-card card-hover cursor-pointer"
        onClick={() => setShowDetail(true)}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={preset.url}
            alt={preset.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-2 py-1">
            <Heart className="h-3 w-3 text-primary fill-primary" />
            <span className="text-xs font-medium">{preset.likes}</span>
          </div>
          <div className="image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-foreground">{preset.title}</h3>
              <Badge variant="secondary" className="text-xs shrink-0">
                {preset.category}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">by {preset.author}</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-3">
              {preset.title}
              <Badge variant="outline">{preset.category}</Badge>
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={preset.url}
                alt={preset.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1.5">
                <Heart className="h-4 w-4 text-primary fill-primary" />
                <span className="text-sm font-medium">{preset.likes}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>创作者:</span>
                <span className="font-medium text-foreground">{preset.author}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                  <Palette className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">主体</p>
                    <p className="text-sm">{preset.data.subject}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                  <Sun className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">光线</p>
                    <p className="text-sm">{preset.data.lighting}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                  <Camera className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">相机</p>
                    <p className="text-sm">{preset.data.camera}</p>
                    {preset.data.cameraSettings && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {preset.data.cameraSettings}
                      </p>
                    )}
                  </div>
                </div>

                {preset.data.style && (
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground mb-1">风格</p>
                    <p className="text-sm">{preset.data.style}</p>
                  </div>
                )}

                {preset.data.mood && (
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground mb-1">情绪</p>
                    <p className="text-sm">{preset.data.mood}</p>
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground mb-2">完整提示词</p>
                <p className="text-sm leading-relaxed">{preset.prompt}</p>
              </div>

              <Button onClick={handleCopy} className="w-full">
                {copied ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                复制提示词
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
