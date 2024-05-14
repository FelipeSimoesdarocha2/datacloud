import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100px;
  max-height: 90px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
  background-color: rgb(1, 62, 98);
  border-right: 1px solid #e9ebf1;
  z-index: 100;
  transition: all 500ms ease-out;

  &.active {
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all 750ms;

    > div {
      filter: blur(1rem);
      transition: all 250ms;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 1160px;
`;
