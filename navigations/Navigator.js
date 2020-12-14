import React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  SendScreen,
  SettingsScreen,
  TransferScreen,
} from "../screen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";



const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Home"}
        // screenOptions={}
        tabBarOptions={{
          activeBackgroundColor: "#212b31",
          inactiveBackgroundColor: "#212b31",
          showLabel: false,
          safeAreaInsets: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          style: { height: Height * 0.11 },
          
        }}

      >
        <Tab.Screen
        
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="creditcard"
                size={30}
                color={focused ? "#caea75" : "white"}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="send"
                size={30}
                color={focused ? "#caea75" : "white"}
              />
            ),
          }}
          name="Send"
          component={SendScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="qrcode"
                size={30}
                color={focused ? "#caea75" : "white"}
              />
            ),
          }}
          name="QRCode"
          component={TransferScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="swap-horizontal-bold"
                size={30}
                color={focused ? "#caea75" : "white"}
              />
            ),
          }}
          name="Transfer"
          component={TransferScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <SimpleLineIcons
                name="settings"
                size={30}
                color={focused ? "#caea75" : "white"}
              />
            ),
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default Navigator;
