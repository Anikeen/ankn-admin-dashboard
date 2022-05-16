import { FC, useState } from "react"
import { Shevron } from "../../../../UI/Icon/Shevron";
import { Button, NavIcon } from "./styled"

interface ISubListProps {
  name: string;
  icon: string;
  size: number;
}

export const SubList: FC<ISubListProps> = ({ name, icon, size, children }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => setIsShown(!isShown);

  return (
    <li>
      <Button onClick={handleClick} type="button">
        <NavIcon className={icon} size={size} />
        {name}
        <Shevron className="icon-chevron-down" isShown={isShown} />
      </Button>

      {isShown && <ul>{children}</ul>}
    </li>
  )
}
