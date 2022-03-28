import { FC } from "react";
import { IProduct } from "../../../types/product";
import { ProductBodyRow, Cell } from "./styled";

interface IProps {
  row: IProduct;
}

export const TableRow: FC<IProps> = ({ row }) => {
  const cells = Object.entries(row);

  const viewProduct = (id: string) => {
    console.log(id);
  }

  return (
    <ProductBodyRow status={row.status} onClick={() => viewProduct(row.id)}>
      {cells.map((cell, i) => <Cell key={i}>{cell[1]}</Cell>)}
    </ProductBodyRow>
  )
}
