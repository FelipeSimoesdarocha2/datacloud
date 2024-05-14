import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2em;
  text-transform: uppercase;
  font-family: poppins, sans-serif;
`;

export const Button = styled.div`
  .back a {
    color: #000;
  }

  &:hover {
    a {
      color: rgb(0, 175, 211);
    }

    .back {
      background: #fff;
    }
  }
`;
