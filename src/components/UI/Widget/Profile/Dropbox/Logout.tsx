import { useContext } from "react"
import { AuthContext } from "../../../../../context";
import styled from "styled-components";
import { Icon } from "../../../Icon/Icon/Icon"

export const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Button onClick={() => logout()}>
      <Icon className="icon-power" size={1.8} color='' />
      Выйти
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 25px;
  font-size: 1.125rem;
  color: #333;
  transition: color .4s,background-color .4s;
  &:hover {
    color: #fff;
    background-color: #4272d7;
  }
`