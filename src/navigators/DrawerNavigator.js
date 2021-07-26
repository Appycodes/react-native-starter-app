import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import DrawerContent from "./DrawerContent";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const sideMenuDisabledScreens = ['Contact', 'Password']

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabNavigator} options={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Contact'
                if (sideMenuDisabledScreens.includes(routeName))
                    return ({ swipeEnabled: false })
            }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;