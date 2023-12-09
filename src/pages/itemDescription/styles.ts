import { StyleSheet } from "react-native";
import { lightblue, white } from "../../utils/colors";

export const ItemDescriptionStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: white, padding: 24 },
  cardContainer: {
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: white,
    elevation: 5,
  },
  itemName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  item: { width: "50%" },
  itemNameTitle: { fontWeight: "200" },
  itemNameValue: { fontWeight: "500" },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: lightblue,
    marginBottom: 20,
  },
});
