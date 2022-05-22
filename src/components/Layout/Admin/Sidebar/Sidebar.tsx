import styled from "styled-components";
import { Logo } from "./Logo/Logo"
import { Menu } from "./Menu/Menu"

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

const Aside = styled.aside`
  min-width: 300px;  
  max-width: 300px;
  background-color: #fff;
  border-right: 1px solid #e5e5e5;
`
const Navigation = styled.nav`
  padding-top: 35px;
`
