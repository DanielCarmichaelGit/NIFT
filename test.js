return (
    <SafeAreaView>
        <View style={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.logoContainer}>
                    <Image source={require("./assets/NIFT-n.png")}
                        style={styles.headerLogo} />
                    <Text style={styles.headerText}>
                        IFT
                    </Text>
                </TouchableOpacity>
                <View style={styles.headerSearch}>
                </View>
                <View style={styles.headerSelector}>
                    <View style={styles.headerButtonCluster}>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.headerButtonText}>
                                About
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.headerButtonText}>
                                The Team
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.headerButtonText}>
                                Our Mission
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.parent}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
);




main: {
    flex: 1,
        marginTop: 0,
            backgroundColor: '#fff',
                alignItems: 'center',
  },
button: {
    width: '33%',
        height: 50,
            alignSelf: 'center',
                justifyContent: 'center',
                    //backgroundColor: 'white',
                    //marginVertical: ,
                    //marginHorizontal: ,
                    marginTop: 20,
                        //marginBottom: ,
                        //marginLeft: ,
                        //marginRight: ,
                        borderWidth: 2,
                            borderRadius: 10,
                                borderColor: '#FF206E',
  },
buttonText: {
    fontSize: 20,
        alignSelf: 'center',
            color: 'black',
  },
header: {
    flexDirection: "row",
        width: '90%',
            height: 70,
                justifyContent: "flex-start",
                    position: 'absolute',
                        marginHorizontal: "5%"
    //marginVertical: ,
    //marginHorizontal: ,
    //marginTop: ,
    //marginBottom: ,
    //marginLeft: ,
    //marginRight: ,
},
headerButton: {
    width: 120,
        height: 70,
            justifyContent: "center",
                alignContent: "center",
  },
headerButtonCluster: {
    flexDirection: "row",
        justifyContent: "flex-end",
            width: "40%",
                marginHorizontal: 10,
                    backgroundColor: "pink"
},
headerButtonText: {
    fontSize: 20,
        fontWeight: '400'
},
headerLogo: {
    width: 50,
        height: 50,
            alignSelf: "center",
                resizeMode: "contain"
},
headerSearch: {
    width: "60%",
        height: 70
},
headerSelector: {
    width: newWidth - 85,
        height: 70,
            backgroundColor: "red",
  },
headerText: {
    fontSize: 24,
        fontWeight: '700',
            alignSelf: 'center',
                color: 'black',
                    margin: -4
},
logoContainer: {
    width: 85,
        height: 70,
            justifyContent: "flex-start",
                flexDirection: "row",
                    backgroundColor: "gold"
},
parent: {
    width: width,
        height: height - 70,
            marginTop: 70,
  }








####################################################################################
import React from 'react';
import { isMobile } from 'react-device-detect';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Dimensions,
    Platform

} from 'react-native';
import { FontAwesome5 } from "expo-vector-icons"
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Navigation } from 'react-native-navigation';

const { height, width } = Dimensions.get("screen")
const newWidth = width * 0.9


const menu = {)


    export default function App() {
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <View>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                    <View>
                        <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }}
                            onPress={Navigation.createDrawerNavigator(
                            )}>
                            <FontAwesome5 name="bars" size={24} color="#FF206E" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.main}>

                </View>
            </SafeAreaView>

        )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        //marginVertical: ,
        //marginHorizontal: ,
        //marginTop: ,
        //marginBottom: ,
        //marginLeft: ,
        //marginRight: ,
    },
    main: {
        width: '100%',
        height: height - 70,
        alignItems: 'center',
    },

});

/*import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/

