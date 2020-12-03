/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useCallback, useState } from 'react';
import { FiBook, FiBookOpen, FiInfo } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Dropzone from '../../components/Dropzone';
import Header from '../../components/Header';
import Input from '../../components/Input';
// import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import api from '../../services/api';
// import Textarea from '../../components/Textarea';
import { Container, Content } from './styles';

const CreateObservation: React.FC = () => {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File>();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = new FormData();

      data.append('title', title);
      data.append('notes', notes);
      data.append('description', description);

      if (selectedFiles) {
        data.append('files', selectedFiles);
      }

      await api.post('/portfolio/5fbc54e41ac8ae2cb4690117/observation', data);

      history.push('/');
    },
    [title, notes, description, selectedFiles, history],
  );

  return (
    <>
      <Container>
        <Header />
        <Content>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Cadastrar Nova Observação</legend>

              <label htmlFor="title" className="firstlabel">
                Título da Observação
              </label>
              <Input
                name="title"
                placeholder="Digite aqui o título da observação"
                icon={FiBook}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />

              <label htmlFor="description" className="label">
                Descrição da Observação
              </label>
              <Textarea
                name="description"
                placeholder="Digite aqui a descrição da observação"
                icon={FiInfo}
                onChange={e => {
                  setDescription(e.target.value);
                }}
              />

              <label htmlFor="notes" className="label">
                Notas
              </label>
              <Textarea
                name="notes"
                placeholder="Digite aqui uma nota específica sobre a criança"
                icon={FiBookOpen}
                onChange={e => {
                  setNotes(e.target.value);
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

              <label htmlFor="files" className="label">
                Arquivos
              </label>
              <Dropzone onFileUpload={setSelectedFiles} />

              <button type="submit">Cadastrar Portfólio</button>
            </fieldset>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default CreateObservation;
