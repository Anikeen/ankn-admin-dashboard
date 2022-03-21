import { FC, ReactNode, useState } from 'react'
import { Shevron } from '../Icon/Shevron';
import { Dropbox, Toggle, Wrapper } from './styled';

interface IDropdown {
  toggle: ReactNode;
  dropbox: ReactNode;
}

export const Dropdown: FC<IDropdown> = ({ toggle, dropbox }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Wrapper>
      <Toggle onClick={() => setIsShown(!isShown)}>
        {toggle}
        <Shevron className="icon-chevron-down" isShown={isShown} />
      </Toggle>

      <Dropbox isShown={isShown}>{dropbox}</Dropbox>
    </Wrapper>
  )
}
