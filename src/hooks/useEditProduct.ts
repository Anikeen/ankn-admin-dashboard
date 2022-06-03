import { MutableRefObject } from "react";
import { updateElement } from "../api/api";
import { IProduct, IProductEntity } from "../types/product";

interface IUseEditProduct {
  (product: IProduct, productKey: string): (form: MutableRefObject<HTMLFormElement | undefined>,) => void;
}

export const useEditProduct: IUseEditProduct = (product, productKey) => {
  return async (form) => {
    const data = new FormData(form.current);
    const productEntity: IProductEntity = {
      id: product.id,
      title: data.get('title'),
      price: parseInt(data.get('price') as string),
      sizes: data.getAll('size'),
      status: data.get('status') ? true : false
    }
    await updateElement('products', productKey, productEntity);
  }
}