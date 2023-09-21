import fetchPlants from "./fetchPlants";
import { IPlant } from "../../ts/interfaces";

describe("fetchPlants", () => {
  let actualPlants: IPlant[]
  
  beforeAll(async () => {
    actualPlants = await fetchPlants();
  })

  it("successfully retrieves all plants", () => {
    const expectedTotalPlants = 81

    expect(actualPlants.length).toEqual(expectedTotalPlants);
  });

  it("retrieves data that contains 'apricot'", () => {
    const expectedData = {
      "name": "apricot",
      "id": "4",
      "widthInMetres": 3,
      "heightInMetres": 2.3,
      "rootStock": "VVA-1",
      "insectAttractor": true,
      "imageUrl": "https://gardenerspath.com/wp-content/uploads/2021/08/How-to-Grow-Apricots-FB.jpg",
      "categoryId": "rKO4wursmqj8v1UBOwG2"
    }

    const actualApricot = actualPlants.find(plant => plant.name === 'apricot')

    expect(actualApricot).not.toBeNull()
    expect(actualApricot).toMatchObject(expectedData)
  })
});