import styled from "styled-components";

export const ControlsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;

export const ActionsStyled = styled.div`
  text-align: right;

  > button {
    font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #747474;
  background-color: #585858;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;
  }

  > button: hover, > button:active {
    background-color: #6f6872;
  border-color: #615e63;
  }
`;
