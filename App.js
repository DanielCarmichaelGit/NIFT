import React from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from "react-native"

const { height, width } = Dimensions.get("window")

function App() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image source={require("./assets/NIFT-n.png")} />
            </TouchableOpacity>
          </View>
          <View>

          </View>
          <View>
            <TouchableOpacity>
              <Text>
                ABOUT US
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                FUNDRAISING
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                THE TEAM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                THE TECH
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>

        </View>
        <View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: 'blue',
    //marginVertical: ,
    //marginHorizontal: ,
    //marginTop: ,
    //marginBottom: ,
    //marginLeft: ,
    //marginRight: ,
  },
  logoContainer: {
    height: 50,
    width: 50
  },
  main: {
    width: '100%',
    height: height,
    alignItems: 'center',
  },
})