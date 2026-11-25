import courses from "../../data/brochures/future.json";
import BrochureCatalogue from "../../components/brochure/BrochureCatalogue";

export default function FutureBrochurePage() {
  return <BrochureCatalogue pathwayId="future" courses={courses} />;
}
