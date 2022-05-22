import { FC } from "react";
import { AnimEllipse, Container, Overlay, Wrapper } from "./styles";

interface IProps {
  background: string;
  opacity: number;
  color: string;
}

export const Spinner: FC<IProps> = ({ background, opacity, color }) => {
  return (
    <Wrapper background={background} opacity={opacity} >
      <Overlay>
        <Container>
          <AnimEllipse background={color} />
          <AnimEllipse background={color} />
          <AnimEllipse background={color} />
          <AnimEllipse background={color} />
        </Container>
      </Overlay>
    </Wrapper>
  )
}
