import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="E-Clinica" />

      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
