import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import SearchBar from "@/components/SearchBar";
import FilterGroup from "@/components/FilterGroup";

import nowruzImage from '@assets/generated_images/Nowruz_Haft-sin_table_celebration_63c459c8.png';
import eidImage from '@assets/generated_images/Eid_celebration_at_mosque_8a0abbfc.png';
import independenceImage from '@assets/generated_images/Afghan_Independence_Day_celebration_5debda26.png';

export default function Festivals() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  //todo: remove mock functionality
  const allEvents = [
    {
      id: "nowruz",
      name: "Nowruz",
      date: new Date(2026, 2, 20),
      description: "Persian New Year celebration marking the arrival of spring, featuring the traditional Haft-sin table with seven symbolic items representing life and renewal.",
      imageUrl: nowruzImage,
      category: "Cultural Festival",
    },
    {
      id: "eid-fitr",
      name: "Eid al-Fitr",
      date: new Date(2025, 10, 15),
      description: "Festival of Breaking the Fast, marking the end of Ramadan with prayers, feasts, and celebrations with family and community.",
      imageUrl: eidImage,
      category: "Religious Holiday",
    },
    {
      id: "eid-adha",
      name: "Eid al-Adha",
      date: new Date(2026, 5, 21),
      description: "Festival of Sacrifice commemorating Prophet Ibrahim's willingness to sacrifice his son, celebrated with prayers and the distribution of meat to the needy.",
      imageUrl: eidImage,
      category: "Religious Holiday",
    },
    {
      id: "independence",
      name: "Independence Day",
      date: new Date(2025, 7, 19),
      description: "Commemorating Afghanistan's independence from British influence in 1919 with national celebrations, parades, and cultural performances.",
      imageUrl: independenceImage,
      category: "National Holiday",
    },
  ];

  const categories = [
    { id: "cultural", label: "Cultural Festival" },
    { id: "religious", label: "Religious Holiday" },
    { id: "national", label: "National Holiday" },
  ];

  const handleCategoryToggle = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 ||
      selectedCategories.some(cat => event.category.toLowerCase().includes(cat));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            title="Cultural Festivals & Celebrations"
            subtitle="Discover the vibrant traditions and celebrations that mark Afghanistan's cultural calendar throughout the year"
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
              placeholder="Search festivals..."
            />

            <FilterGroup
              title="Categories"
              options={categories}
              selectedIds={selectedCategories}
              onToggle={handleCategoryToggle}
              onClearAll={() => setSelectedCategories([])}
            />
          </aside>

          <div className="flex-1">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                    onClick={() => console.log(`Navigate to ${event.name}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No festivals found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
