import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: '#FCD6C5',
  },
  calculatorContainer :{
    flex:1,
    paddingHorizontal: 20,
    justifyContent: "flex-end"
  },
  result:{
    color: '#CC004B',
    fontSize: 60,
    textAlign: "right",
    paddingHorizontal: 10,
    marginBottom:10
  },
  row:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  smallResult:{
    color: 'rgba(204, 0, 75, 0.5)',
    fontSize: 30,
    textAlign: "right",
    paddingHorizontal: 10,
  },

});