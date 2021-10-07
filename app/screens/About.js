import React from "react"
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    SafeAreaView
} from "react-native"

import HeaderComponent from "./app/components/header"

export default class AboutUs extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <HeaderComponent />
                <ScrollView vertical={true}>
                    <Text style={styles.cardTextSubtext}>
                        Hello
                    </Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    app: {
        height: "auto",
        width: width,
        backgroundColor: "#e6e6fa"
    },
    main: {
        height: "auto",
        width: width,
        backgroundColor: "red",
        backgroundColor: "#e6e6fa"
    },
    cardContainer: {
        width: width - 30,
        height: "auto",
        //backgroundColor: "blue",
        marginHorizontal: 15,
        marginVertical: 15,
        alignContent: "center"
    },
    card: {
        flexDirection: platformOS === "ios" | "android" ? "column" : "row",
        width: platformOS === "ios" | "android" ? width - 30 : width - 50,
        height: platformOS === "ios" | "android" ? "auto" : "auto",
        borderWidth: 1,
        borderColor: "#e6e6fa",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: platformOS === "ios" | "android" ? 0 : 10,
        backgroundColor: "white"
    },
    cardVert: {
        //flexDirection: platformOS === "ios" | "android" ? "column" : "column",
        width: platformOS === "ios" | "android" ? width - 30 : width - 50,
        height: platformOS === "ios" | "android" ? "auto" : "auto",
        borderWidth: 1,
        borderColor: "#e6e6fa",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: platformOS === "ios" | "android" ? 0 : 10,
        backgroundColor: "white"
    },
    cardText: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 15,
    },
    cardTextTitle: {
        fontSize: platformOS === "ios" | "android" ? 30 : 40,
        fontWeight: "600",
        marginBottom: platformOS === "ios" | "android" ? 0 : 40,
        marginTop: 20,
        color: "#9898ff"
    },
    cardTextSubtext: {
        fontSize: platformOS === "ios" | "android" ? 24 : 34,
        fontWeight: "400",
        textAlign: "center",
        marginHorizontal: 5,
        marginBottom: 5,
        marginTop: platformOS === "ios" | "android" ? 0 : -30
    },
    cardImage: {
        flex: 2,
        width: platformOS === "ios" | "android" ? "100%" : "800",
        height: platformOS === "ios" | "android" ? 250 : 560,
        borderRadius: 10,
        marginVertical: 10
        //backgroundColor: "orange"
    },
    cardVertImage: {
        flex: 2,
        width: platformOS === "ios" | "android" ? "100%" : "100%",
        height: platformOS === "ios" | "android" ? 250 : 560,
        borderRadius: 10,
        marginVertical: 10
        //backgroundColor: "orange"
    },
    cardBox: {
        flexWrap: "wrap",
        flexDirection: "row",
        width: width - 50,
        height: "auto",
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#e6e6fa",
        backgroundColor: "white"
    },
    cardBoxCard: {
        flexDirection: platformOS === "ios" | "android" ? "column" : "row",
        width: platformOS === "ios" | "android" ? width - 30 : "auto",
        height: platformOS === "ios" | "android" ? "auto" : "auto",
        borderWidth: 1,
        borderColor: "#e6e6fa",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: platformOS === "ios" | "android" ? 0 : 10,
        backgroundColor: "white"
    },
    cardBoxCardText: {
        flexDirection: platformOS === "ios" | "android" ? "column" : "row",
        width: platformOS === "ios" | "android" ? width - 30 : "100%",
        height: platformOS === "ios" | "android" ? "auto" : "auto",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: platformOS === "ios" | "android" ? 0 : 10,
        backgroundColor: "white"
    },
    cardBoxCardVert: {
        //flexDirection: platformOS === "ios" | "android" ? "column" : "row",
        width: platformOS === "ios" | "android" ? width - 30 : "40%",
        height: platformOS === "ios" | "android" ? "auto" : "auto",
        borderWidth: 1,
        borderColor: "#e6e6fa",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: platformOS === "ios" | "android" ? 0 : 10,
        backgroundColor: "white"
    },
    cardBoxImage: {
        flex: 2,
        width: platformOS === "ios" | "android" ? "100%" : 640,
        height: platformOS === "ios" | "android" ? 250 : 400,
        borderRadius: 10,
        marginVertical: 10
        //backgroundColor: "orange"
    },
    textGroup: {
        width: platformOS === "ios" | "android" ? "100%" : "50%",
        height: platformOS === "ios" | "android" ? 250 : 500,
        alignContent: "center",
        justifyContent: "space-evenly"
    }
})