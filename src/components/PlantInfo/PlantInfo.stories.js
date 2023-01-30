import PlantInfo from "./PlantInfo";

export default {
  title: "PlantInfo",
  component: PlantInfo,
};

const data =  {
  name: "siberian pea tree",
  widthInMetres: 4,
  heightInMetres: 6,
  nitrogenFixer: true,
  insectAttractor: true
}

export const MyPlantInfo = () => {
  return (
      <PlantInfo id="thing" plant={data} />
  );
};
