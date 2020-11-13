import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 1.44rem 0;
  background: var(--color-header);
`;

export const HeaderContent = styled.div`
  max-width: 120.43rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 8.6rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8.6rem;

  img {
    width: 6.02rem;
    height: 6.02rem;
    border-radius: 50%;
  }

  button {
    display: flex;
    margin-right: 1.72rem;
    line-height: 2.58rem;
    font-size: 1.72rem;
    border: none;
    background: transparent;
    color: #000;
  }
`;
