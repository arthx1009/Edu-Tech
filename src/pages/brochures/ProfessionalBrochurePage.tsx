import courses from "../../data/brochures/professional.json";
import BrochureCatalogue from "../../components/brochure/BrochureCatalogue";

export default function ProfessionalBrochurePage() {
  return <BrochureCatalogue pathwayId="professional" courses={courses} />;
}
