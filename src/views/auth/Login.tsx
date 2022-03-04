import { FC } from "react";
import { LoginForm } from "../../components/Auth/LoginForm";
import { Wrapper } from "./styled";

export const Login: FC = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
}
