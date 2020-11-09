import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="WebFolio" />

          <form action="">
            <h1>Faça Seu Login</h1>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="senha" />
            <button type="submit">Entrar</button>
            Esqueci minha senha?
            <a href="/"> Recuperar Senha</a>
          </form>

          <a href="/">
            <FiLogIn />
            Criar Conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
