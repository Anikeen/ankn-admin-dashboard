import { useNavigate } from "react-router-dom";
import { destroyElement } from "../api/api";

export const useDeleteProduct = (productKey: string, setIsPending: (state: boolean) => void) => {
  const reloadPage = useNavigate();

  return async () => {
    try {
      setIsPending(true);
      const result = window.confirm('Вы действительно хотите удалить товар?')

      if (result) {
        await destroyElement('products', productKey);
        reloadPage('/products')
      }

      setIsPending(false);
    } catch (error) {
      setIsPending(false);
      alert(error);
    }
  }
}