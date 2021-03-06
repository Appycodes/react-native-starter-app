import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home/home";
import About from "../screens/about/about";
import Contact from "../screens/contact/contact";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",

};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} options={{ headerLeft: () => null, title: 'Test' }} />
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ContactStackNavigator };