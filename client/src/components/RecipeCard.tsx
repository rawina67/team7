import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";

interface RecipeCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  onClick?: () => void;
}

export default function RecipeCard({
  id,
  name,
  description,
  imageUrl,
  prepTime,
  servings,
  difficulty,
  category,
  onClick,
}: RecipeCardProps) {
  const difficultyColors = {
    Easy: "bg-primary/10 text-primary border-primary/20",
    Medium: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    Hard: "bg-destructive/10 text-destructive border-destructive/20",
  };

  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
      onClick={onClick}
      data-testid={`card-recipe-${id}`}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`${difficultyColors[difficulty]} border`}>
            {difficulty}
          </Badge>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{prepTime} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>{servings} servings</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChefHat className="h-4 w-4" />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
