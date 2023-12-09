import { Text, View } from "react-native";
import { ItemDescriptionStyles } from "./styles";

export const ItemDescriptionPage = ({ navigation, route }: any) => {
  const data = route.params.data;
  // console.log(JSON.stringify(data, null, 4));

  return (
    <View style={ItemDescriptionStyles.container}>
      <View style={ItemDescriptionStyles.cardContainer}>
        <View style={ItemDescriptionStyles.itemName}>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>{"Nombre"}</Text>
            <Text style={ItemDescriptionStyles.itemNameValue}>{data.name}</Text>
          </View>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>
              {"Codigo de pais"}
            </Text>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.sys.country}
            </Text>
          </View>
        </View>

        <View style={ItemDescriptionStyles.itemName}>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>
              {"Temperatura"}
            </Text>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.main.temp}
            </Text>
          </View>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>
              {"Se siente como: "}
            </Text>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.main.feels_like}
            </Text>
          </View>
        </View>

        <View style={ItemDescriptionStyles.itemName}>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>
              {"Temperatura minima"}
            </Text>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.main.temp_min}
            </Text>
          </View>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>
              {"Temperatura maxima"}
            </Text>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.main.temp_max}
            </Text>
          </View>
        </View>
        <View style={ItemDescriptionStyles.separator} />
        <View style={ItemDescriptionStyles.itemName}>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>{"Presion"}</Text>
          </View>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.main.pressure}
            </Text>
          </View>
        </View>
        <View style={ItemDescriptionStyles.itemName}>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>{"Humedad"}</Text>
          </View>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.main.humidity}
            </Text>
          </View>
        </View>
        <View style={ItemDescriptionStyles.itemName}>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameTitle}>
              {"Velocidad del viento"}
            </Text>
          </View>
          <View style={ItemDescriptionStyles.item}>
            <Text style={ItemDescriptionStyles.itemNameValue}>
              {data.wind.speed}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
