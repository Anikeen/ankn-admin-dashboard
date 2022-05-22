import { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { Form } from "../UI/Form/Form";
import useInput, { IUseInput } from "../../hooks/useInput";
import { AuthContext } from "../../context";
import { AuthInput } from "../UI/Form/InputRow/Input/AuthInput";
import { AuthLabel } from "../UI/Form/InputRow/Label/AuthLabel";

const inputInitialValue = '';

const loginValidation = {
  notEmpty: true,
  isEmail: true,
}

const passwordValidation = {
  notEmpty: true,
  minLength: 6
}

export const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const login: IUseInput = useInput(inputInitialValue, loginValidation);
  const password: IUseInput = useInput(inputInitialValue, passwordValidation);

  let loginValidationError: boolean = (login.isDirty && login.isEmpty) || (login.isDirty && login.emailError);
  let passwordValidationError: boolean = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError);

  const { signIn } = useContext(AuthContext);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (login.isEmpty) {
      login.setDirty(true);
      loginValidationError = true;
    }

    if (password.isEmpty) {
      password.setDirty(true);
      passwordValidationError = true;
    }

    if (loginValidationError || passwordValidationError) return;

    try {
      setIsPending(true);
      signIn(login.value, password.value, setIsPending);
    } catch (error) {
      alert('false')
    }

  }

  return (
    <Wrapper>
      <Title>Вход</Title>

      <Form onSubmit={onSubmit} isPending={isPending} btnWidth="100%" btnText="войти">
        <InputRow>
          <AuthLabel
            htmlFor="login"
            labelText="Email"
            value={login.value}
            isFocused={login.isFocused}
          />
          <AuthInput
            id="login"
            type="text"
            value={login.value}
            onFocus={login.onFocus}
            onChange={login.onChange}
            onBlur={login.onBlur}
            isFocused={login.isFocused}
          />
          {(login.isDirty && login.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(login.isDirty && !login.isEmpty && login.emailError) && <Warning>Введите корректный email</Warning>}
        </InputRow>

        <InputRow>
          <AuthLabel
            htmlFor="password"
            labelText="Пароль"
            value={password.value}
            isFocused={password.isFocused}
          />
          <AuthInput
            id="password"
            type="password"
            value={password.value}
            onFocus={password.onFocus}
            onChange={password.onChange}
            onBlur={password.onBlur}
            isFocused={password.isFocused}
          />
          {(password.isDirty && password.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(password.isDirty && !password.isEmpty && password.minLengthError) && <Warning>Не менее {password.minLength} символов</Warning>}
        </InputRow>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 400px;
  padding: 35px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
`
const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 600;
  text-align: center;
`
const InputRow = styled.div`
  margin-bottom: 10px;
`
const Warning = styled.small`
  color: #ff4b5a;
`