import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding:  20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;