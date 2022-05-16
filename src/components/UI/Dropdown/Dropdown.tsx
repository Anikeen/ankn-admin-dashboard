import { FC, ReactNode, useState } from 'react'
import { Shevron } from '../Icon/Shevron';
import { Dropbox, Toggle, Wrapper } from './styled';

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
        <Shevron className="icon-chevron-down" isShown={isShown} />
      </Toggle>

      <Dropbox isShown={isShown}>
        {dropbox}
      </Dropbox>
    </Wrapper>
  )
}
