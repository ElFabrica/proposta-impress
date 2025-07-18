import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingVertical:16,
    flex:1
  },
  container:{
    paddingHorizontal: 20,
    gap: 16,
    flex:1,
    paddingBottom:80
    
  },
    footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: 'gray',
    }
});