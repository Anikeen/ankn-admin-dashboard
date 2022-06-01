import { Breadcrumbs } from '../../../components/Layout/Admin/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'
import { ProductControlForm } from '../../../components/Product/ProductControlForm';
import { useCreateProduct } from '../../../hooks/useCreateProduct';
import { SectionWrapper } from '../../../styles/common';

export const ProductAdd = () => {
  const links = [{
    url: '/products',
    name: 'Товары'
  }];

  const createProduct = useCreateProduct();

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
