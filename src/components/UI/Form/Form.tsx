import { FC, FormEvent, ReactNode, RefObject, MutableRefObject } from 'react';
import { Button } from './styled';

interface FormProps {
  onSubmit: (e: FormEvent) => void;
  btnText: string;
  btnWidth: string;
  children?: ReactNode;
  refer?: any;
}

export const Form: FC<FormProps> = ({ onSubmit, btnWidth, btnText, children, refer }) => {
  return (
    <form onSubmit={onSubmit} ref={refer}>
      {children}
      <Button type="submit" width={btnWidth}>{btnText}</Button>
    </form>
  );
}
