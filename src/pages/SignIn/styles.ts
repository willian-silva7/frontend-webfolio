import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImage from '../../assets/signin-background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    color: var(--color-title);

    h1 {
      margin-bottom: 24px;
      color: var(--color-title);
    }

    input {
      background: var(--color-background);
      border-radius: 10px;
      border: 3px solid var(--color-form);
      opacity: 0.55;
      color: var(--color-form);
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: var(--color-form);
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
      margin-bottom: 24px;

      &:hover {
        background: ${shade(0.2, '#ff69b4')};
      }
    }

    a {
      color: var(--color-form);
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ff69b4')};
      }

      & + a {
        color: var(--color-form);
        display: block;
        margin-top: 24px;
        text-decoration: none;
      }
    }
  }

  > a {
    color: var(--color-form);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff69b4')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
