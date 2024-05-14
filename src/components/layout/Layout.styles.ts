import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  position: relative;

  div::-webkit-scrollbar {
    width: 6px !important;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(63, 67, 80, 0.24);
  }

  div::-webkit-scrollbar-thumb:hover {
    background: rgba(63, 67, 80, 0.32);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;
