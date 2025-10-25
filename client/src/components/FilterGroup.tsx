import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  selectedIds: string[];
  onToggle: (id: string) => void;
  onClearAll: () => void;
}

export default function FilterGroup({
  title,
  options,
  selectedIds,
  onToggle,
  onClearAll,
}: FilterGroupProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{title}</h3>
        {selectedIds.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            data-testid="button-clear-filters"
          >
            Clear
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id);
          return (
            <Badge
              key={option.id}
              variant={isSelected ? "default" : "outline"}
              className="cursor-pointer hover-elevate active-elevate-2"
              onClick={() => onToggle(option.id)}
              data-testid={`filter-${option.id}`}
            >
              {option.label}
              {isSelected && <X className="ml-1 h-3 w-3" />}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
