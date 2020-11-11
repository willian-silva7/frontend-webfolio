import React, { FormEvent, useCallback, useState } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/AuthContext';

import { Background, Container, Content } from './styles';
import { useToast } from '../../hooks/ToastContext';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();

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

        await signIn(data);

        addToast({
          type: 'success',
          title: 'Login Realizado com sucesso',
          description: `Seja bem vindo ao sistema`,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          if (errors) {
            if (errors.email) {
              addToast({
                title: 'Preenchimento de campo obrigatório',
                description: `${errors.email}`,
              });
            }
            if (errors.password) {
              addToast({
                title: 'Preenchimento de campo obrigatório',
                description: `${errors.password}`,
              });
            }
          }
        } else {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: 'Ocorreu um erro cheque suas credenciais ',
          });
        }
      }
    },
    [email, password, signIn, addToast],
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
