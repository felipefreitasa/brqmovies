import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppBar as AppBarMaterial } from "@react-native-material/core";

export function AppBar() {

  const { COLORS, FONTS } = useTheme();

  return (
    <AppBarMaterial
      title="BRQ Movies"
      color={COLORS.BACKGROUND}
      trailing={
        <TouchableOpacity style={{ width: 40 }}>
          <MaterialCommunityIcons
            size={24}
            name="dots-vertical"
            color={COLORS.WHITE}
          />
        </TouchableOpacity>
      }
      titleStyle={{ fontFamily: FONTS.REGULAR, fontSize: 18 }}
    />
  );
}
