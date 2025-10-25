import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HandicraftCardProps {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  region: string;
  description: string;
  onClick?: () => void;
}

export default function HandicraftCard({
  id,
  name,
  imageUrl,
  type,
  region,
  description,
  onClick,
}: HandicraftCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
      onClick={onClick}
      data-testid={`card-handicraft-${id}`}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
            {type}
          </Badge>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {region}
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Card>
  );
}
