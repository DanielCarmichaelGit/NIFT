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


const { height, width } = Dimensions.get("window");
import SearchComponent from "./searchBar";

export default class Header extends React.Component {
    render() {
        const platformOS = Platform.OS;
        if (platformOS == 'web') {
            return (
                <View style={styles.header}>
                    <View style={styles.logoAndText}>
                        <TouchableOpacity style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("../../assets/N.png")} resizeMode="contain" />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>
                            OWN YOUR CONTENT
                          </Text>
                    </View>
                    <SearchComponent>
                    </SearchComponent>
                    <ScrollView style={styles.headerScroll} horizontal={true}>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                ABOUT US
                              </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                FUNDRAISING
                              </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                THE TEAM
                              </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                THE TECH
                              </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                JOIN THE TEAM
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                JOIN THE WAITLIST
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                CONTACT US
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                BUSINESS MODEL
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )
        } else if (platformOS == "ios") {
            return (
                <View style={styles.header}>
                    <View style={styles.logoAndText}>
                        <TouchableOpacity style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("../../assets/N.png")} resizeMode="contain" />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>
                            OWN YOUR CONTENT
                        </Text>
                    </View>
                    <ScrollView style={styles.headerScroll} horizontal={true}>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                ABOUT US
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                FUNDRAISING
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                THE TEAM
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                THE TECH
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                JOIN THE TEAM
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                JOIN THE WAITLIST
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                CONTACT US
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.buttonText}>
                                BUSINESS MODEL
                            </Text>
                        </TouchableOpacity>
                        <SearchComponent>
                        </SearchComponent>
                    </ScrollView>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlignVertical: "center"
    },
    header: {
        width: '100%',
        height: 70,
        flexDirection: "row",

    },
    headerButton: {
        width: "auto",
        height: 70,
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        flexDirection: "row"
    },
    headerScroll: {
        width: width - 150,
        height: 70,
        flexDirection: "row",
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