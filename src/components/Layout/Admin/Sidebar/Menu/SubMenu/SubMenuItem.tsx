import { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface IProps {
  to: string;
  text: string
}

export const SubMenuItem: FC<IProps> = ({ to, text }) => {
  return (
    <li>
      <Link end to={to}>
        {text}
      </Link>
    </li>
  )
}

const Link = styled(NavLink)`
  display: block;
  padding: 13px 35px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: #f5f5f5;
  &.active {
    color: #4272d7;
  }
`