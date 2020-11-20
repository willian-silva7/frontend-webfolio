/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useCallback, useState } from 'react';
import { FiBook, FiHome, FiInfo, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import { Container, Content } from './styles';

const CreateObservation: React.FC = () => {
  const [nameChildren, setNameChildren] = useState('');
  const [classRoom, setClassRoom] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = {
        nameChildren,
        classRoom,
        age: parseInt(age, 10),
      };

      console.log(data);
    },
    [nameChildren, classRoom, age],
  );

  return (
    <>
      <Container>
        <Header />
        <Content>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Cadastrar Nova Observação</legend>

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
              <Select name="test" placeholder="teste" icon={FiBook} />

              <button type="submit">Cadastrar Portfólio</button>
            </fieldset>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default CreateObservation;
