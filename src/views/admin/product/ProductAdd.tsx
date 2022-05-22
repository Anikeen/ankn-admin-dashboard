import { MutableRefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { pushData } from '../../../api/api';
import { Breadcrumbs } from '../../../components/Layout/Admin/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';
import { SectionWrapper } from '../../../styles/common';
import { IProductEntity } from '../../../types/product';

export const ProductAdd = () => {
  const links = [{
    url: '/products',
    name: 'Товары'
  }];
  const reloadPage = useNavigate();

  const createProduct = async (form: MutableRefObject<HTMLFormElement | undefined>) => {
    const data = new FormData(form.current);
    const product: IProductEntity = {
      id: (new Date().valueOf()).toString().slice(6),
      title: data.get('title'),
      price: parseInt(data.get('price') as string),
      sizes: data.getAll('size'),
      status: data.get('status') ? true : false
    }
    await pushData<IProductEntity>('products', product);
    // reloadPage('/products/add');
  }

  return (
    <>
      <ContentHeader title="Добавить товар">
        <Breadcrumbs links={links} current="Добавить" />
      </ContentHeader>

      <section>
        <SectionWrapper>
          <ProductControlForm callSubmitAction={createProduct} btnText="добавить" />
        </SectionWrapper>
      </section>
    </>
  )
}
