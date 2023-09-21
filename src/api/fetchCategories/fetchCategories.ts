import { collection, getDocs, query, orderBy } from "firebase/firestore/lite";

import { db } from "../../config/firebase";
import { ICategory } from "../../ts/interfaces";

export default async function fetchCategories() {
  const categoriesCollectionRef = collection(db, "categories");

  const data = await getDocs(query(categoriesCollectionRef, orderBy('name')));

  return data.docs.map((doc) => {
    return {
      name: doc.data().name,
      id: doc.id,
    } as ICategory;
  });
}
