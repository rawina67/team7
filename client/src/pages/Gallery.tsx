import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import HandicraftCard from "@/components/HandicraftCard";
import SearchBar from "@/components/SearchBar";
import FilterGroup from "@/components/FilterGroup";

import textileImage from '@assets/generated_images/Traditional_Afghan_embroidered_textile_051113b4.png';
import jewelryImage from '@assets/generated_images/Afghan_traditional_silver_jewelry_a33769f2.png';
import dressImage from '@assets/generated_images/Traditional_Afghan_embroidered_dress_ec070fdd.png';
import carpetImage from '@assets/generated_images/Traditional_Afghan_woven_carpet_5388bd39.png';

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  //todo: remove mock functionality
  const allHandicrafts = [
    {
      id: "textile-1",
      name: "Embroidered Textile",
      imageUrl: textileImage,
      type: "Textile",
      region: "Northern Afghanistan",
      description: "Exquisite handwoven textile featuring intricate geometric patterns and traditional embroidery techniques passed down through generations.",
    },
    {
      id: "jewelry-1",
      name: "Traditional Silver Jewelry",
      imageUrl: jewelryImage,
      type: "Jewelry",
      region: "Kabul",
      description: "Ornate silver necklace with turquoise and carnelian stones, showcasing centuries-old filigree craftsmanship.",
    },
    {
      id: "dress-1",
      name: "Traditional Dress",
      imageUrl: dressImage,
      type: "Clothing",
      region: "Herat",
      description: "Beautiful traditional Afghan dress with intricate gold embroidery on deep green fabric, worn during special celebrations.",
    },
    {
      id: "carpet-1",
      name: "Handwoven Carpet",
      imageUrl: carpetImage,
      type: "Textile",
      region: "Mazar-i-Sharif",
      description: "Traditional Afghan carpet with geometric medallion patterns in rich burgundy and cream tones, hand-knotted using ancient techniques.",
    },
    {
      id: "textile-2",
      name: "Silk Embroidered Shawl",
      imageUrl: textileImage,
      type: "Textile",
      region: "Kandahar",
      description: "Luxurious silk shawl adorned with delicate floral embroidery in traditional colors.",
    },
    {
      id: "jewelry-2",
      name: "Tribal Necklace Set",
      imageUrl: jewelryImage,
      type: "Jewelry",
      region: "Jalalabad",
      description: "Traditional tribal jewelry featuring intricate metalwork and semi-precious stones.",
    },
  ];

  const typeOptions = [
    { id: "textile", label: "Textile" },
    { id: "jewelry", label: "Jewelry" },
    { id: "clothing", label: "Clothing" },
    { id: "pottery", label: "Pottery" },
  ];

  const filteredHandicrafts = allHandicrafts.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedTypes.length === 0 ||
      selectedTypes.some(type => item.type.toLowerCase().includes(type));

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            title="Traditional Handicrafts Gallery"
            subtitle="Explore the rich artistic heritage of Afghanistan through textiles, jewelry, and traditional crafts"
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
              placeholder="Search handicrafts..."
            />

            <FilterGroup
              title="Type"
              options={typeOptions}
              selectedIds={selectedTypes}
              onToggle={(id) =>
                setSelectedTypes((prev) =>
                  prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
                )
              }
              onClearAll={() => setSelectedTypes([])}
            />
          </aside>

          <div className="flex-1">
            {filteredHandicrafts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHandicrafts.map((item) => (
                  <HandicraftCard
                    key={item.id}
                    {...item}
                    onClick={() => console.log(`Navigate to ${item.name}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No handicrafts found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
