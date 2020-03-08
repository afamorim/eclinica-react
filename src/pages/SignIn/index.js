import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('O password é obrigatório'),
});

export default function SignIn() {
  const { register, handleSubmit, errors, watch } = useForm({
    validationSchema: schema,
  });

  const dispatch = useDispatch();

  function onSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  console.tron.log(watch('email'));

  return (
    <>
      <img src={logo} alt="E-Clinica" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="email"
          placeholder="Seu e-mail"
          name="email"
        />
        {errors.email && <span>{errors.email.message}.</span>}
        <input
          ref={register}
          type="password"
          placeholder="Sua senha"
          name="password"
        />
        {errors.email && <span>{errors.password.message}.</span>}
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratúita</Link>
      </form>
    </>
  );
}
