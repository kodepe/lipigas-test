import { StyleSheet } from "react-native";
import { red } from "../../utils/colors";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 24,
    color:red
  },
});
