import {
  KeyboardType,
  KeyboardTypeAndroid,
  KeyboardTypeIOS,
} from "react-native";

export interface Props {
  label?: string;
  value: string;
  onChangeText: (v: string) => void;
  isSecure?: boolean;
  isDisabled?: boolean;
  inputStyle?: any;
  labelStyle?: any;
  containerStyle?: any;
  containerInputStyle?: any;
  containerLabelStyle?: any;
  keyboardType?: KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;
}
