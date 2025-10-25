import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface EventCardProps {
  id: string;
  name: string;
  date: Date;
  description: string;
  imageUrl: string;
  category: string;
  onClick?: () => void;
}

export default function EventCard({
  id,
  name,
  date,
  description,
  imageUrl,
  category,
  onClick,
}: EventCardProps) {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = date.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (days > 0) {
          setTimeRemaining(`${days} days`);
        } else if (hours > 0) {
          setTimeRemaining(`${hours} hours`);
        } else {
          setTimeRemaining("Soon");
        }
      } else {
        setTimeRemaining("Passed");
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
      onClick={onClick}
      data-testid={`card-event-${id}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
          {timeRemaining && timeRemaining !== "Passed" && (
            <div className="flex items-center gap-1 text-xs text-primary font-medium">
              <Clock className="h-3 w-3" />
              <span>{timeRemaining}</span>
            </div>
          )}
        </div>
        
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
          <Calendar className="h-4 w-4" />
          <span>{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>
    </Card>
  );
}
