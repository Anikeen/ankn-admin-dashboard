import { useEffect, useState } from "react";
import { fetchProducts } from "../../../api/product";
import { Breadcrumbs } from "../../../components/Layout/Admin/ContentHeader/Breadcrumbs/Breadcrumbs"
import { ContentHeader } from "../../../components/Layout/Admin/ContentHeader/ContentHeader"
import { Table } from "../../../components/UI/Table/Table"
import { ProductTableRow } from "../../../components/UI/Table/ProductTableRow";
import { IProduct } from "../../../types/product";

export const Products = () => {
  const headers = [
    'ID',
    'Наименование',
    'Цена',
    'Статус',
  ];
  const [products, setProducts] = useState([] as Array<IProduct>);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  return (
    <>
      <ContentHeader title="Товары">
        <Breadcrumbs links={[]} current="Товары" />
      </ContentHeader>

      <section>
        <Table headers={headers}>
          {products.map((row, i) => <ProductTableRow row={row} key={i} />)}
        </Table>
      </section>
    </>
  )
}
