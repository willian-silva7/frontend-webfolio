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

  width: 100vw;
  max-width: 700px;

  form {
    margin: 4.3rem 0;
    width: 36.5rem;
    text-align: center;
    color: var(--color-title);

    h1 {
      margin-bottom: 5.58rem;
      color: var(--color-title);
    }

    input {
      background: var(--color-background);
      border-radius: 1.07rem;
      border: 0.32rem solid var(--color-form);
      opacity: 0.55;
      color: var(--color-form);
      padding: 1.72rem;
      width: 100%;

      & + input {
        margin-top: 0.86rem;
      }
    }

    button {
      background: var(--color-form);
      height: 6.02rem;
      border-radius: 1.07rem;
      border: 0;
      padding: 0 1.72rem;
      color: #fff;
      width: 100%;
      font-weight: 500;
      margin-top: 1.72rem;
      transition: background-color 0.2s;
      margin-bottom: 2.58rem;

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
        margin-top: 2.58rem;
        text-decoration: none;
      }
    }
  }

  > a {
    color: var(--color-form);
    display: block;
    margin-top: 2.58rem;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 1.72rem;
    }

    &:hover {
      color: ${shade(0.2, '#ff69b4')};
    }
  }

  @media (min-width: 700px) {
    form {
      margin: 8.3rem 0;

      h1 {
        margin-bottom: 2.58rem;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
