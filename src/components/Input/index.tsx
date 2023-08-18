import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { TextInput, TextInputProps } from "@react-native-material/core";

import { ErrorMessage } from "./styles";

type Props = TextInputProps & {
  onCleanInput: () => void;
  errorMessage?: string | null;
  leadingIcon?: keyof typeof Feather.glyphMap;
};

export function Input({
  leadingIcon,
  onCleanInput,
  errorMessage,
  ...rest
}: Props) {

  const { COLORS } = useTheme();

  const isInvalid = !!errorMessage;

  return (
    <View>
      <TextInput
        color={COLORS.PRIMARY}
        style={{ width: "100%" }}
        placeholderTextColor={COLORS.WHITE}
        inputStyle={{ color: COLORS.WHITE }}
        inputContainerStyle={{ backgroundColor: COLORS.BACKGROUND_SECONDARY }}
        leading={
          leadingIcon && (
            <Feather name={leadingIcon} size={24} color={COLORS.WHITE} />
          )
        }
        trailing={
          <TouchableOpacity onPress={onCleanInput} activeOpacity={0.8}>
            <Feather name="x-circle" size={24} color={COLORS.WHITE} />
          </TouchableOpacity>
        }
        {...rest}
      />

      {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </View>
  );
}
