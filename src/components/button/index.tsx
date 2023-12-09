/* eslint-disable react-native/no-inline-styles */
import { Text, TouchableOpacity } from "react-native";
import { Props } from "./types";
import { dark, white } from "../../utils/colors";
import { styles } from "./styles";
const Button = ({
  text,
  onPress,
  containerStyles,
  height = 40,
  width = 180,
  backgroundColor = dark,
  textColor = white,
  disabled = false,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled ? true : false}
      onPress={onPress}
      style={{
        ...styles.container,
        ...containerStyles,
        backgroundColor,
        width,
        height,
        opacity: disabled ? 0.5 : 1,
        zIndex: 10,
        elevation: 10,
      }}
    >
      <Text style={{ color: textColor, fontWeight: "500" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
