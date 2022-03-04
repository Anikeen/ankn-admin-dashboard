import { FC, FormEvent, ReactNode } from 'react';
import { Button } from './styled';

interface FormProps {
  onSubmit: (e: FormEvent) => void;
  btnText: string;
  children?: ReactNode;
}

export const Form: FC<FormProps> = ({ onSubmit, btnText, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <Button type="submit">{btnText}</Button>
    </form>
  );
}
