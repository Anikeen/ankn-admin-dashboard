import { Logo } from "./Logo"
import { Menu } from "./Menu/Menu"
import { Aside, Navigation } from "./styled"


export const Sidebar = () => {
  return (
    <Aside>
      <Logo />
      <Navigation>
        <Menu />
      </Navigation>
    </Aside>
  )
}
