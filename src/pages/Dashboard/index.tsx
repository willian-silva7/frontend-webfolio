/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FiEdit, FiEye, FiHome, FiPlus, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import {
  Container,
  Content,
  Title,
  Search,
  TableContainer,
  SubTitle,
} from './styles';

interface PortfoliosProps {
  _id: string;
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

        {portfolios.length > 1 && (
          <SubTitle>
            <Link to="/createobservationtoclass">
              <div>
                <FiPlus size={20} />
                <FiHome size={20} />
              </div>

              <label>Criar Observação para Sala</label>
            </Link>
          </SubTitle>
        )}

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
                <tr key={portfolio._id}>
                  <td className="name">{portfolio.nameChildren}</td>
                  <td className="classroom">{portfolio.classRoom}</td>
                  <td className="age">{portfolio.age}</td>
                  <td className="last-column">
                    <Link to={`/updateportfolio/${portfolio._id}`}>
                      <FiEdit />
                    </Link>
                    <Link to={`/portfolio/${portfolio._id}`}>
                      <FiEye />
                    </Link>
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
