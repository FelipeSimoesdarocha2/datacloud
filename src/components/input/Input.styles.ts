import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  caret-color: #fff;

  label {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #fafafa;
    font-size: 18px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.15px;
    text-transform: capitalize;

    &.required::after {
      padding-top: 6px;
      content: ' *';
      color: #113e63;
      font-size: 24px;
    }
  }

  input {
    font-size: 14px;
    padding: 3px 6px;
    width: 100%;
    height: 34px;
    background-color: #fff;
  }

  &.required {
    input {
      border: 1px solid #c31212;
    }
  }

  &.focused {
    input {
      color: #fff;
      border: 1px solid #457b9a;
      background-color: #b7dade;
      caret-color: #fff;
      opacity: 0.8;
    }
  }
`;
