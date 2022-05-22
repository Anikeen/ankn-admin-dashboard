import { FC } from "react";
import { IOrder } from "../../types/order";
import { Cell } from "../UI/Table/styled";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ITableRow {
  row: IOrder;
}

export const OrderTableRow: FC<ITableRow> = ({ row }) => {
  const redirect = useNavigate();
  const cells = Object.entries(row);
  let color = '';

  if (row.status === 'Новый') color = '#ffff58';
  if (row.status === 'Оплачен') color = '#27f027';
  if (row.status === 'Доставлен') color = '#5088ff';

  const viewOrder = (id: number) => {
    redirect(`/orders/edit/${id}`, { replace: true })
  }

  return (
    <ColoredBodyRow color={color} onClick={() => viewOrder(row.id)}>
      {cells.map((cell, i) => <Cell key={i}>{cell[1]}</Cell>)}
    </ColoredBodyRow>
  )
}

const ColoredBodyRow = styled.tr(({ color }) => `
  background-color: ${color};
  cursor: pointer;
  transition: background-color .4s, color .4s;
  &:hover {
    background-color: #fff;
  }
`)