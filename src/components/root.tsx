// Importa las bibliotecas necesarias
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "../pages/home";
import { ItemDescriptionPage } from "../pages/itemDescription";

// Configura el navegador
const Stack = createStackNavigator();

// Componente de navegación principal
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{ headerTitle: "Informacion", headerBackTitle: "Atras" }}
          name="ItemDescription"
          component={ItemDescriptionPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
