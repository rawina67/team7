import FilterGroup from '../FilterGroup';
import { useState } from 'react';

export default function FilterGroupExample() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { id: "main-course", label: "Main Course" },
    { id: "appetizer", label: "Appetizer" },
    { id: "dessert", label: "Dessert" },
    { id: "bread", label: "Bread" },
    { id: "drinks", label: "Drinks" },
  ];

  const handleToggle = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-8">
      <FilterGroup
        title="Recipe Categories"
        options={categories}
        selectedIds={selectedCategories}
        onToggle={handleToggle}
        onClearAll={() => setSelectedCategories([])}
      />
    </div>
  );
}
