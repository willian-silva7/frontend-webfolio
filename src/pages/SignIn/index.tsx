import React, { FormEvent, useCallback, useState } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/AuthContext';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = {
        password,
        email,
      };

      try {
        const Schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'precisa ter no mínimo 6 digitos'),
        });

        await Schema.validate(data, {
          abortEarly: false,
        });

        signIn(data);
      } catch (err) {
        const errors = getValidationsErrors(err);

        if (errors) {
          if (errors.email) {
            console.log(errors.email);
          }
          if (errors.password) {
            console.log(errors.password);
          }
        }
      }
    },
    [email, password, signIn],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="WebFolio" />

          <form onSubmit={handleSubmit}>
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
