import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
  padding: 16px 14px;
  background: #000000;
`;

export const Typography = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p,
  a {
    color: #fff;
    font-size: 14px;
  }

  a {
    text-decoration-line: underline;
  }

  a:hover {
    opacity: 0.7;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  button {
    height: 32px;
    padding: 0 16px;
    font-size: 14px;
    transition: all 250ms ease-in;
  }

  button:hover {
    opacity: 0.7;
  }

  button:active {
    transform: scale(0.9);
    transition: all 250ms ease-in;
  }

  .settings {
    border: solid 1px #fff;
  }

  .settings p {
    color: #fff;
  }

  .acept {
    background: white;
  }

  .exit {
    padding: 0;
  }
`;
