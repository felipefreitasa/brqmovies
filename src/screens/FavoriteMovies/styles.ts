import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 24px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;