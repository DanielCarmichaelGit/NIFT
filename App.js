import React from "react"
import {
  SafeAreaView,
  Dimensions,
  StyleSheet
} from "react-native"

const { height, width } = Dimensions.get("window")
import HeaderComponent from "./app/components/header"
import Main from "./app/components/main"
import LottieView from "lottie-react-native"


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