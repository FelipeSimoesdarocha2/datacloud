import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 63px;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 69px;

  @media (max-width: 560px) {
    margin-top: 32px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 21px;
  margin: 0 2rem;

  @media (max-width: 1101px) {
    width: 100%;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

export const Componente_Image = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 560px) {
    img {
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  color: rgb(0 0 0 1);
  font-size: 48px;
  font-weight: 500;
  line-height: 1.1em;
  letter-spacing: -0.5px;
  max-width: 682px;

  @media (max-width: 560px) {
    font-size: 32px;
  }
`;

export const Sub_Title = styled.p`
  font-size: 21px;
  line-height: 1.4em;
  letter-spacing: 0em;
  max-width: 560px;

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

export const Componente_Phone = styled.div`
  @media (max-width: 1101px) {
    position: absolute;
    right: 0;
    bottom: 0px;
    opacity: 0.2;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;
