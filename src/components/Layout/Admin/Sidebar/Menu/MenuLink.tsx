import { FC } from "react";
import { StyledLink, Icon } from "./styled";

interface IMenuLinkProps {
  to: string;
  text: string;
  icon: string;
  size: number;
}

export const MenuLink: FC<IMenuLinkProps> = ({ to, text, icon, size }) => {
  return (
    <li>
      <StyledLink to={to}>
        <Icon className={icon} fontSize={size} />
        {text}
      </StyledLink>
    </li>
  )
}
