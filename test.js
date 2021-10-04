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


"node_modules/react-native-safe-area-context": {
    "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/react-native-safe-area-context/-/react-native-safe-area-context-3.2.0.tgz",
            "integrity": "sha512-k2Nty4PwSnrg9HwrYeeE+EYqViYJoOFwEy9LxL5RIRfoqxAq/uQXNGwpUg2/u4gnKpBbEPa9eRh15KKMe/VHkA==",
                "peerDependencies": {
        "react": "*",
            "react-native": "*"
    } 12088







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

//expo verison ~42.0.1"






####################################################################################

import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
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
        <View style={styles.header}>
            <View>

            </View>
            <View>

            </View>
            <View>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        </View>
    );
}








<ScrollView style={styles.headerScroll} horizontal={true}>
    <View style={styles.headerButtonCluster}>
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
    </View>
</ScrollView>







####################################################################################


<View style={styles.headerButton}>
    <View style={styles.searchBox}>
        <Image style={styles.searchBoxIcon} source={require("./assets/search.png")}
            resizeMode="contain" />

    </View>
</View>



####################################################################################





if (platformOS == "web") {
    return (
        <SafeAreaView>
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.logoAndText}>
                        <TouchableOpacity style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("./assets/NIFT-n.png")} resizeMode="contain" />
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
                    </ScrollView>
                </View>
                <View>

                </View>
                <View>

                </View>
            </View>
        </SafeAreaView>
    )
} else if (platformOS == "ios") {
    return (
        <SafeAreaView>
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.logoAndText}>
                        <TouchableOpacity style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("./assets/NIFT-n.png")} resizeMode="contain" />
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
                        <SearchComponent>
                        </SearchComponent>
                    </ScrollView>
                </View>
                <View>

                </View>
                <View>

                </View>
            </View>
        </SafeAreaView>
    )
}
}

export default App;

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
    main: {
        width: '100%',
        height: height,
        alignItems: 'center',
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



####################################################################################







} else if (platformOS == "ios") {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.header}>
                    <View style={styles.logoAndText}>
                        <TouchableOpacity style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("./assets/N.png")} resizeMode="contain" />
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
                        <SearchComponent>
                        </SearchComponent>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}















##################################################################################
if (platformOS == "web") {
    return (
        <SafeAreaView>
            <View style={styles.parent}>
                <View style={styles.header}>
                    <View style={styles.logoAndText}>
                        <TouchableOpacity style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("./assets/N.png")} resizeMode="contain" />
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
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
} else if (platformOS == "ios") {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.header}>
                    <View style={styles.logoAndText}>
                        <TouchableOpacity style={styles.logoContainer}>
                            <Image style={styles.logo} source={require("./assets/N.png")} resizeMode="contain" />
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
                        <SearchComponent>
                        </SearchComponent>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}