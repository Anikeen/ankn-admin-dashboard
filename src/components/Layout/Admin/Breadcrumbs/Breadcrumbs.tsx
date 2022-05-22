import { FC } from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "../../../UI/Icon/Icon/Icon"

interface IProps {
  links: Array<{ url: string; name: string }>;
  current: string;
}

export const Breadcrumbs: FC<IProps> = ({ links, current }) => {
  return (
    <Wrapper>
      <Link to="/">
        <HomeIcon className="icon-home" size={1} color='' />
        Главная
      </Link>

      {
        links.map((link, i) => <Link to={link.url} key={i} >{link.name}</Link>)
      }

      <Current>
        {current}
      </Current>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: .875rem;
`
const Link = styled(NavLink)`
  &::after {
    content: "/";
    display: inline-block;
    margin: 0 5px;
  }
`
const HomeIcon = styled(Icon)`
  margin-right: 5px;
`
const Current = styled.span`
  font-size: .875rem;
`