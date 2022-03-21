import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const menuItem = css`
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
export const StyledLink = styled(NavLink)`
  ${menuItem}
`

export const SubLink = styled(NavLink)`
  display: block;
  padding: 13px 35px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: #f5f5f5;
`

export const Button = styled.button`
  ${menuItem}
`

export const Icon = styled.span<{ fontSize: number }>(({ fontSize }) =>
  `
  font-size: ${fontSize}rem;
  margin-right: 1rem;
`)
