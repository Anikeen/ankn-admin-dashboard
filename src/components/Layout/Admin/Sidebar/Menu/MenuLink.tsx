import { FC } from "react";
import { StyledLink, NavIcon } from "./styled";

interface IMenuLinkProps {
  to: string;
  text: string;
  icon: string;
  size: number;
}

export const MenuLink: FC<IMenuLinkProps> = ({ to, text, icon, size }) => {
  return (
    <li>
      <StyledLink end to={to}>
        <NavIcon className={icon} size={size} />
        {text}
      </StyledLink>
    </li>
  )
}
