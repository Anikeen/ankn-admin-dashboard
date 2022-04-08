import { MutableRefObject, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { destroyElement, fetchSingleElement, updateElement } from '../../../api/api';
import { Breadcrumbs } from '../../../components/Layout/Admin/ContentHeader/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';
import { ProductButtonBar } from '../../../components/Product/styled';
import { Button } from '../../../components/UI/Button/styled';
import { IProducEntity, IProduct } from '../../../types/product';

export const ProductEdit = () => {
  const links = [{
    url: '/products',
    name: 'Товары'
  }];
  let { id } = useParams();
  const ID = id ? id : '';
  const [product, setProduct] = useState({} as IProduct);
  const [productKey, setProductKey] = useState('');
  const reloadPage = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await fetchSingleElement('/products', 'id', ID);
        const [key, value] = Object.entries(product)[0];

        setProduct(value as IProduct);
        setProductKey(key);
      } catch (error) {
        alert(error);
      }
    }
    getProduct();
  }, []);

  const editProduct = async (form: MutableRefObject<HTMLFormElement | undefined>) => {
    try {
      const data = new FormData(form.current);
      const productEntity: IProducEntity = {
        id: product.id,
        title: data.get('title'),
        price: parseInt(data.get('price') as string),
        sizes: data.getAll('size'),
        status: data.get('status') ? true : false
      }
      await updateElement('products', productKey, productEntity);
      reloadPage(0);

    } catch (error) {
      alert(error)
    }
  }

  const deleteProduct = async () => {
    try {
      const result = window.confirm('Вы действительно хотите удалить товар?')

      if (result) {
        await destroyElement('products', productKey);
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
