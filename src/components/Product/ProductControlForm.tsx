import { FC, FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import UseInput, { IUseInput } from '../../hooks/useInput'
import { IProduct } from '../../types/product'
import { Checkbox } from '../UI/Form/Checkbox/Checkbox'
import { CheckboxRow } from '../UI/Form/Checkbox/CheckboxRow'
import { Form } from '../UI/Form/Form'
import { MainInput } from '../UI/Form/MainInput'
import { Warning } from '../UI/Form/styled'
import { Wrapper } from './styled'

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
  const title: IUseInput = UseInput(defaultInitialValue, defaultValidation);
  const price: IUseInput = UseInput(defaultInitialValue, defaultValidation);
  const [isPending, setIsPending] = useState(false);

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

  let titleError: boolean = (title.isDirty && title.isEmpty) || (title.isDirty && title.minLengthError);
  let priceError: boolean = (price.isDirty && price.isEmpty) || (price.isDirty && price.minLengthError);

  const form: MutableRefObject<HTMLFormElement | undefined> = useRef();
  const location = useLocation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (title.isEmpty) {
      title.setDirty(true);
      titleError = true;
    }

    if (price.isEmpty) {
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
    <Wrapper>
      <Form onSubmit={handleSubmit} isPending={isPending} btnWidth="auto" btnText={btnText} refer={form}>
        <MainInput
          id="title"
          name="title"
          type="text"
          htmlFor="title"
          labelText="Наименование"
          placeholder='Наименование'
          value={title.value}
          onFocus={title.onFocus}
          onChange={title.onChange}
          onBlur={title.onBlur}
          isFocused={title.isFocused}
          isInvalid={titleError}
        >
          {(title.isDirty && title.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(title.isDirty && !title.isEmpty && title.minLengthError) && <Warning>Не менее {title.minLength} символов</Warning>}
        </MainInput>

        <MainInput
          id="price"
          name="price"
          type="text"
          htmlFor="price"
          labelText="Стоимость"
          placeholder='Стоимость'
          value={price.value}
          onFocus={price.onFocus}
          onChange={price.onChange}
          onBlur={price.onBlur}
          isFocused={price.isFocused}
          isInvalid={priceError}
        >
          {(price.isDirty && price.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(price.isDirty && !price.isEmpty && price.minLengthError) && <Warning>Не менее {price.minLength} символов</Warning>}
        </MainInput>

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
    </Wrapper>
  )
}
