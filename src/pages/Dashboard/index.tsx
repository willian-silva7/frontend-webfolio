/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FiEdit, FiEye, FiPlus, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import { Container, Content, Title, Search, TableContainer } from './styles';

interface PortfoliosProps {
  id: string;
  nameChildren: string;
  classRoom: string;
  age: number;
}

const Dashboard: React.FC = () => {
  const [portfolios, setPortifolios] = useState<PortfoliosProps[]>([]);

  useEffect(() => {
    api.get('/portfolio').then(response => {
      setPortifolios(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <h1>Portifólios</h1>
          <Link to="/createportfolio">
            <div>
              <FiPlus size={20} />
            </div>
            <label>Criar Novo Portfólio</label>
          </Link>
        </Title>

        <Search>
          <label htmlFor="name">Buscar Portfólios:</label>
          <input
            name="name"
            placeholder="Digite aqui para pesquisar portifólio"
          />
        </Search>

        <TableContainer>
          <table>
            <thead>
              <th>Nome</th>
              <th>Turma</th>
              <th>Idade</th>
              <th className="last-column">Opções</th>
            </thead>

            <tbody>
              {portfolios.map(portfolio => (
                <tr key={portfolio.id}>
                  <td className="name">{portfolio.nameChildren}</td>
                  <td className="classroom">{portfolio.classRoom}</td>
                  <td className="age">{portfolio.age}</td>
                  <td className="last-column">
                    <FiEdit />
                    <FiEye />
                    <FiUserPlus className="last-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
