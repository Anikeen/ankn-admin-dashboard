import { FC } from "react";
import { AnimEllipse, Ellipsis, Overlay, Wrapper } from "./styled"

interface IProps {
  background: string;
  opacity: number;
  ellipseColor: string;
}

export const Spinner: FC<IProps> = ({ background, opacity, ellipseColor }) => {
  return (
    <Wrapper background={background} opacity={opacity} >
      <Overlay>
        <Ellipsis>
          <AnimEllipse background={ellipseColor} />
          <AnimEllipse background={ellipseColor} />
          <AnimEllipse background={ellipseColor} />
          <AnimEllipse background={ellipseColor} />
        </Ellipsis>
      </Overlay>
    </Wrapper>
  )
}
