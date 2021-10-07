import React from "react"
import {
  SafeAreaView,
  Dimensions,
  StyleSheet
} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { height, width } = Dimensions.get("window")
const Stack = createNativeStackNavigator();

import HeaderComponent from "./app/components/header"
import Main from "./app/components/main"


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