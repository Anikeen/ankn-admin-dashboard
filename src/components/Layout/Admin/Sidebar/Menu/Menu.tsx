import { MenuItem } from "./MenuItem"
import { SubMenuItem } from "./SubMenu/SubMenuItem"
import { SubMenu } from "./SubMenu/SubMenu"

export const Menu = () => {
  return (
    <ul>
      <MenuItem to="/" text="Главная" icon="icon-home" size={1.5} />
      <MenuItem to="/orders" text="Заказы" icon="icon-file-text2" size={1.3} />
      <SubMenu name="Товары" icon="icon-t-shirt" size={1.5}>
        <SubMenuItem to="/products" text="Список товаров" />
        <SubMenuItem to="/products/add" text="Добавить товар" />
      </SubMenu>
    </ul>
  )
}
