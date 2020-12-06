/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import { FiEdit, FiPlus, FiX } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import AudioPlayer from 'react-audio-player';
import VideoPlayer from 'react-player';
import Header from '../../components/Header';
import api from '../../services/api';
import {
  Container,
  Title,
  Content,
  Subtitle,
  Card,
  PortfolioTitle,
  PortfolioIcons,
  Files,
} from './styles';

interface Observation {
  _id: string;
  title: string;
  description: string;
  notes: string;
  files: Array<{
    _id: string;
    name: string;
    url: string;
    type: string;
  }>;
}

interface PortfolioProps {
  _id: string;
  nameChildren: string;
  age: number;
  classRoom: string;
  observations: Observation;
  educator: string;
  educator_name: string;
}

interface PortfolioParams {
  portfolio: string;
}

const Portfolio: React.FC = () => {
  const [portfolioinfo, setPortfolioInfo] = useState<PortfolioProps>();
  const [observations, setObservations] = useState<Observation[]>([]);
  const { params } = useRouteMatch<PortfolioParams>();

  useEffect(() => {
    api.get(`portfolio/${params.portfolio}`).then(response => {
      setPortfolioInfo(response.data);
      setObservations(response.data.observations);
    });
  }, [params.portfolio]);

  const handleSubmit = useCallback(
    async (observation: Observation) => {
      api.delete(
        `portfolio/${params.portfolio}/observation/${observation._id}`,
      );
      const observationIndex = observations.findIndex(
        item => item._id === observation._id,
      );
      observations.splice(observationIndex, 1);
      setObservations([...observations]);
    },
    [params.portfolio, observations],
  );

  return (
    <Container>
      <Header />
      <Container>
        <Content>
          <Title>
            <h1>
              Portifólio de
              {` ${portfolioinfo?.nameChildren}`}
            </h1>
            <Link to={`/createobservation/${params.portfolio}`}>
              <div>
                <FiPlus size={20} />
              </div>
              <label>Criar Nova Observação</label>
            </Link>
          </Title>

          <Subtitle>
            <label htmlFor="name">Educator (a): </label>
            <label htmlFor="name">{portfolioinfo?.educator_name}</label>
          </Subtitle>

          {observations.map(observation => (
            // eslint-disable-next-line no-underscore-dangle
            <Card key={observation._id}>
              <PortfolioTitle>
                <h3>{observation.title}</h3>
                <PortfolioIcons>
                  <button
                    type="button"
                    onClick={() => handleSubmit(observation)}
                  >
                    <FiX size={20} />
                  </button>

                  <Link
                    to={`/updateobservation/${params.portfolio}/${observation._id}`}
                  >
                    <FiEdit size={20} />
                  </Link>
                </PortfolioIcons>
              </PortfolioTitle>
              <p>{observation.description}</p>
              <p>{observation.notes}</p>

              <Files>
                {observation.files.map(file => {
                  if (file.type === 'image') {
                    return <img src={file.url} alt={file.name} />;
                  }
                  if (file.type === 'video') {
                    if (file.name.indexOf('ogg') > -1) {
                      return <AudioPlayer src={file.url} controls />;
                    }
                    return (
                      <VideoPlayer
                        url={file.url}
                        controls
                        width={180}
                        height={180}
                      />
                    );
                  }
                  return <AudioPlayer src={file.url} controls />;
                })}
              </Files>
            </Card>
          ))}
        </Content>
      </Container>
    </Container>
  );
};

export default Portfolio;
