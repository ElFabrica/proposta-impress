import { StyleSheet } from "@react-pdf/renderer";


export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    gap: 8,
  },
  container:{
    
    paddingVertical: 20
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
    fontWeight: "600",
  },
});