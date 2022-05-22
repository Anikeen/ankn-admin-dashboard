export interface IProduct {
  id: string;
  price: number;
  sizes: Array<string>;
  status: boolean | string;
  title: string;
}

export interface IProductEntity {
  id: string;
  title: FormDataEntryValue | null;
  price: number;
  sizes: FormDataEntryValue[] | null;
  status: boolean;
}