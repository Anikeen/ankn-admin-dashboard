import { FC } from "react"
import { Wrapper, Link, Current, HomeIcon } from "./styled"

interface IBreadcrumbs {
  links: Array<{ url: string; name: string }>;
  current: string;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ links, current }) => {
  return (
    <Wrapper>
      <Link to="/">
        <HomeIcon className="icon-home" size={1} />
        Главная
      </Link>

      {links.map(link => <Link to={link.url}>{link.name}</Link>)}
      <Current>
        {current}
      </Current>
    </Wrapper>
  )
}
