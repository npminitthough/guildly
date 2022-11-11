import DesignPage from "./DesignPage";
import PlantCatalogueProvider from "../../store/plant-catalogue-context";
import DesignContextProvider, {
  DesignContext,
} from "../../store/design-context";

export default {
  title: "Design Page",
  component: DesignPage,
};

export function MyDesignPage() {
  return (
    <PlantCatalogueProvider>
      <DesignContextProvider>
        <DesignPage />
      </DesignContextProvider>
    </PlantCatalogueProvider>
  );
}
