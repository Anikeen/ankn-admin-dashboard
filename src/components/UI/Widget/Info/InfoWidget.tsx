import { FC, ReactNode } from "react"
import { Count, Name, Wrapper } from "./styled"

interface IInfoWidget {
  icon: ReactNode;
  count: number;
  name: string;
  gradient: {
    from: string;
    to: string;
  }
}

export const InfoWidget: FC<IInfoWidget> = ({ icon, count, name, gradient }) => {
  return (
    <Wrapper gradientFrom={gradient.from} gradientTo={gradient.to}>
      {icon}
      <Count>
        {count}
      </Count>

      <Name>
        {name}
      </Name>
    </Wrapper>
  )
}
