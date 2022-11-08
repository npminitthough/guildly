import styled from "styled-components";

import Category from "./Category";

const categories = [
  {
    name: "small tree",
    plants: [
      {
        id: "thing",
        name: "Apple tree",
        widthInMetres: 3,
      },
      {
        id: "thing2",
        name: "Apricot tree",
        widthInMetres: 3,
      },
      {
        id: "thing3",
        name: "Cherry tree",
        widthInMetres: 3,
      },
      {
        id: "thing4",
        name: "Mulberry tree",
        widthInMetres: 3,
      },
      {
        id: "thing4",
        name: "Crab apple tree",
        widthInMetres: 3,
      },
    ],
  },
  {
    name: "shrub",
    plants: [
      {
        id: "thing5",
        name: "Redcurrant",
        widthInMetres: 1,
      },
    ],
  },
];

const PlantMenuWrapper = styled.div`
  max-width: 200px;
`;

// onCategoryClick;

export default function PlantMenu() {
  return (
    <div className="l-plant-menu">
      {categories.map((category) => {
        return <Category category={category} />;
      })}
    </div>
  );
}
