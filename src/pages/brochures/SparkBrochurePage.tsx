import courses from "../../data/brochures/spark.json";
import BrochureCatalogue from "../../components/brochure/BrochureCatalogue";

export default function SparkBrochurePage() {
  return <BrochureCatalogue pathwayId="spark" courses={courses} />;
}
