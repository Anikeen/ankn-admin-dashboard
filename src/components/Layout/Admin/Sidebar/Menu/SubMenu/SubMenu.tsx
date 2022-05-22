import { FC, useState } from "react"
import styled from "styled-components";
import { Shevron } from "../../../../../UI/Icon/Shevron/Shevron";
import { NavIcon } from "../NavIcon";

interface IProps {
  name: string;
  icon: string;
  size: number;
}

export const SubMenu: FC<IProps> = ({ name, icon, size, children }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => setIsShown(!isShown);

  return (
    <li>
      <Button onClick={handleClick} type="button">
        <NavIcon className={icon} size={size} color='' />
        {name}
        <Shevron isShown={isShown} />
      </Button>

      {isShown && <ul>{children}</ul>}
    </li>
  )
}

const Button = styled.button`
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