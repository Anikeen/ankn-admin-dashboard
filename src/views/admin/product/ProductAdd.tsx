import { MutableRefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { pushData } from '../../../api/api';
import { Breadcrumbs } from '../../../components/Layout/Admin/ContentHeader/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';
import { IProducEntity } from '../../../types/product';

export const ProductAdd = () => {
  const links = [{
    url: '/products',
    name: 'Товары'
  }];
  const reloadPage = useNavigate();

  const createProduct = async (form: MutableRefObject<HTMLFormElement | undefined>) => {
    const data = new FormData(form.current);
    const product: IProducEntity = {
      id: (new Date().valueOf()).toString().slice(6),
      title: data.get('title'),
      price: parseInt(data.get('price') as string),
      sizes: data.getAll('size'),
      status: data.get('status') ? true : false
    }
    await pushData<IProducEntity>('products', product);
    // reloadPage('/products/add');
  }

  return (
    <>
      <ContentHeader title="Добавить товар">
        <Breadcrumbs links={links} current="Добавить" />
      </ContentHeader>

      <section>
        <ProductControlForm callSubmitAction={createProduct} btnText="добавить" />
      </section>
    </>
  )
}
