import { View } from "react-native";
import Input from "../input";
import { SearchBarTypes } from "./type";
import { InputSearchStyles } from "./style";
import { useState } from "react";
import Button from "../button";
import { red } from "../../utils/colors";

export const SearchBar = ({ onSearch }: SearchBarTypes) => {
  const [textCityValue, setTextCityValue] = useState("");
  const [textCountryValue, setTextCountryValue] = useState("PE");
  const searchEvent = () => {
    onSearch(textCountryValue, textCityValue);
  };
  return (
    <View style={InputSearchStyles.container}>
      {/* <Input
        containerStyle={InputSearchStyles.inputCountryContainer}
        value={textCountryValue}
        label="Ingresa Codigo Pais"
        onChangeText={(v: any) => {
          setTextCountryValue(v);
        }}
      /> */}
      <Input
        containerStyle={InputSearchStyles.inputCityContainer}
        value={textCityValue}
        label="Ingresa nombre de la ciudad"
        onChangeText={(v: any) => {
          setTextCityValue(v);
        }}
      />
      <Button
        backgroundColor={red}
        containerStyles={InputSearchStyles.buttonContainer}
        onPress={searchEvent}
        text="Buscar informacion"
      />
    </View>
  );
};
