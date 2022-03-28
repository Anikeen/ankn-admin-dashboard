import { getDatabase, ref, get, query } from "firebase/database";

export const fetchProducts = async () => {
  try {
    const db = getDatabase();
    const dbRef = ref(db, '/products');
    const productsSnapshot = await get(query(dbRef));
    const products = productsSnapshot.val();

    return products;
  } catch (error) {
    alert(error);
  }

}