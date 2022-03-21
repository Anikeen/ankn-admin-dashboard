import { MenuLink } from "./MenuLink"
import { MenuSubLink } from "./MenuSubLink"
import { SubList } from "./SubList"

export const Menu = () => {

  return (
    <ul>
      <MenuLink to="/" text="Главная" icon="icon-home" size={1.5} />
      <MenuLink to="/orders" text="Заказы" icon="icon-file-text2" size={1.3} />
      <SubList name="Товары" icon="icon-t-shirt" size={1.5}>
        <MenuSubLink to="/products" text="Список товаров" />
        <MenuSubLink to="/products/add" text="Добавить товар" />
      </SubList>
    </ul>
  )
}
