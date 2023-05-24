import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getCart } from 'components/Redux/Cart/cart';
import {
  StyledLabel,
  StyledField,
  Error,
  StyledButton,
  StyledForm,
} from './OrderForm.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().required('Email is required!'),
  phone: Yup.string()
    .required('Number is required!')
    .min(7, 'Number must be at least 7 digits')
    .max(16, 'Number must not exceed 16 digits'),
  address: Yup.string().required('Address is required!'),
});

const OrderForm = ({ formSubmit, children }) => {
  const cartList = useSelector(getCart);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    formSubmit({
      name: data.name,
      number: data.phone,
      email: data.email,
      address: data.address,
      order: cartList,
    });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <StyledLabel htmlFor="name">
          Name:
          <StyledField type="text" {...register('name')} />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </StyledLabel>
      </div>
      <div>
        <StyledLabel htmlFor="email">
          Email:
          <StyledField type="email" {...register('email')} />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </StyledLabel>
      </div>
      <div>
        <StyledLabel htmlFor="phone">
          Phone:
          <StyledField type="tel" {...register('phone')} />
          {errors.phone && <Error>{errors.phone?.message}</Error>}
        </StyledLabel>
      </div>
      <div>
        <StyledLabel htmlFor="address">
          Address:
          <StyledField type="text" {...register('address')} />
          {errors.address && <Error>{errors.address?.message}</Error>}
        </StyledLabel>
      </div>

      <StyledButton type="submit">Submit</StyledButton>
      {children}
    </StyledForm>
  );
};

export default OrderForm;
