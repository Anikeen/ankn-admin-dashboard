import { fetchOrders } from "../../../api/order";
import { Breadcrumbs } from "../../../components/Layout/Admin/Breadcrumbs/Breadcrumbs"
import { ContentHeader } from "../../../components/Layout/Admin/ContentHeader/ContentHeader"
import { OrderTableRow } from "../../../components/Order/OrderTableRow";
import { Table } from "../../../components/UI/Table/Table"

export const Orders = () => {
  const headers = [
    'ID',
    'Покупатель',
    'Статус',
    'Сумма',
    'Дата создания',
  ];
  const orders = fetchOrders();

  return (
    <>
      <ContentHeader title="Заказы">
        <Breadcrumbs links={[]} current="Заказы" />
      </ContentHeader>

      <section>
        <Table headers={headers}>
          {orders.map((row, i) => <OrderTableRow row={row} key={i} />)}
        </Table>
      </section>
    </>
  )
}
