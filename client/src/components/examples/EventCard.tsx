import EventCard from '../EventCard';
import nowruzImage from '@assets/generated_images/Nowruz_Haft-sin_table_celebration_63c459c8.png';

export default function EventCardExample() {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 45);

  return (
    <div className="p-8 max-w-sm">
      <EventCard
        id="nowruz"
        name="Nowruz"
        date={futureDate}
        description="Persian New Year celebration marking the arrival of spring, featuring the traditional Haft-sin table with seven symbolic items."
        imageUrl={nowruzImage}
        category="Cultural Festival"
        onClick={() => console.log("Nowruz card clicked")}
      />
    </div>
  );
}
