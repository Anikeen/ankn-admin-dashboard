import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../types/product";
import { ProductBodyRow, Cell } from "./styled";

interface IProps {
  row: IProduct;
}

export const ProductTableRow: FC<IProps> = ({ row }) => {
  const redirect = useNavigate();

  const viewProduct = (id: string) => {
    redirect(`/products/edit/${id}`, { replace: true })
  }

  return (
    <ProductBodyRow status={row.status} onClick={() => viewProduct(row.id)}>
      <Cell >{row.id}</Cell>
      <Cell >{row.title}</Cell>
      <Cell >{row.price}</Cell>
      <Cell >{row.status}</Cell>
    </ProductBodyRow>
  )
}
