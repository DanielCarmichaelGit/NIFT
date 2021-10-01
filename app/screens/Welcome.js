import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from "react-native"
const { height, width } = Dimensions.get("window")

function Welcome() {
    return (
        <SafeAreaView>
            <View>

            </View>
        </SafeAreaView>
    );
}

export default Welcome;


const styles = StyleSheet.create({
    header: {
        width: width,
        height: height / 7,
        alignContent: "flex-start",
        alignSelf: "flex-start",
        backgroundColor: "#dddddd",

    }
})