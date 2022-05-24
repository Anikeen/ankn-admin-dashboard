import { FC, FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from "styled-components";
import UseInput from '../../hooks/useInput'
import useValidation from '../../hooks/useValidadtion';
import { IProduct } from '../../types/product'
import { Checkbox } from '../UI/Form/CheckboxRow/Checkbox'
import { CheckboxRow } from '../UI/Form/CheckboxRow/CheckboxRow'
import { Form } from '../UI/Form/Form'
import { MainInput } from '../UI/Form/InputRow/Input/MainInput'
import { MainLabel } from '../UI/Form/InputRow/Label/MainLabel';
import { Warning } from '../UI/Form/InputRow/Warning'

interface IProps {
  product?: IProduct;
  callSubmitAction: (form: MutableRefObject<HTMLFormElement | undefined>) => void;
  btnText: string;
}

const defaultValidation = {
  notEmpty: true,
  minLength: 3
}

const defaultInitialValue = '';

export const ProductControlForm: FC<IProps> = ({ product, callSubmitAction, btnText }) => {
  const [isPending, setIsPending] = useState(false);

  const title = UseInput(defaultInitialValue);
  const price = UseInput(defaultInitialValue);

  const titleValid = useValidation(defaultValidation, title.value, title.setValue);
  const priceValid = useValidation(defaultValidation, price.value, price.setValue);

  useEffect(() => {
    if (product) {
      const titleValue = product?.title ? product.title : '';
      const priceValue = product?.price ? product.price : '';
      const size = product?.sizes ? product.sizes : [];
      const productStatus = product?.status ? true : false;

      title.setValue(titleValue);
      price.setValue(priceValue);

      size.forEach(item => {
        const checkbox = document.querySelector<HTMLInputElement>(`input[value=${item}]`);
        checkbox!.checked = true;
      });

      const status = document.querySelector<HTMLInputElement>(`input[name=status]`);
      status!.checked = productStatus;
    }
  }, [product]);

  let titleError: boolean = (title.isDirty && titleValid.isEmpty) || (title.isDirty && titleValid.minLengthError);
  let priceError: boolean = (price.isDirty && priceValid.isEmpty) || (price.isDirty && priceValid.minLengthError);

  const form: MutableRefObject<HTMLFormElement | undefined> = useRef();
  const location = useLocation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (titleValid.isEmpty) {
      title.setDirty(true);
      titleError = true;
    }

    if (priceValid.isEmpty) {
      price.setDirty(true);
      priceError = true;
    }

    if (titleError || priceError) return;

    try {
      setIsPending(true);
      await callSubmitAction(form);

      if (location.pathname === '/products/add') {
        title.setValue('');
        price.setValue('');

        const size = document.querySelectorAll<HTMLInputElement>(`input[name=size]`);
        size.forEach(item => {
          item!.checked = false;
        });

        const status = document.querySelector<HTMLInputElement>(`input[name=status]`);
        status!.checked = true;

        title.setDirty(false);
        price.setDirty(false);
      }

      setIsPending(false);
    } catch (error) {
      alert(error)
      setIsPending(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit} isPending={isPending} btnWidth="auto" btnText={btnText} refer={form}>
      <InputRow>
        <MainLabel
          htmlFor="title"
          labelText="Наименование"
          value={title.value}
          isFocused={title.isFocused}
        />
        <MainInput
          id="title"
          name="title"
          type="text"
          placeholder='Наименование'
          value={title.value}
          onFocus={title.onFocus}
          onChange={title.onChange}
          onBlur={title.onBlur}
          isFocused={title.isFocused}
          isInvalid={titleError}
        />
        {(title.isDirty && titleValid.isEmpty) && <Warning>Это поле обязательно</Warning>}
        {(title.isDirty && !titleValid.isEmpty && titleValid.minLengthError) && <Warning>Не менее {titleValid.minLength} символов</Warning>}
      </InputRow>

      <InputRow>
        <MainLabel
          htmlFor="price"
          labelText="Стоимость"
          value={price.value}
          isFocused={price.isFocused}
        />
        <MainInput
          id="price"
          name="price"
          type="text"
          placeholder='Стоимость'
          value={price.value}
          onFocus={price.onFocus}
          onChange={price.onChange}
          onBlur={price.onBlur}
          isFocused={price.isFocused}
          isInvalid={priceError}
        />
        {(price.isDirty && priceValid.isEmpty) && <Warning>Это поле обязательно</Warning>}
        {(price.isDirty && !priceValid.isEmpty && priceValid.minLengthError) && <Warning>Не менее {priceValid.minLength} символов</Warning>}
      </InputRow>

      <CheckboxRow title="Размеры">
        <Checkbox title="S" name="size" value="s" />
        <Checkbox title="M" name="size" value="m" />
        <Checkbox title="L" name="size" value="l" />
        <Checkbox title="XL" name="size" value="xl" />
        <Checkbox title="XXL" name="size" value="xxl" />
      </CheckboxRow>

      <CheckboxRow title="">
        <Checkbox title="Отображать товар" name="status" value="on" checked={true} />
      </CheckboxRow>
    </Form>
  )
}

const InputRow = styled.div`
  margin-bottom: 10px;
`