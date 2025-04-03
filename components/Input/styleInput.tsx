import styled from "styled-components/native";

type camposDeTextoProps = {
    erro: boolean
}


 export const CampoTexto = styled.TextInput<camposDeTextoProps>`
  width: 344px;
  height: 60px;
  background-color: #edf2f4;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  color: #000;
  /* border-color: #88cfec; */
  border: 2px solid ${({ erro }: { erro: boolean }) => erro ? '#c30323' : '#88cfec'};
  border-width: 3px;
`;
