// Assets
import bg_fixed from 'assets/bg_benefit.webp';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 619px;
  background-blend-mode: multiply;
  background-image: url(${bg_fixed.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding: 2.5rem 2rem;

  .bg {
    position: absolute;
    background-color: rgb(1, 62, 98);
    opacity: 0.72;
    height: 100%;
    width: 100%;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 63px;
  width: 100%;
  height: 100%;
  max-width: 1053px;
`;

export const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 48px;
  font-weight: 400;
  line-height: 0.9em;
  letter-spacing: 0em;
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 646px;

  @media (max-width: 560px) {
    font-size: 32px;
  }
`;

export const Sub_Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 1;

  p {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 300;
    line-height: 1.1em;
    letter-spacing: 0.05em;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;

export const Action = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
  height: 53px;
  max-width: 350px;
  cursor: pointer;
  z-index: 1;
  border: 1px solid #ffffff;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0em;
    letter-spacing: 0.1em;
    white-space: nowrap;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  &:hover {
    background: rgba(1, 62, 98, 0.61);
  }

  ::selection {
    background: none;
  }
`;
