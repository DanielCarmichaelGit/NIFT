import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from "react-native"
import { MaterialIcons } from "expo-vector-icons"


export default function Header() {
    return (
        <View style={styles.header}>
            {/*icon for header*/}
            <View>
                <Text style={styles.headerText}>
                    NIFT
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: "#FF206E"
    },
})