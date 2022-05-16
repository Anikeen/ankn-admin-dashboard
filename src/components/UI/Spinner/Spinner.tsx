import { FC } from "react";
import { AnimEllipse, Ellipsis, Overlay, Wrapper } from "./styled"

interface IProps {
  background: string;
  opacity: number;
  color: string;
}

export const Spinner: FC<IProps> = ({ background, opacity, color }) => {
  return (
    <Wrapper background={background} opacity={opacity} >
      <Overlay>
        <Ellipsis>
          <AnimEllipse background={color} />
          <AnimEllipse background={color} />
          <AnimEllipse background={color} />
          <AnimEllipse background={color} />
        </Ellipsis>
      </Overlay>
    </Wrapper>
  )
}
