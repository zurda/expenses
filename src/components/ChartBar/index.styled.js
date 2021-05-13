import styled from "styled-components";

export const ChartBarStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerStyled = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #b1cfab;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FillStyled = styled.div`
  background-color: #2a7417;
  width: 100%;
  transition: all 0.3s ease-out;
`;

export const LabelStyled = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
