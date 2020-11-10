import React from 'react';
import Routes from './routes';
import { AuthProvider } from './hooks/AuthContext';
import './styles/global.css';

const App: React.FC = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
