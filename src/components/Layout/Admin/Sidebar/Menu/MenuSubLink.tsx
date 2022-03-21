import { FC } from "react";
import { SubLink } from "./styled";

interface IMenuLinkProps {
  to: string;
  text: string
}

export const MenuSubLink: FC<IMenuLinkProps> = ({ to, text }) => {
  return (
    <li>
      <SubLink to={to}>
        {text}
      </SubLink>
    </li>
  )
}
