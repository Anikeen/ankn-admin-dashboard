import styled from "styled-components";
import { Icon } from "../../../Icon/Icon/Icon"
import { useFirebaseLogout } from "../../../../../hooks/firebase";

export const Logout = () => {
  const handleLogout = useFirebaseLogout();

  return (
    <Button onClick={handleLogout}>
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