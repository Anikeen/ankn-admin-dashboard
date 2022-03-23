import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../../UI/Icon/Icon"

export const Wrapper = styled.div`
  font-size: .875rem;
`
export const Link = styled(NavLink)`
  &::after {
    content: "/";
    display: inline-block;
    margin: 0 5px;
  }
`
export const Current = styled.span`
  font-size: .875rem;
`
export const HomeIcon = styled(Icon)`
  margin-right: 5px;
`