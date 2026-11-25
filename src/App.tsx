import type { ComponentType } from "react";
import Home from "./pages/Home";
import KidsBrochurePage from "./pages/KidsBrochurePage";
import ProKidsBrochurePage from "./pages/brochures/ProKidsBrochurePage";
import SparkBrochurePage from "./pages/brochures/SparkBrochurePage";
import ProSparkBrochurePage from "./pages/brochures/ProSparkBrochurePage";
import FutureBrochurePage from "./pages/brochures/FutureBrochurePage";
import ProfessionalBrochurePage from "./pages/brochures/ProfessionalBrochurePage";
import { useTheme } from "./hooks/useTheme";

const brochurePages: Record<string, ComponentType> = {
  "/brochures/kids": KidsBrochurePage,
  "/brochures/pro-kids": ProKidsBrochurePage,
  "/brochures/spark": SparkBrochurePage,
  "/brochures/pro-spark": ProSparkBrochurePage,
  "/brochures/future": FutureBrochurePage,
  "/brochures/professional": ProfessionalBrochurePage,
};

export default function App() {
  useTheme();

  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const BrochurePage = brochurePages[pathname];
  return BrochurePage ? <BrochurePage /> : <Home />;
}
