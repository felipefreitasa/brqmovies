import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  max-width: 50%;
  padding: 0 8px;
`

export const Poster = styled.Image`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`