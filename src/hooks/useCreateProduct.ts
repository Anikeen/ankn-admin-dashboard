import { MutableRefObject } from 'react';
import { pushData } from '../api/api';
import { IProductEntity } from '../types/product';

export const useCreateProduct = () => {
  return async (form: MutableRefObject<HTMLFormElement | undefined>) => {
    const data = new FormData(form.current);
    const product: IProductEntity = {
      id: (new Date().valueOf()).toString().slice(6),
      title: data.get('title'),
      price: parseInt(data.get('price') as string),
      sizes: data.getAll('size'),
      status: data.get('status') ? true : false
    }
    await pushData<IProductEntity>('products', product);
  }
}