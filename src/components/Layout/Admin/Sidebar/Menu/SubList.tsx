import { FC, useState } from "react"
import { Shevron } from "../../../../UI/Icon/Shevron";
import { Button, Icon } from "./styled"

interface ISubListProps {
  name: string;
  icon: string;
  size: number;
}

export const SubList: FC<ISubListProps> = ({ name, icon, size, children }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <li>
      <Button onClick={() => setIsShown(!isShown)}>
        <Icon className={icon} fontSize={size} />
        {name}
        <Shevron className="icon-chevron-down" isShown={isShown} />
      </Button>

      {isShown && <ul>{children}</ul>}
    </li>
  )
}
