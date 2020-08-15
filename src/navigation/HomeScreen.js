import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loadscreen from '../component/home/Load'; 
import Volunteer  from '../component/home/Volunteer'; 
import Victim  from '../component/home/Help-need';
import Pet from '../component/home/Pet';
import PetScreen from '../component/pet-care/pet';
import Transport_screen from '../component/transportation/transportation';
import Social_Screen from '../component/socialise/socialise-screen';


const HomeConstant = createStackNavigator();
const VolunteerConstant = createStackNavigator();

function Volunteer_Screen() {
  return (
    <VolunteerConstant.Navigator mode='modal' screenOptions={{headerShown: false}}>
      <VolunteerConstant.Screen name='volunteer' component={Volunteer} />
    </VolunteerConstant.Navigator>
  );
};


function HomeScreen() {
  return (
    <NavigationContainer>
      <HomeConstant.Navigator screenOptions={{headerShown: false}}>
        <HomeConstant.Screen name="Home" component={Loadscreen} />
        <HomeConstant.Screen name="vol" component={Volunteer_Screen} />
        <HomeConstant.Screen name="Victim" component={Victim} />
      </HomeConstant.Navigator>
     
    </NavigationContainer>
  );
}

export default HomeScreen;