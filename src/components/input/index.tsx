/* eslint-disable react-native/no-inline-styles */
import { Animated, View, TextInput, Text } from "react-native";
import { Props } from "./types";
import Styles from "./styles";
import { useEffect, useRef, useState } from "react";
import { blue, dark } from "../../utils/colors";

const Input = ({
  label = "",
  value,
  containerStyle = {},
  onChangeText,
  isSecure = false,
  isDisabled = false,
  keyboardType = "default",
}: Props) => {
  const moveLabel = useRef(new Animated.Value(24)).current;
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const moveLabelHandler = (isTop = false) => {
    if (isTop) {
      Animated.timing(moveLabel, {
        useNativeDriver: false,
        toValue: 0,
        duration: 250,
      }).start();
    } else {
      Animated.timing(moveLabel, {
        useNativeDriver: false,
        toValue: 24,
        duration: 250,
      }).start();
    }
  };

  const handlerFocus = () => {
    setIsFocus(true);
    setIsBlur(false);
    moveLabelHandler(true);
  };
  const handlerBlur = () => {
    setIsBlur(true);
    setIsFocus(false);
    if (value.length === 0) {
      moveLabelHandler(false);
    }
  };
  useEffect(() => {
    if (value.length > 0) {
      moveLabelHandler(true);
    } else {
      if (!isFocus && isBlur) {
        moveLabelHandler(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <View style={{ ...Styles.container, ...containerStyle }}>
      <Animated.View
        style={{
          ...Styles.labelContainer,
          top: moveLabel,
          zIndex: isFocus || value.length > 0 ? 900 : 1,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: isFocus || value.length > 0 ? blue : dark,
          }}
        >
          {label}
        </Text>
      </Animated.View>
      <TextInput
        keyboardType={keyboardType}
        autoComplete="off"
        autoCorrect={false}
        selectionColor={blue}
        autoCapitalize={"none"}
        editable={!isDisabled}
        onBlur={handlerBlur}
        secureTextEntry={isSecure ? true : false}
        onFocus={handlerFocus}
        onChangeText={(text) => onChangeText(text)}
        allowFontScaling={false}
        style={{
          ...Styles.input,
          borderColor: isFocus || value.length > 0 ? blue : dark,
          color: isFocus || value.length > 0 ? blue : dark,
        }}
        value={value}
      />
    </View>
  );
};

export default Input;
