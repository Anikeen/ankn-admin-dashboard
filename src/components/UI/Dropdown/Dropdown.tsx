import { FC, ReactNode, useState } from 'react'
import styled from "styled-components";
import { Shevron } from '../Icon/Shevron/Shevron';
import { Dropbox } from './Dropbox';

interface IProps {
  toggle: ReactNode;
  dropbox: ReactNode;
}

export const Dropdown: FC<IProps> = ({ toggle, dropbox }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => setIsShown(!isShown);

  return (
    <Wrapper>
      <Toggle onClick={handleClick}>
        {toggle}
        <Shevron isShown={isShown} />
      </Toggle>

      <Dropbox isShown={isShown}>
        {dropbox}
      </Dropbox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Toggle = styled.button`
  display: flex;
  align-items: center;
`
