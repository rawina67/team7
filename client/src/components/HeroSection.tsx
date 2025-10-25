import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryCta: { text: string; onClick: () => void };
  secondaryCta: { text: string; onClick: () => void };
}

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl mb-6 max-w-5xl">
          {title}
        </h1>
        <p className="text-lg text-white/90 md:text-xl lg:text-2xl mb-12 max-w-3xl">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            variant="default"
            onClick={primaryCta.onClick}
            data-testid="button-primary-cta"
            className="text-base px-8"
          >
            {primaryCta.text}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={secondaryCta.onClick}
            data-testid="button-secondary-cta"
            className="text-base px-8 bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
          >
            {secondaryCta.text}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </div>
  );
}
