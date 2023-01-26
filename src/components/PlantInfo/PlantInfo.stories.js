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
  imageUrl: "https://www.coopersofstortford.co.uk/images/products/medium/XYG81i.jpg"
}

const dataWithName =  {
  name: "siberian pea tree",
  widthInMetres: 4,
  heightInMetres: 6,
  nitrogenFixer: true,
  insectAttractor: true,
  nutrientAccumulator: true,
  imageUrl: "https://www.coopersofstortford.co.uk/images/products/medium/XYG81i.jpg"
}

const dataWithNameOneTag =  {
  name: "siberian pea tree",
  widthInMetres: 4,
  heightInMetres: 6,
  nitrogenFixer: true,
  rootStock: 'quince C',
  imageUrl: "https://www.coopersofstortford.co.uk/images/products/medium/XYG81i.jpg"
}

export const MyPlantInfo = () => {
  return (
      <PlantInfo id="thing" plant={data} />
  );
};

export const MyPlantInfoWithName = () => {
  return (
      <PlantInfo id="thing" displayName={true} plant={dataWithName} />
  );
};

export const MyPlantInfoWithNameOneTag = () => {
  return (
      <PlantInfo id="thing" displayName={true} plant={dataWithNameOneTag} />
  );
};