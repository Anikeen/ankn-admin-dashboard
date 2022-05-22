import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../../components/Layout/Admin/Breadcrumbs/Breadcrumbs'
import { ContentHeader } from '../../../components/Layout/Admin/ContentHeader/ContentHeader'

export const OrderEdit = () => {
  let { id } = useParams();
  const links = [{
    url: '/orders',
    name: 'Заказы'
  }];
  const title = `Заказ № ${id}`;


  return (
    <>
      <ContentHeader title={title}>
        <Breadcrumbs links={links} current={title} />
      </ContentHeader>

      <section>
        Компонент в разработке
      </section>
    </>
  )
}
