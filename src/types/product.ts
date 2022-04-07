export interface IProduct {
  id: string;
  price: number;
  sizes: Array<string>;
  status: boolean | string;
  title: string;
}