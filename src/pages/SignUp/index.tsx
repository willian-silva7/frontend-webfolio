import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { FiLock, FiMail, FiHome, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = {
        name,
        password,
        institution,
        email,
      };

      try {
        const Schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'precisa ter no mínimo 6 digitos'),
          institution: Yup.string(),
        });

        await Schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        const errors = getValidationsErrors(err);

        if (errors) {
          if (errors.name) {
            console.log(errors.name);
          }
          if (errors.email) {
            console.log(errors.email);
          }
          if (errors.password) {
            console.log(errors.password);
          }
        }
      }
    },
    [email, institution, name, password],
  );

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="WebFolio" />

          <form onSubmit={handleSubmit}>
            <h1>Faça o Seu Cadastro</h1>
            <Input
              name="name"
              placeholder="Nome"
              icon={FiUser}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <Input
              name="institution"
              placeholder="Instituição"
              icon={FiHome}
              onChange={e => {
                setInstitution(e.target.value);
              }}
            />
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
