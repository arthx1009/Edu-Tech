import BrochureCatalogue from "../components/brochure/BrochureCatalogue";
import courses from "../data/brochures/kids.json";

export default function KidsBrochurePage() {
  return <BrochureCatalogue pathwayId="kids" courses={courses} />;
}
