import { useEffect, useState } from "react";
import { fetchAll } from "../../../api/api";
import { Breadcrumbs } from "../../../components/Layout/Admin/Breadcrumbs/Breadcrumbs"
import { ContentHeader } from "../../../components/Layout/Admin/ContentHeader/ContentHeader"
import { Table } from "../../../components/UI/Table/Table"
import { ProductTableRow } from "../../../components/Product/ProductTableRow";
import { IProduct } from "../../../types/product";
import { Spinner } from "../../../components/UI/Spinner/Spinner";

export const Products = () => {
  const headers = [
    'ID',
    'Наименование',
    'Цена',
    'Статус',
  ];
  const [products, setProducts] = useState([] as Array<IProduct>);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const query = await fetchAll('/products');
        const products: Array<IProduct> = Object.keys(query).map(productKey => {
          return {
            id: query[productKey].id,
            title: query[productKey].title,
            price: query[productKey].price,
            sizes: query[productKey].sizes,
            status: query[productKey].status ? 'On' : 'Off',
          }
        });
        setProducts(products);
        setIsLoading(false);
      }
      getProducts();
    } catch (error) {
      alert(error);
    }
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

        {isLoading && <Spinner background="#fff" opacity={1} color="#4272d7" />}
      </section>
    </>
  )
}
