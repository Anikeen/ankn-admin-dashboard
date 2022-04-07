import { MutableRefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { pushProduct } from '../../../api/product';
import { Breadcrumbs } from '../../../components/Layout/Admin/ContentHeader/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';

export const ProductAdd = () => {
  const links = [{
    url: '/products',
    name: 'Товары'
  }];
  const reloadPage = useNavigate();

  const createProduct = async (form: MutableRefObject<HTMLFormElement | undefined>) => {
    try {
      const data = new FormData(form.current);
      await pushProduct(data);
      reloadPage(0);

    } catch (error) {
      alert(error)
    }
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
