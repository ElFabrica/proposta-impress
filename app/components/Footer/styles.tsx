import { StyleSheet } from "@react-pdf/renderer";
import { group } from "console";


export const styles = StyleSheet.create({

  container:{
    
    paddingVertical: 20
  },
  content:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center"
  },

  title: {
    fontWeight: "500",
    fontSize: 16,
    borderRadius: 8,
    color: "#333333",
  },
  groupTotal:{
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    alignItems:"center",
    paddingVertical: 8,
    paddingHorizontal:16,
    gap:4
  },
    Final:{
      flexDirection:"row"
    },
  
  value: {
    fontSize: 16,
    fontWeight: "700",
  },
});