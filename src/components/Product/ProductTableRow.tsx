import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types/product";
import { Cell } from "../UI/Table/styled";
import styled from "styled-components";

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

const ProductBodyRow = styled.tr<{ status: boolean | string }>(({ status }) => `
  color: ${status === 'On' ? 'inherit' : '#ccc'};
  cursor: pointer;
  transition: background-color .4s, color .4s;
  &:hover {
    background-color: #4272d7;
    color: #fff;
  }
`)