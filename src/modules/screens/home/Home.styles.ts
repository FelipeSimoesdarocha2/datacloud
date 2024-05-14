// Assets
import bg_fixed from 'assets/bg_hero.webp';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc((100% - 552px) * 0.12);
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 700px;
  background-blend-mode: multiply;
  background-image: url(${bg_fixed.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 1101px) {
    flex-direction: column;
    gap: 60px;
    padding: 141px 0 80px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  z-index: 1;

  @media (max-width: 560px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 76px;
  font-weight: 400;
  line-height: 0.9em;
  letter-spacing: 0em;
  max-width: 450px;

  @media (max-width: 560px) {
    font-size: 32px;
  }
`;

export const Sub_Title = styled.p`
  color: rgb(255, 255, 255);
  font-size: 21px;
  font-weight: 300;
  line-height: 1.2em;
  letter-spacing: 0.05em;
  max-width: 490px;

  @media (max-width: 560px) {
    font-size: 14px;
    text-align: center;
    padding: 0 2rem;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 408px;
  z-index: 10;

  @media (max-width: 560px) {
    padding: 0 2rem;
  }
`;

export const Label = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 29px;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: 0em;
  max-width: 307px;

  @media (max-width: 560px) {
    font-size: 18px;
    max-width: 200px;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;

  button:last-child {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 36px;
  min-width: 131px;
  background-color: rgb(255 255 255);
  transition: all 500ms ease;

  &:hover {
    background-color: #b7dade;
    transition: background-color 250ms ease;
    opacity: 0.8;
  }

  &:active {
    transition: all 0.3s ease;
    transform: scale(0.9);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:active {
    transform: scale(1);
  }

  &:disabled:hover {
    background-color: rgb(255 255 255);
    opacity: 1;

    p {
      color: #a6a6a6;
    }
  }

  p {
    color: rgb(1, 62, 98);
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }

  p::selection {
    background: none;
  }
`;
