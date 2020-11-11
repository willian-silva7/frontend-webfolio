import React from 'react';
import Routes from './routes';
import AppProvider from './hooks';
import './styles/global.css';

const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

export default App;
