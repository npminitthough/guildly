import fetchCategories from "./fetchCategories";
import { ICategory } from "../../ts/interfaces";

describe("fetchCategories", () => {
  let actualCategories: ICategory[]
  
  beforeAll(async () => {
    actualCategories = await fetchCategories();
  })

  it("successfully retrieves all categories", async () => {
    const expectedTotalCategories = 10

    expect(actualCategories.length).toEqual(expectedTotalCategories);
  });

  it("retrieves categories in alphabetical order", async () => {
    const firstCategory = 'bulbs';
    const lastCategory = 'small trees'

    expect(actualCategories[0].name).toEqual(firstCategory);
    expect(actualCategories[actualCategories.length-1].name).toEqual(lastCategory);
  });
});
