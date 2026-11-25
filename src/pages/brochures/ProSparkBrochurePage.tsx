import courses from "../../data/brochures/pro-spark.json";
import BrochureCatalogue from "../../components/brochure/BrochureCatalogue";

export default function ProSparkBrochurePage() {
  return <BrochureCatalogue pathwayId="pro-spark" courses={courses} />;
}
