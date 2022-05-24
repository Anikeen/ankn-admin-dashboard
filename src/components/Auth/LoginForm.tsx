import { FormEvent, useState } from "react";
import styled from "styled-components";
import { Form } from "../UI/Form/Form";
import useInput from "../../hooks/useInput";
import { AuthInput } from "../UI/Form/InputRow/Input/AuthInput";
import { AuthLabel } from "../UI/Form/InputRow/Label/AuthLabel";
import { useFirebaseSignIn } from "../../hooks/firebase";
import useValidation from "../../hooks/useValidadtion";

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

  const login = useInput(inputInitialValue);
  const password = useInput(inputInitialValue);

  const loginValid = useValidation(loginValidation, login.value, login.setValue);
  const passwordValid = useValidation(passwordValidation, password.value, password.setValue);

  let loginValidationError: boolean = (login.isDirty && loginValid.isEmpty) || (login.isDirty && loginValid.emailError);
  let passwordValidationError: boolean = (password.isDirty && passwordValid.isEmpty) || (password.isDirty && passwordValid.minLengthError);

  const handleLogin = useFirebaseSignIn();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (loginValid.isEmpty) {
      login.setDirty(true);
      loginValidationError = true;
    }

    if (passwordValid.isEmpty) {
      password.setDirty(true);
      passwordValidationError = true;
    }

    if (loginValidationError || passwordValidationError) return;

    try {
      setIsPending(true);
      handleLogin(login.value, password.value, setIsPending);
    } catch (error) {
      alert('false');
      setIsPending(false);
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
          {(login.isDirty && loginValid.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(login.isDirty && !loginValid.isEmpty && loginValid.emailError) && <Warning>Введите корректный email</Warning>}
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
          {(password.isDirty && passwordValid.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(password.isDirty && !passwordValid.isEmpty && passwordValid.minLengthError) && <Warning>Не менее {passwordValid.minLength} символов</Warning>}
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