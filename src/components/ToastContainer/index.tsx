import React, { useCallback, useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { useToast } from '../../hooks/ToastContext';
import { Container, Toast } from './styles';

interface ToastMessage {
  id: string;
  type?: string;
  title: string;
  description: string;
}

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  const HandleTimer = useCallback(
    id => {
      const timer = setTimeout(() => {
        removeToast(id);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    },
    [removeToast],
  );

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} type={message.type}>
          {message.type === 'success' ? <FiCheckCircle size={20} /> : null}
          {message.type === 'error' ? <FiAlertCircle size={20} /> : null}
          {!message.type && <FiInfo size={20} />}

          <div>
            <strong>{message.title}</strong>
            <p>{message.description}</p>
          </div>

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>

          {message.id && HandleTimer(message.id)}
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
