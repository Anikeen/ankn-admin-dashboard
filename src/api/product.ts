import { getDatabase, ref, get, query, push, child, update, equalTo, orderByChild, set, remove } from "firebase/database";
import { IProduct } from "../types/product";

export const fetchProducts = async () => {
  try {
    const db = getDatabase();
    const dbRef = ref(db, '/products');
    const productsSnapshot = await get(query(dbRef));
    const productsData = productsSnapshot.val();
    const products: Array<IProduct> = Object.keys(productsData).map(key => {
      return {
        id: productsData[key].id,
        title: productsData[key].title,
        price: productsData[key].price,
        sizes: productsData[key].sizes,
        status: productsData[key].status ? 'On' : 'Off',
      }
    });

    return products;
  } catch (error) {
    alert(error);
    return [];
  }
}

export const fetchSingleProduct = async (id = '') => {
  try {
    const db = getDatabase();
    const qr = query(ref(db, 'products'), orderByChild('id'), equalTo(id))
    const product = (await get(qr)).val()

    return product;
  } catch (error) {
    alert(error);
    return {} as IProduct;
  }
}

export const pushProduct = async (data: FormData) => {
  const product = {
    id: (new Date().valueOf()).toString().slice(6),
    title: data.get('title'),
    price: parseInt(data.get('price') as string),
    sizes: data.getAll('size'),
    status: data.get('status') ? true : false
  }
  const db = getDatabase();
  const newProductKey = push(child(ref(db), 'products')).key;
  await update(ref(db, `/products/${newProductKey}`), product);
}

export const updateProduct = async (key: string, id: string, data: FormData) => {
  const product = {
    id: id,
    title: data.get('title'),
    price: parseInt(data.get('price') as string),
    sizes: data.getAll('size'),
    status: data.get('status') ? true : false
  }

  const db = getDatabase();
  await set(ref(db, `products/${key}`), product)
}

export const destroyProduct = async (key: string) => {
  const db = getDatabase();
  if (key) {
    await remove(ref(db, `products/${key}`))
  }
}