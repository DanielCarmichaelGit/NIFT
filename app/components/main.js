import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    Platform,
    ScrollView,
    SafeAreaView,
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
                            <View style={styles.cardBox}>
                                <View style={styles.cardBoxCardText}>
                                    <View style={{ alignSelf: "center" }}>
                                        <Text style={styles.cardTextTitle}>
                                            Heres Why We Exist
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.cardBoxCardVert}>
                                    <View style={styles.cardText}>
                                        <Text style={styles.cardTextTitle}>
                                            $338 Million Market Cap
                                        </Text>
                                        <Text style={styles.cardTextSubtext}>
                                            The current NFT market is measured in trade volume and not content creation.
                                            However, increasing content volume increases trade volume.
                                        </Text>
                                    </View>
                                    <Text style={{ ...styles.cardTextSubtext, color: "gold", fontSize: 26, marginBottom: 30 }}>
                                        OUR PROCESS SCALES
                                    </Text>
                                </View>
                                <View style={styles.cardBoxCardVert}>
                                    <View style={styles.cardImage}>
                                        <Image resizeMode="cover" style={styles.cardBoxImage}
                                            source={require("../../assets/market.jpg")} />
                                    </View>
                                    <View style={styles.cardText}>
                                        <Text style={{ ...styles.cardTextSubtext, color: "gold", fontSize: 26, marginBottom: 30 }}>
                                            ACCESSABILITY = GROWTH
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.cardBoxCardVert}>
                                    <View style={styles.cardImage}>
                                        <Image resizeMode="contain" style={styles.cardBoxImage}
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
                                <View style={styles.cardBoxCardVert}>
                                    <View style={styles.cardImage}>
                                        <Image resizeMode="contain" style={styles.cardBoxImage}
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
                                <Text style={styles.cardTextSubtext}>
                                    Today and every day, billions of people post, share, interact with, and
                                    promote content. Let's make tomorrow a new day by taking back ownership of content
                                    through digital asset creation.. NFTs. You deserve to own the content you produce.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardText}>
                                <Text style={styles.cardTextTitle}>
                                    Create. Explore. Earn.
                                </Text>
                                <Text style={styles.cardTextSubtext}>
                                    First and foremost, NIFT exhists to be a place where you can create content. NFTs
                                    are unattainable to the average social media user. If it isn't the lack of knowledge,
                                    its the minting costs.
                                </Text>
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
        backgroundColor: "white",
        //backgroundColor: "#e6e6fa"
    },
    cardContainer: {
        width: width - 30,
        height: "auto",
        backgroundColor: "transparent",
        marginHorizontal: 15,
        marginVertical: 15,
        alignContent: "center"
    },
    card: {
        flexDirection: platformOS === "ios" | "android" ? "column" : "row",
        width: platformOS === "ios" | "android" ? width - 30 : width - 50,
        //height: platformOS === "ios" | "android" ? "auto" : "auto",
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
        //width: platformOS === "ios" | "android" ? "auto" : "auto",
        //height: platformOS === "ios" | "android" ? "auto" : "auto",
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
        //width: platformOS === "ios" | "android" ? "100%" : "100%",
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
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#e6e6fa",
        backgroundColor: "white"
    },
    cardBoxCard: {
        flexDirection: platformOS === "ios" | "android" ? "column" : "row",
        width: platformOS === "ios" | "android" ? width - 30 : "auto",
        //height: platformOS === "ios" | "android" ? "auto" : "auto",
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
        //height: platformOS === "ios" | "android" ? "auto" : "auto",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: platformOS === "ios" | "android" ? 0 : 10,
        backgroundColor: "white"
    },
    cardBoxCardVert: {
        //flexDirection: platformOS === "ios" | "android" ? "column" : "row",
        width: platformOS === "ios" | "android" ? width - 30 : "40%",
        //height: platformOS === "ios" | "android" ? "auto" : "auto",
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
