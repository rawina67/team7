import HandicraftCard from '../HandicraftCard';
import textileImage from '@assets/generated_images/Traditional_Afghan_embroidered_textile_051113b4.png';

export default function HandicraftCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <HandicraftCard
        id="embroidered-textile"
        name="Traditional Embroidered Textile"
        imageUrl={textileImage}
        type="Textile"
        region="Northern Afghanistan"
        description="Exquisite handwoven textile featuring intricate geometric patterns and traditional Afghan embroidery techniques passed down through generations."
        onClick={() => console.log("Textile clicked")}
      />
    </div>
  );
}
