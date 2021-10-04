import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    Platform,
    ScrollView,
    SafeAreaView
} from 'react-native'
import Footer from "./footer"
import LottieView from 'lottie-react-native';

const platformOS = Platform.OS
const { height, width } = Dimensions.get("window")

export default class Main extends React.Component {
    render() {
        if (platformOS == "web") {
            return (
                <View style={styles.app}>
                    <ScrollView vertical={true} style={styles.main}>
                        <View style={styles.cardContainer}>
                            <View style={styles.card}>
                                <View style={styles.cardImage}>
                                    <Image resizeMode="cover" style={styles.cardImage}
                                        source={require("../../assets/socialMedia.png")} />
                                </View>
                                <View style={styles.cardText}>
                                    <Text style={styles.cardTextTitle}>
                                        Own Your Content
                                    </Text>
                                    <Text style={styles.cardTextSubtext}>
                                        Today and every day, billions of people post, share, interact with, and
                                        promote content. Let's make tomorrow a new day by taking back ownership of content
                                        through digital asset creation.. NFTs. You deserve to own the content you produce.
                                </Text>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.cardImage}>
                                    <Image resizeMode="cover" style={styles.cardImage}
                                        source={require("../../assets/socialMedia.png")} />
                                </View>
                                <View style={styles.cardText}>
                                    <Text style={styles.cardTextTitle}>
                                        Own Your Content
                                    </Text>
                                    <Text style={styles.cardTextSubtext}>
                                        Today and every day, billions of people post, share, interact with, and
                                        promote content. Let's make tomorrow a new day by taking back ownership of content
                                        through digital asset creation.. NFTs. You deserve to own the content you produce.
                                </Text>
                                </View>
                            </View>
                        </View>

                        <Footer />
                    </ScrollView>
                </View >
            )
        } else return (
            <View style={styles.app}>
                <ScrollView vertical={true} style={styles.main}>
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <View style={styles.cardImage}>
                                <LottieView source={require('../lottie/socialMedia.json')}
                                    autoPlay={false} />
                            </View>
                            <View style={styles.cardText}>
                                <Text style={styles.cardTextTitle}>
                                    Own Your Content
                                    </Text>
                                <Text>
                                    Today and every day, billions of people post, share, interact with, and
                                    promote content. Let's make tomorrow a new day by taking back ownership of content
                                    through digital asset creation.. NFTs. You deserve to own the content you produce.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardImage}>
                                <LottieView source={require('../lottie/socialMedia.json')}
                                    autoPlay={false} />
                            </View>
                            <View style={styles.cardText}>
                                <Text style={styles.cardTextTitle}>
                                    Own Your Content
                                    </Text>
                                <Text>
                                    Today and every day, billions of people post, share, interact with, and
                                    promote content. Let's make tomorrow a new day by taking back ownership of content
                                    through digital asset creation.. NFTs. You deserve to own the content you produce.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                    <Footer />
                </ScrollView>
            </View>
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
    },
    cardTextSubtext: {
        fontSize: platformOS === "ios" | "android" ? 24 : 34,
        fontWeight: "400",
        textAlign: "center"
    },
    cardImage: {
        flex: 2,
        width: platformOS === "ios" | "android" ? "100%" : "800",
        height: platformOS === "ios" | "android" ? 250 : 560,
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