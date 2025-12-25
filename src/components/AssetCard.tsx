import { useState } from 'react';
import { Copy, Check, Eye } from 'lucide-react';
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
import type { AssetItem } from '@/data/assets';

interface AssetCardProps {
  asset: AssetItem;
}

export function AssetCard({ asset }: AssetCardProps) {
  const [copied, setCopied] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(asset.prompt);
    setCopied(true);
    toast.success('提示词已复制到剪贴板');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Card className="group overflow-hidden border-border/50 bg-card card-hover cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={asset.previewUrl}
            alt={asset.title}
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
                {copied ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                复制
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-medium text-foreground">{asset.title}</h3>
              <Badge variant="secondary" className="mt-1 text-xs">
                {asset.category}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{asset.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img
                src={asset.previewUrl}
                alt={asset.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <Badge variant="outline">{asset.category}</Badge>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {asset.prompt}
                </p>
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
