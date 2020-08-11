import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loadscreen from '../component/home/Load'; 
import Volunteer  from '../component/home/Volunteer'; 
import Victim  from '../component/home/Help-need';
import Handycraft from '../component/com/Handycraft';


const AnyConstant = createStackNavigator();

function Screen() {
  return (
    <NavigationContainer>
      <AnyConstant.Navigator 
      screenOptions={{
      headerShown: false
      }}>
        <AnyConstant.Screen name="Home" component={Loadscreen} />
        <AnyConstant.Screen name="Details" component={Volunteer} />
        <AnyConstant.Screen name="Victim" component={Victim} />
        <AnyConstant.Screen name="Handycraft" component={Handycraft} />
      </AnyConstant.Navigator>
    </NavigationContainer>
  );
}

export default Screen;