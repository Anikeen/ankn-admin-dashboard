import { Link } from "react-router-dom"
import { LogoWrapper } from "./styled"

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        dashboard
      </Link>
    </LogoWrapper>
  )
}
