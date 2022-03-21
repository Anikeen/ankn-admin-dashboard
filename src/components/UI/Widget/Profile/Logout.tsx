import { useContext } from "react"
import { AuthContext } from "../../../../context";
import { Icon } from "../../Icon/Icon"
import { LogoutButton } from "./styled"

export const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <LogoutButton onClick={() => logout()}>
      <Icon className="icon-power" size={1.8} />
      Выйти
    </LogoutButton>
  )
}
