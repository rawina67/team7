import HeroSection from '../HeroSection';
import nowruzImage from '@assets/generated_images/Nowruz_Haft-sin_table_celebration_63c459c8.png';

export default function HeroSectionExample() {
  return (
    <HeroSection
      backgroundImage={nowruzImage}
      title="Discover Afghan Cultural Heritage"
      subtitle="Explore centuries of tradition through festivals, authentic recipes, and exquisite handicrafts"
      primaryCta={{
        text: "Explore Festivals",
        onClick: () => console.log("Explore Festivals clicked")
      }}
      secondaryCta={{
        text: "Browse Recipes",
        onClick: () => console.log("Browse Recipes clicked")
      }}
    />
  );
}
