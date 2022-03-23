import { FC } from "react";
import { IOrder } from "../../../types/order";
import { ColoredBodyRow, Cell } from "./styled";

interface ITableRow {
  row: IOrder;
}

export const OrderTableRow: FC<ITableRow> = ({ row }) => {
  const cells = Object.entries(row);
  let color = '';

  if (row.status === 'Новый') color = '#ffff58';
  if (row.status === 'Оплачен') color = '#27f027';
  if (row.status === 'Доставлен') color = '#5088ff';

  const viewOrder = (id: number) => {
    console.log(id);
  }

  return (
    <ColoredBodyRow color={color} onClick={() => viewOrder(row.id)}>
      {cells.map((cell, i) => <Cell key={i}>{cell[1]}</Cell>)}
    </ColoredBodyRow>
  )
}
