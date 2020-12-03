import styled from 'styled-components';

export const Container = styled.div`
  .dropzone {
    height: 200px;
    background: none;
    border-radius: 10px;
    border: 4px dashed var(--color-form);
    opacity: 0.55;

    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
  }

  .dropzone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dropzone p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-title);
  }

  .dropzone p svg {
    color: var(--color-title);
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;
