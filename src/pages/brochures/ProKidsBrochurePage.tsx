import courses from "../../data/brochures/pro-kids.json";
import BrochureCatalogue from "../../components/brochure/BrochureCatalogue";

export default function ProKidsBrochurePage() {
  return <BrochureCatalogue pathwayId="pro-kids" courses={courses} />;
}
