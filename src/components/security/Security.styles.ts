// Assets

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 605px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 54px;
  width: 100%;
  height: 100%;
  margin: 0 2rem;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 0.9em;
  letter-spacing: 0em;
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 560px;

  @media (max-width: 560px) {
    font-size: 32px;
  }
`;

export const Sub_Title = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2em;
  letter-spacing: 0em;
  max-width: 863px;

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 509px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 32px;
  background-color: rgb(1 62 98);
  width: 100%;
  border-radius: 0px 30px 0px 30px;
  transition:
    all 0.4s ease-in-out 0s,
    visibility 0s;


  p {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0em;
    text-align: center;
  }

  &:hover {
    transform: translateX(0) translateY(0) scaleX(1.06) scaleY(1.06) rotate(0deg) skewX(0deg) skewY(0deg);
    transition:
      all 0.4s ease-in-out 0s,
      visibility 0s;
  }

  ::selection {
  }
`;
