import { MutableRefObject, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { destroyProduct, fetchSingleProduct, updateProduct } from '../../../api/product';
import { Breadcrumbs } from '../../../components/Layout/Admin/ContentHeader/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';
import { ProductButtonBar } from '../../../components/Product/styled';
import { Button } from '../../../components/UI/Button/styled';
import { IProduct } from '../../../types/product';

export const ProductEdit = () => {
  const links = [{
    url: '/products',
    name: 'Товары'
  }];
  const { id } = useParams();
  const [product, setProduct] = useState({} as IProduct);
  const [productKey, setProductKey] = useState('');
  const reloadPage = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchSingleProduct(id);
      const [key, value] = Object.entries(product)[0];

      setProduct(value as IProduct);
      setProductKey(key);
    }
    getProduct();
  }, []);

  const editProduct = async (form: MutableRefObject<HTMLFormElement | undefined>) => {
    try {
      const data = new FormData(form.current);
      await updateProduct(productKey, product.id, data);
      reloadPage(0);

    } catch (error) {
      alert(error)
    }
  }

  const deleteProduct = async () => {
    try {
      const result = window.confirm('Вы действительно хотите удалить товар?')

      if (result) {
        await destroyProduct(productKey);
        reloadPage('/products')
      }

    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <ContentHeader title="Редактировать товар">
        <Breadcrumbs links={links} current="Редактировать" />
      </ContentHeader>

      <section>
        <ProductButtonBar>
          <Button
            width='auto'
            color='#fff'
            background='#ff0d0d'
            hoverBackground='#b80909'
            onClick={deleteProduct}
          >
            удалить
          </Button>
        </ProductButtonBar>

        <ProductControlForm product={product} callSubmitAction={editProduct} btnText="сохранить" />
      </section>
    </>
  )
}
