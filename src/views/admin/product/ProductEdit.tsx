import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { destroyElement, fetchSingleElement } from '../../../api/api';
import { Breadcrumbs } from '../../../components/Layout/Admin/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';
import { ButtonBar } from '../../../components/Product/ButtonBar';
import { Button } from '../../../components/UI/Button/Button';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
import { IProduct } from '../../../types/product';
import { SectionWrapper } from '../../../styles/common';
import { useEditProduct } from '../../../hooks/useEditProduct';
import { useDeleteProduct } from '../../../hooks/useDeleteProduct';

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


  const updateProduct = useEditProduct(product, productKey);
  const deleteProduct = useDeleteProduct(productKey, setIsPending);

  return (
    <>
      <ContentHeader title="Редактировать товар">
        <Breadcrumbs links={links} current="Редактировать" />
      </ContentHeader>

      <section>
        <ButtonBar>
          <Button
            width='auto'
            color='#fff'
            background='#ff0d0d'
            hoverBackground='#b80909'
            onClick={deleteProduct}
          >
            удалить
            {isPending && <Spinner background='#fff' opacity={0.8} color='#4272d7' />}
          </Button>
        </ButtonBar>

        <SectionWrapper>
          <ProductControlForm product={product} callSubmitAction={updateProduct} btnText="сохранить" />
          {isLoading && <Spinner background='#fff' opacity={1} color='#4272d7' />}
        </SectionWrapper>
      </section>
    </>
  )
}
