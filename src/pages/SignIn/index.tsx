import React, { FormEvent, useCallback, useState } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateSession = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      console.log(email, password);
    },
    [email, password],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="WebFolio" />

          <form onSubmit={handleCreateSession}>
            <h1>Faça Seu Login</h1>
            <Input
              name="email"
              placeholder="E-mail"
              icon={FiMail}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Entrar</button>
            Esqueci minha senha?
            <a href="/"> Recuperar Senha</a>
          </form>

          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
