import { FC } from "react";
import { IOrder } from "../../../types/order";
import { BodyRow, Cell } from "./styled";

interface ITableRow {
  row: IOrder;
}

export const TableRow: FC<ITableRow> = ({ row }) => {
  const cells = Object.entries(row);

  const viewProduct = (id: number) => {
    console.log(id);
  }

  return (
    <BodyRow onClick={() => viewProduct(row.id)}>
      {cells.map((cell, i) => <Cell key={i}>{cell[1]}</Cell>)}
    </BodyRow>
  )
}
