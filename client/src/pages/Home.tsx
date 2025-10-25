import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import RecipeCard from "@/components/RecipeCard";
import HandicraftCard from "@/components/HandicraftCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

import nowruzImage from '@assets/generated_images/Nowruz_Haft-sin_table_celebration_63c459c8.png';
import eidImage from '@assets/generated_images/Eid_celebration_at_mosque_8a0abbfc.png';
import independenceImage from '@assets/generated_images/Afghan_Independence_Day_celebration_5debda26.png';
import kabuliPulaoImage from '@assets/generated_images/Kabuli_Pulao_rice_dish_9b257ba6.png';
import mantuImage from '@assets/generated_images/Mantu_Afghan_dumplings_a5712d5c.png';
import bolaniImage from '@assets/generated_images/Bolani_stuffed_flatbread_0f92cdc6.png';
import textileImage from '@assets/generated_images/Traditional_Afghan_embroidered_textile_051113b4.png';
import jewelryImage from '@assets/generated_images/Afghan_traditional_silver_jewelry_a33769f2.png';
import dressImage from '@assets/generated_images/Traditional_Afghan_embroidered_dress_ec070fdd.png';
import carpetImage from '@assets/generated_images/Traditional_Afghan_woven_carpet_5388bd39.png';

export default function Home() {
  const [, setLocation] = useLocation();

  //todo: remove mock functionality
  const upcomingEvents = [
    {
      id: "nowruz",
      name: "Nowruz",
      date: new Date(2026, 2, 20),
      description: "Persian New Year celebration marking the arrival of spring, featuring the traditional Haft-sin table with seven symbolic items.",
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
      id: "independence",
      name: "Independence Day",
      date: new Date(2025, 7, 19),
      description: "Commemorating Afghanistan's independence with national celebrations, parades, and cultural performances.",
      imageUrl: independenceImage,
      category: "National Holiday",
    },
  ];

  const featuredRecipes = [
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
  ];

  const featuredHandicrafts = [
    {
      id: "textile",
      name: "Embroidered Textile",
      imageUrl: textileImage,
      type: "Textile",
      region: "Northern Afghanistan",
      description: "Exquisite handwoven textile featuring intricate geometric patterns and traditional embroidery techniques.",
    },
    {
      id: "jewelry",
      name: "Traditional Silver Jewelry",
      imageUrl: jewelryImage,
      type: "Jewelry",
      region: "Kabul",
      description: "Ornate silver necklace with turquoise and carnelian stones, showcasing centuries-old craftsmanship.",
    },
    {
      id: "dress",
      name: "Traditional Dress",
      imageUrl: dressImage,
      type: "Clothing",
      region: "Herat",
      description: "Beautiful traditional Afghan dress with intricate gold embroidery on deep green fabric.",
    },
    {
      id: "carpet",
      name: "Handwoven Carpet",
      imageUrl: carpetImage,
      type: "Textile",
      region: "Mazar-i-Sharif",
      description: "Traditional Afghan carpet with geometric medallion patterns in rich burgundy and cream tones.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        backgroundImage={nowruzImage}
        title="Discover Afghan Cultural Heritage"
        subtitle="Explore centuries of tradition through festivals, authentic recipes, and exquisite handicrafts"
        primaryCta={{
          text: "Explore Festivals",
          onClick: () => setLocation("/festivals"),
        }}
        secondaryCta={{
          text: "Browse Recipes",
          onClick: () => setLocation("/recipes"),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16">
          <div className="flex items-center justify-between mb-12">
            <SectionHeader
              title="Upcoming Festivals"
              subtitle="Experience the rich tapestry of Afghan celebrations"
            />
            <Button
              variant="ghost"
              onClick={() => setLocation("/festivals")}
              data-testid="button-view-all-festivals"
              className="hidden md:flex items-center gap-2"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onClick={() => console.log(`Navigate to ${event.name}`)}
              />
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="flex items-center justify-between mb-12">
            <SectionHeader
              title="Traditional Recipes"
              subtitle="Authentic Afghan dishes with step-by-step instructions"
            />
            <Button
              variant="ghost"
              onClick={() => setLocation("/recipes")}
              data-testid="button-view-all-recipes"
              className="hidden md:flex items-center gap-2"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
                onClick={() => console.log(`Navigate to ${recipe.name}`)}
              />
            ))}
          </div>
        </section>

        <section className="py-16 pb-20">
          <div className="flex items-center justify-between mb-12">
            <SectionHeader
              title="Traditional Handicrafts"
              subtitle="Discover the artistry of Afghan textiles, jewelry, and embroidery"
            />
            <Button
              variant="ghost"
              onClick={() => setLocation("/gallery")}
              data-testid="button-view-all-handicrafts"
              className="hidden md:flex items-center gap-2"
            >
              View Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHandicrafts.map((item) => (
              <HandicraftCard
                key={item.id}
                {...item}
                onClick={() => console.log(`Navigate to ${item.name}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
