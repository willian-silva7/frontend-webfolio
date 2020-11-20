/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useCallback, useState } from 'react';
import { FiBook, FiHome, FiInfo, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import { useToast } from '../../hooks/ToastContext';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content } from './styles';

const CreatePortfolio: React.FC = () => {
  const [nameChildren, setNameChildren] = useState('');
  const [classRoom, setClassRoom] = useState('');
  const [age, setAge] = useState('');

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = {
        nameChildren,
        classRoom,
        age,
      };

      try {
        const Schema = Yup.object().shape({
          nameChildren: Yup.string().required('Nome é obrigatório'),
          classRoom: Yup.string().required('Nome da turma é obrigatório'),
          age: Yup.string().required('Idade é obrigatória'),
        });

        await Schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/portfolio', {
          nameChildren,
          age: parseInt(age, 10),
          classRoom,
        });

        addToast({
          type: 'success',
          title: 'Cadastro Realizado com sucesso',
          description: 'Agora você já pode logar-se no sistema',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          if (errors) {
            if (errors.nameChildren) {
              addToast({
                title: 'Preenchimento de campo obrigatório',
                description: `${errors.nameChildren}`,
              });
            }
            if (errors.classRoom) {
              addToast({
                title: 'Preenchimento de campo obrigatório',
                description: `${errors.classRoom}`,
              });
            }
            if (errors.age) {
              addToast({
                title: 'Preenchimento de campo obrigatório',
                description: `${errors.age}`,
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

      console.log(data);
    },
    [nameChildren, classRoom, age, addToast],
  );

  return (
    <>
      <Container>
        <Header />
        <Content>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                Cadastrar Novo Portifólio
                <button type="button">Cadastrar novo portfolio</button>
              </legend>

              <label htmlFor="name" className="firstlabel">
                Nome da Criança
              </label>
              <Input
                name="name"
                placeholder="Digite aqui o nome da criança"
                icon={FiUser}
                onChange={e => {
                  setNameChildren(e.target.value);
                }}
              />

              <label htmlFor="age" className="label">
                Idade
              </label>
              <Input
                name="age"
                placeholder="Digite aqui a idade da criança"
                icon={FiInfo}
                onChange={e => {
                  setAge(e.target.value);
                }}
              />

              <label htmlFor="classroom" className="label">
                Turma/Classe
              </label>
              <Input
                name="classroom"
                placeholder="Digite aqui a Turma ou Classe da criança"
                icon={FiHome}
                onChange={e => {
                  setClassRoom(e.target.value);
                }}
              />

              {/* <label htmlFor="classroom" className="label">
                Teste
              </label>
              <Textarea name="test" placeholder="teste" icon={FiBook} />
              <label htmlFor="classroom" className="label">
                Teste
              </label>
              <Textarea name="test" placeholder="teste" icon={FiBook} /> */}

              <label htmlFor="classroom" className="label">
                Teste
              </label>
              <Select
                name="test"
                placeholder="teste"
                icon={FiBook}
                options={[
                  { value: 'Willian', label: 'Willian' },
                  { value: 'Nathalia', label: 'Nathalia' },
                  { value: 'Marta', label: 'Marta' },
                  { value: 'Elvio', label: 'Elvio' },
                ]}
              />

              <button type="submit">Cadastrar Portfólio</button>
            </fieldset>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default CreatePortfolio;
