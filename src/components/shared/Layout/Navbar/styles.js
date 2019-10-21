import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 11
  },
  hamburgerBtn: {
    width: 50,
  },    
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'flex-end'
  }
});
