import React from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="WebFolio" />

          <form action="">
            <h1>Faça o Seu Cadastro</h1>
            <Input name="nome" placeholder="Nome" icon={FiMail} />
            <Input name="instituicao" placeholder="Instituição" icon={FiMail} />
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />
            <button type="submit">Cadastrar</button>
            Já possui Conta?
            <Link to="/"> Voltar para Login</Link>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
