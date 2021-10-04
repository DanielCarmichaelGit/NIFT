import React from "react"
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    ScrollView,
    Platform
} from "react-native"
import NewsLetter from "./newsLetter";

const { height, width } = Dimensions.get("window");
const platformOS = Platform.OS

export default class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.footerColumnParent}>
                    <View style={styles.footerColumn}>
                        <Text style={styles.footerTitleText}>
                            GET OUR APP
                                </Text>
                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerText}>
                                iOS - Coming Soon (~late 2022)
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerText}>
                                Android - Coming Soon (~late 2022)
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerText}>
                                Web - Coming Soon (~mid 2022)
                                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerColumn}>
                        <Text style={styles.footerTitleText}>
                            OUR TECH
                            </Text>
                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerText}>
                                NFT BLOCKCHAIN - Coming Soon (~late 2022)
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerText}>
                                SOCIAL PLATFORM - Coming Soon (~mid 2022)
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.footerText}>
                                SOCIAL TOKENIZATION - Coming Soon (~late 2022 - early 2023)
                                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerColumn}>
                        <View>
                            <Text style={styles.footerText}>
                                Join Our Newsletter and be Kept in The Loop When We Launch!
                            </Text>
                        </View>
                        <View style={styles.footerNewsLetter}>
                            <NewsLetter />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flexWrap: "wrap",
        width: width,
        height: platformOS === "ios" | "android" ? "auto" : 350,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: platformOS === "ios" | "android" ? 0 : 0,
        marginLeft: 0,
        marginRight: 0
    },
    footerParent: {

    },
    footerTitleText: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlignVertical: "center"
    },
    footerText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlignVertical: "center"
    },
    footerNewsLetterText: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlignVertical: "center",
        marginVertical: 5
    },
    footerButton: {
        width: "auto",
        height: 70,
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        flexDirection: "row"
    },
    footerColumn: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    footerColumnParent: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: null,
        height: null
    },
    footerNewsLetter: {
        width: null,
        height: 48,
        marginBottom: 80
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoContainer: {
        height: 50,
        width: 50,
    },
    logoAndText: {
        width: 150,
        height: 70,
        color: "purple",
        flexDirection: "row",
        marginLeft: 2,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    searchBox: {
        width: 200,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
    },
    searchBoxIcon: {
        width: 40,
        height: 56
    },
    searchBoxInput: {
        width: 156,
        height: 46,
        marginLeft: 40,
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
    }
})