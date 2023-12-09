export interface Props {
  text: string;
  onPress: () => void;
  containerStyles?: any;
  height?: number | string;
  width?: number | string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
