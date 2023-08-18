import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { TextInput, TextInputProps } from "@react-native-material/core";

type Props = TextInputProps & {
  onCleanInput: () => void;
  leadingIcon?: keyof typeof Feather.glyphMap;
};

export function Input({ leadingIcon, onCleanInput, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
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
        <TouchableOpacity activeOpacity={0.8} onPress={onCleanInput}>
          <Feather size={24} name="x-circle" color={COLORS.WHITE} />
        </TouchableOpacity>
      }
      {...rest}
    />
  );
}
