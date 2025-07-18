import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    container: {
        height: "auto",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderColor: "#AAAAAA",
        borderWidth: 1,
        borderRadius: 10,
        gap: 20,
        backgroundColor:"#F6F6F6",
        width: "100%"
    },
    title: {
        fontSize: 16,
        color: "#333333",
        fontWeight:"600"

    },
    subtitles: {
        fontSize: 12,
        color: "#333333",
    },
    datas: {
        fontSize: 14,
        color: "#333333",
    },
    header: {
        height: "auto",
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: "#EEEEEE",
        borderRadius: 8
    },
    desctiption: {
        fontSize: 10,
        color: "#333333",
    },
    footer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    containerFooter: {
        borderWidth: 1,
        borderColor: "#33333",
        borderRadius: 5,
        padding:5

    },valUnit:{
            fontSize: 12
        },
    
    total: {
        fontSize: 14,
        color: "#333333",
    }
})