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
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  productSection: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 10,
    gap: 10,
  },
  title: {
    padding: 10,
    fontWeight: "700",
    fontSize: 14,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    color: "#6B6B6B",
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    color: "#2E2E2E",
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
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