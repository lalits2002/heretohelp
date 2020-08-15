import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Loadscreen from '../component/home/Load'; 
import Volunteer  from '../component/home/Volunteer'; 
import Victim  from '../component/home/Help-need';
import PetScreen from '../component/home/pet1';
import Transport_screen from '../component/transportation/transportation';
import Social_Screen from '../component/socialise/socialise-screen';


const HomeConstant = createStackNavigator();




function HomeScreen() {
  return (
    <NavigationContainer >
      <HomeConstant.Navigator screenOptions={{headerShown: false}}>
        <HomeConstant.Screen name="Home" component={Loadscreen} />
        <HomeConstant.Screen name='volunteer' component={Volunteer} />
        <HomeConstant.Screen name="Victim" component={Victim} />
      </HomeConstant.Navigator>
     
    </NavigationContainer>
  );
}

export default HomeScreen;