import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import ICON from "./assets/favicon.png";
import ProfileScreen from "./screens/ProfileScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

console.ignoredYellowBox = [ "Warning: Each", "Warning: Failed" ];

function LogoTitle ()
{
  return (
    <Image
      style={ { width: 50, height: 50 } }
      source={ ICON }
    />
  );
}

export default function App ()
{
  return (
    <NavigationContainer theme={ DarkTheme }>
      <Tab.Navigator
        initialRouteName="Feed"
      >
        <Tab.Screen
          name="Home"
          component={ HomeScreen }
          options={ {
            headerTitle: "Gerry's Portfolio",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "white",

            },
            headerTitleAlign: "left",
            headerRight: () => (
              <MaterialCommunityIcons
                name="logout"
                size={ 30 }
                color="white"
                style={ { marginRight: 10 } }
              />
            ),

            tabBarIcon: ( { color, size } ) => (
              <MaterialCommunityIcons name="home" color={ color } size={ size } />
            ),
          } }
        />
        <Tab.Screen
          name="Profile"
          component={ ProfileScreen }
          options={ {
            headerTitle: "Gerry's Portfolio",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "white",

            },
            headerTitleAlign: "left",
            headerRight: () => (
              <MaterialCommunityIcons
                name="logout"
                size={ 30 }
                color="white"
                style={ { marginRight: 10 } }
              />
            ),

            tabBarIcon: ( { color, size } ) => (
              <MaterialCommunityIcons name="account" color={ color } size={ size } />
            ),
          } }
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
