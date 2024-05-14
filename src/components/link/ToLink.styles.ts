import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0 22px;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border: 1px solid #00afd3;
  box-shadow: 0 0 6px rgb(0, 175, 211);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgb(0, 175, 211);
    transition: all 0.2s ease;
  }
`;

export const Content = styled.div`
  padding: 6px 22px;

  a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
  }

  a::selection {
    background-color: transparent;
  }


`;
