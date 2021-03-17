import React, { Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import System from "./src/screens/System";
import Endocrine from "./src/screens/Endocrine";
import Endocrine2 from "./src/screens/Endocrine2"

const Stack = createStackNavigator();

/**
 * Core underlying app structure to provide routing support. Adds
 * support for routing through the different screens available in
 * the app. If new screens are added, it should be added as a new
 * Stack.Screen to add support for that screen as well.
 */
export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} /> 

          <Stack.Screen name="Endocrinology" component={Endocrine} />
          <Stack.Screen name="Hepatology" component={Endocrine2} />

            <Stack.Screen name="Cardiology" component={System} />
       
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}