import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 167px;
  z-index: 5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 28px;

  a {
    color: #013e62;
    font-size: 18px;
    letter-spacing: 0.05em;
    font-weight: 300;
    text-transform: capitalize;
    text-decoration: underline;
  }
`;
