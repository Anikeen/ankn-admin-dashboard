import { getDatabase, ref, get, query, push, child, update, equalTo, orderByChild, set, remove } from "firebase/database";

export const fetchAll = async (table: string) => {
  const db = getDatabase();
  const dbRef = ref(db, table);
  const dataSnapshot = await get(query(dbRef));
  const data = dataSnapshot.val();

  return data;
}

interface IFetchSingle {
  (table: string, property: string, value: string | number | boolean): Promise<any>
}

export const fetchSingleElement: IFetchSingle = async (table, property, value) => {
  const db = getDatabase();
  const qr = query(ref(db, table), orderByChild(property), equalTo(value))
  const data = (await get(qr)).val()

  return data;
}

export const pushData = async <T extends object>(table: string, data: T) => {
  const db = getDatabase();
  const newKey = push(child(ref(db), table)).key;
  await update(ref(db, `/${table}/${newKey}`), data);
}

export const updateElement = async <T extends object>(table: string, key: string, data: T) => {
  const db = getDatabase();
  await set(ref(db, `${table}/${key}`), data);
}

export const destroyElement = async (table: string, key: string) => {
  const db = getDatabase();
  if (key) {
    await remove(ref(db, `${table}/${key}`));
  }
}