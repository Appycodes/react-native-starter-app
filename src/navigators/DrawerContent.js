import React from 'react';
import { View, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Text>
                    Drawer point
                </Text>
            </DrawerContentScrollView>
        </View>
    );
}

export default DrawerContent;