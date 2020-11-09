import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-background);
  border-radius: 1.07rem;
  border: 0.32rem solid var(--color-form);
  opacity: 0.55;
  color: var(--color-form);
  padding: 1.72rem;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.86rem;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-form);
  }

  svg {
    margin-right: 1.72rem;
  }
`;
