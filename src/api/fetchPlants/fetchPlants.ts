import { collection, getDocs, query, orderBy } from "firebase/firestore/lite";

import { db } from "../../config/firebase";
import { IPlant } from "../../ts/interfaces";

export default async function fetchPlants() {
  const plantsCollectionRef = collection(db, "plants");

  const data = await getDocs(query(plantsCollectionRef, orderBy('name')));

  return data.docs.map((doc) => {
    const { widthInMetres, name, ...rest } = doc.data()
    return {
      name,
      widthInMetres,
      ...rest
    } as IPlant;
  });
}
