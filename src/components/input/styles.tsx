import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    position: "relative",
  },
  labelContainer: {
    position: "absolute",
    top: 25,
    marginLeft: 16,
    backgroundColor: "#FFF",
    paddingRight: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },

  input: {
    position: "absolute",
    top: 10,
    paddingLeft: 12,
    zIndex: 100,
    height: 50,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
});
export default Styles;
