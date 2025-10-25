import RecipeCard from '../RecipeCard';
import kabuliPulaoImage from '@assets/generated_images/Kabuli_Pulao_rice_dish_9b257ba6.png';

export default function RecipeCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <RecipeCard
        id="kabuli-pulao"
        name="Kabuli Pulao"
        description="Afghanistan's national dish featuring aromatic basmati rice topped with tender lamb, sweet carrots, and raisins, garnished with crispy fried almonds."
        imageUrl={kabuliPulaoImage}
        prepTime={90}
        servings={6}
        difficulty="Medium"
        category="Main Course"
        onClick={() => console.log("Kabuli Pulao clicked")}
      />
    </div>
  );
}
