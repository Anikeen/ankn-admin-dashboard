import { MutableRefObject, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { destroyElement, fetchSingleElement, updateElement } from '../../../api/api';
import { Breadcrumbs } from '../../../components/Layout/Admin/ContentHeader/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';
import { ProductButtonBar } from '../../../components/Product/styled';
import { Button } from '../../../components/UI/Button/styled';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const reloadPage = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await fetchSingleElement('/products', 'id', ID);
        const [key, value] = Object.entries(product)[0];

        setProduct(value as IProduct);
        setProductKey(key);
        setIsLoading(false);
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
    getProduct();
  }, []);

  const editProduct = async (form: MutableRefObject<HTMLFormElement | undefined>) => {
    const data = new FormData(form.current);
    const productEntity: IProducEntity = {
      id: product.id,
      title: data.get('title'),
      price: parseInt(data.get('price') as string),
      sizes: data.getAll('size'),
      status: data.get('status') ? true : false
    }
    await updateElement('products', productKey, productEntity);
    reloadPage(`/products/edit/${product.id}`);
  }

  const deleteProduct = async () => {
    try {
      setIsPending(true);
      const result = window.confirm('Вы действительно хотите удалить товар?')

      if (result) {
        await destroyElement('products', productKey);
        reloadPage('/products')
      }

    } catch (error) {
      setIsPending(false);
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
            {isPending && <Spinner background='#fff' opacity={0.8} ellipseColor='#4272d7' />}
          </Button>
        </ProductButtonBar>

        <ProductControlForm product={product} callSubmitAction={editProduct} btnText="сохранить" />
        {isLoading && <Spinner background='#fff' opacity={1} ellipseColor='#4272d7' />}
      </section>
    </>
  )
}
