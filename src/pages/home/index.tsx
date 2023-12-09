import { Alert, Text, View } from "react-native";
import { SearchBar } from "../../components/searchBar";
import { HomeStyles } from "./styles";
import { UseAxios } from "../../hooks/useAxios";

export const HomePage = ({ navigation }: any) => {
  const { getWeather } = UseAxios();
  const searchInformation = async (pais, ciudad) => {
    try {
      const response = await getWeather(
        ciudad.toLowerCase(),
        pais.toUpperCase()
      );
      // console.log(JSON.stringify(response, null, 4));
      if (
        response.data.sys.country.toLowerCase() != pais.toLowerCase() ||
        response.data.name.toLowerCase() != ciudad.toLowerCase()
      ) {
        Alert.alert(
          "Oh atencion",
          "Parece que el codigo de pais o ciudad ingresado no es valido"
        );
        return;
      }
      navigation.push("ItemDescription", { data: response.data });
    } catch (error) {
      Alert.alert(
        "Oh atencion",
        "Parece que la informacion ingresada no es validad"
      );
    }
  };
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>{"SunSplash"}</Text>
      <SearchBar onSearch={searchInformation} />
    </View>
  );
};
