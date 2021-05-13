import styled from "styled-components";

export const NewExpenseStyled = styled.div`
  background-color: #eba119;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

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
