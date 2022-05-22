import { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavIcon } from "./NavIcon";

interface IProps {
  to: string;
  text: string;
  icon: string;
  size: number;
}

export const MenuItem: FC<IProps> = ({ to, text, icon, size }) => {
  return (
    <li>
      <Link end to={to}>
        <NavIcon className={icon} size={size} color='' />
        {text}
      </Link>
    </li>
  )
}

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 35px;
  font-size: 1.125rem;
  line-height: 1;
  font-weight: 600;
  text-align: left;
  color: #555;
  border-bottom: 1px solid #f2f2f2;
  transition: color .4s;
  &.active {
    color: #4272d7;
  }
`