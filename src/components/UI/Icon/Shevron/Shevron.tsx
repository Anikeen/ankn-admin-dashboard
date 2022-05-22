import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";

interface IProps {
  isShown: boolean;
}

export const Shevron: FC<IProps> = ({ isShown }) => {
  return (
    <StyledIcon
      className="icon-chevron-down"
      isShown={isShown}
      size={1.3}
      color=''
    />
  )
}

interface IProps {
  isShown: boolean;
}

const StyledIcon = styled(Icon) <IProps>`
  display: block;
  margin-left: auto;
  transform: ${({ isShown }) => isShown ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform .4s;
`