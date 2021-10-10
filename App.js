import React from "react"
import {
  SafeAreaView,
  Dimensions,
  StyleSheet
} from "react-native"

import HeaderComponent from "./app/components/header"
import Main from "./app/components/main"
import { Navigation } from "react-native-navigation"
import { } from "react-native-gesture-handler"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AboutUs from "./app/screens/About"

const { height, width } = Dimensions.get("window")
const AppNav = createNativeStackNavigator({
  screen: AboutUs,
  screen: 
})


export default function App() {
  return (
    <SafeAreaView style={styles.parent}>
      <HeaderComponent />
      <Main />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  parent: {
    width: width,
    height: height,
    alignItems: "center",
  }
})

