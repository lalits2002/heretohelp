import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loadscreen from '../component/home/Load'; 
import Volunteer  from '../component/home/Volunteer'; 
import Victim  from '../component/home/Help-need';
import Handycraft from '../component/com/Handycraft';


const Stack = createStackNavigator();

function Screen() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}>
        <Stack.Screen name="Home" component={Loadscreen} />
        <Stack.Screen name="Details" component={Volunteer} />
        <Stack.Screen name="Victim" component={Victim} />
        <Stack.Screen name="Handycraft" component={Handycraft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;