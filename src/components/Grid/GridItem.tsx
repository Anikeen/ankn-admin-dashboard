import { FC, ReactNode } from "react"
import { Item } from "./styled"

interface IGridItem {
  width: number;
  children: ReactNode;
}

export const GridItem: FC<IGridItem> = ({ width, children }) => {
  return (
    <Item width={width}>
      {children}
    </Item>
  )
}
