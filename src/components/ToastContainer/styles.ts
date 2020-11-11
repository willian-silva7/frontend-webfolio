import styled, { css } from 'styled-components';

interface ToastProps {
  type?: string;
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 3.22rem;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  width: 38.7rem;

  position: relative;
  padding: 1.72rem 3.22rem 1.72rem 1.72rem;
  border-radius: 1.07rem;
  box-shadow: 0.21rem 0.21rem 0.86rem rgba(0, 0, 0, 0.2);

  display: flex;

  background: rgba(179, 235, 235, 0.7);
  color: #3172b7;

  & + div {
    margin-top: 0.86rem;
  }

  ${props =>
    props.type === 'success' &&
    css`
      background: #2e6d;
      color: #fff;
    `}

  ${props =>
    props.type === 'error' &&
    css`
      background: rgba(255, 0, 0, 0.7);
      color: #fff;
    `}

  > svg {
    margin: 1.4rem 1.29rem 0 0;
  }

  div {
    flex: 1;

    strong {
      font-weight: 700;
    }

    p {
      margin-top: 0.43rem;
      font-size: 1.5rem;
      opacity: 0.8;
      line-height: 2.15rem;
    }
  }

  button {
    position: absolute;
    right: 1.72rem;
    top: 3.04rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
