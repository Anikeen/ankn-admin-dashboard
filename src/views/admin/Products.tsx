import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/product";
import { Breadcrumbs } from "../../components/Layout/Admin/ContentHeader/Breadcrumbs/Breadcrumbs"
import { ContentHeader } from "../../components/Layout/Admin/ContentHeader/ContentHeader"
import { Table } from "../../components/UI/Table/Table"
import { TableRow } from "../../components/UI/Table/ProductTableRow";
import { IProduct } from "../../types/product";

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
      const data = await fetchProducts();
      const products: Array<IProduct> = Object.keys(data).map(key => {
        return {
          id: data[key].id,
          title: data[key].title,
          price: data[key].price,
          status: data[key].status ? 'On' : 'Off',
        }
      })
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
          {products.map((row, i) => <TableRow row={row} key={i} />)}
        </Table>
      </section>
    </>
  )
}
