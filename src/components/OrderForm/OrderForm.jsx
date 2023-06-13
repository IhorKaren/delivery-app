import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, useController } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getCart } from 'components/Redux/Cart/cart';
import TotalPrice from 'components/TotalPrice/TotalPrice';
import {
  StyledField,
  Thumb,
  StyledButton,
  StyledForm,
} from './OrderForm.styled';
import { useFormControl } from '@mui/material';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required!')
    .matches(/^[A-Za-z]+$/, 'Name must contain only letters'),
  email: Yup.string().required('Email is required!'),
  phone: Yup.string()
    .required('Number is required!')
    .min(7, 'Number must be at least 7 digits')
    .max(16, 'Number must not exceed 16 digits')
    .matches(/^[0-9]+$/, 'Number must contain only numbers'),
  address: Yup.string().required('Address is required!'),
});

const OrderForm = ({ formSubmit, initialAddress, children }) => {
  const [addressValue, setAddressValue] = useState('');

  const cartList = useSelector(getCart);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'address',
    control,
    defaultValue: initialAddress || '',
  });

  useEffect(() => {
    setAddressValue(initialAddress || '');
  }, [initialAddress]);

  useEffect(() => {
    setValue('address', addressValue);
  }, [addressValue, setValue]);

  const onSubmit = (data, e) => {
    formSubmit({
      name: data.name,
      number: data.phone,
      email: data.email,
      address: data.address,
      order: cartList,
    });

    setAddressValue('');
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Thumb>
          <StyledField
            variant="standard"
            label="Name"
            type="text"
            {...register('name')}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        </Thumb>
        <Thumb>
          <StyledField
            variant="standard"
            label="Email"
            type="email"
            {...register('email')}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Thumb>
        <Thumb>
          <StyledField
            variant="standard"
            label="Phone"
            type="tel"
            {...register('phone')}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />
        </Thumb>
        <Thumb>
          <StyledField
            variant="standard"
            label="Address"
            type="text"
            {...inputProps}
            inputRef={ref}
            {...useFormControl()}
            error={Boolean(errors.address)}
            helperText={errors.address?.message}
          />
        </Thumb>
        <StyledButton variant="outlined" type="submit">
          Submit
        </StyledButton>
        {children}
        <TotalPrice />
      </StyledForm>
    </>
  );
};

export default OrderForm;
