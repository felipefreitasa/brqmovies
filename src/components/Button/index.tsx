import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  disabled?: boolean;
};

export function Button({ title, disabled, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.8}
      disabled={disabled}
      {...rest}
    >
      <Title disabled={disabled}>{title}</Title>
    </Container>
  );
}
