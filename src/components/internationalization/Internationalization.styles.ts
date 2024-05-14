import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  width: 118px;
  height: 40px;
  padding: 4px 12px;
  background: #ffffff;
  border-radius: 10px;
  transition: background 500ms;

  &:hover {
    transition: background 500ms;
    background: rgba(219, 219, 219);
  }

  &.focused {
    border-radius: 10px 10px 0px 0px;
  }

  &.focused:hover {
    background: #ffffff;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    transition: all 500ms;
  }

  span img {
    width: 12px;
  }

  .focused-arrow {
    transform: rotate(-180deg);
    transition: 500ms;
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 22px;
  }
`;

export const Label = styled.p`
  color: #141416;
  font-size: 14px;
  text-transform: uppercase;

  &::selection {
    background: none;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 31px;
  width: 118px;
  min-height: 40px;
  height: 100%;
  padding: 0 12px;
  background: #ffffff;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 5px 10px 0px #00000040;

  &:hover {
    background: rgba(219, 219, 219);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;
