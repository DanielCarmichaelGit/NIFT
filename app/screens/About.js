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

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

})