import React from 'react'
import {
    TextInput,
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native'

const platformOS = Platform.OS
const { height, width } = Dimensions.get("window")

const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("Useless Text");
}

export default class InputField extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: "auto"/*platformOS === "ios" | "android" ? width - 10 : width - 20*/,
        height: 46,
        marginHorizontal: platformOS === "ios" | "android" ? 5 : 10,
        marginVertical: 2,
        borderRadius: 5,
        backgroundColor: "white",
        color: "black"
    },
});