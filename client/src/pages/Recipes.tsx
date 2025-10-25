import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import FilterGroup from "@/components/FilterGroup";

import kabuliPulaoImage from '@assets/generated_images/Kabuli_Pulao_rice_dish_9b257ba6.png';
import mantuImage from '@assets/generated_images/Mantu_Afghan_dumplings_a5712d5c.png';
import bolaniImage from '@assets/generated_images/Bolani_stuffed_flatbread_0f92cdc6.png';

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  //todo: remove mock functionality
  const allRecipes = [
    {
      id: "kabuli-pulao",
      name: "Kabuli Pulao",
      description: "Afghanistan's national dish featuring aromatic basmati rice topped with tender lamb, sweet carrots, and raisins, garnished with crispy fried almonds.",
      imageUrl: kabuliPulaoImage,
      prepTime: 90,
      servings: 6,
      difficulty: "Medium" as const,
      category: "Main Course",
    },
    {
      id: "mantu",
      name: "Mantu",
      description: "Steamed dumplings filled with spiced ground meat, topped with creamy yogurt sauce, split peas, and dried mint for an authentic Afghan flavor.",
      imageUrl: mantuImage,
      prepTime: 75,
      servings: 4,
      difficulty: "Hard" as const,
      category: "Main Course",
    },
    {
      id: "bolani",
      name: "Bolani",
      description: "Crispy flatbread stuffed with spiced potatoes and herbs, pan-fried until golden brown and served with yogurt chutney.",
      imageUrl: bolaniImage,
      prepTime: 45,
      servings: 6,
      difficulty: "Easy" as const,
      category: "Appetizer",
    },
    {
      id: "qabili-pulao",
      name: "Qabili Pulao",
      description: "Traditional celebratory rice dish with tender lamb or chicken, sweetened with caramelized carrots and raisins, a staple at Afghan weddings.",
      imageUrl: kabuliPulaoImage,
      prepTime: 85,
      servings: 8,
      difficulty: "Medium" as const,
      category: "Main Course",
    },
    {
      id: "ashak",
      name: "Ashak",
      description: "Delicate leek-filled dumplings served with meat sauce and yogurt, topped with dried mint and a hint of garlic for complex flavors.",
      imageUrl: mantuImage,
      prepTime: 60,
      servings: 4,
      difficulty: "Hard" as const,
      category: "Main Course",
    },
    {
      id: "sambosa",
      name: "Sambosa",
      description: "Triangular pastries filled with spiced potatoes or meat, deep-fried until crispy and golden, perfect as an appetizer or snack.",
      imageUrl: bolaniImage,
      prepTime: 40,
      servings: 8,
      difficulty: "Easy" as const,
      category: "Appetizer",
    },
  ];

  const categoryOptions = [
    { id: "main", label: "Main Course" },
    { id: "appetizer", label: "Appetizer" },
    { id: "dessert", label: "Dessert" },
    { id: "bread", label: "Bread" },
  ];

  const difficultyOptions = [
    { id: "easy", label: "Easy" },
    { id: "medium", label: "Medium" },
    { id: "hard", label: "Hard" },
  ];

  const filteredRecipes = allRecipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 ||
      selectedCategories.some(cat => recipe.category.toLowerCase().includes(cat));
    
    const matchesDifficulty = selectedDifficulties.length === 0 ||
      selectedDifficulties.some(diff => recipe.difficulty.toLowerCase() === diff);

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            title="Traditional Afghan Recipes"
            subtitle="Explore authentic Afghan cuisine with detailed recipes and cooking videos for each dish"
            centered
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 space-y-8">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search recipes..."
            />

            <FilterGroup
              title="Category"
              options={categoryOptions}
              selectedIds={selectedCategories}
              onToggle={(id) =>
                setSelectedCategories((prev) =>
                  prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
                )
              }
              onClearAll={() => setSelectedCategories([])}
            />

            <FilterGroup
              title="Difficulty"
              options={difficultyOptions}
              selectedIds={selectedDifficulties}
              onToggle={(id) =>
                setSelectedDifficulties((prev) =>
                  prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
                )
              }
              onClearAll={() => setSelectedDifficulties([])}
            />
          </aside>

          <div className="flex-1">
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    {...recipe}
                    onClick={() => console.log(`Navigate to ${recipe.name}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No recipes found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
