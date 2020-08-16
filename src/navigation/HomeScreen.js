import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Loadscreen from '../component/home/Load'; 
import Volunteer  from '../component/home/Volunteer'; 
import Victim  from '../component/home/Help-need';
import Social_Screen from '../component/socialise/socialise-screen';
import Pet_Screen from '../component/pet-care/pet';
import HandyWork_Screen from '../component/handywork-screen/handywork-screen';
import Transport_screen from '../component/transportation/transportation';



const HomeConstant = createStackNavigator();


function SocialScreen() {
  return(
    <HomeConstant.Navigator >
      <HomeConstant.Screen name="social_screen1" component={Social_Screen} />
    </HomeConstant.Navigator>
  );
};

function Petscreen() {
  return(
    <HomeConstant.Navigator >
      <HomeConstant.Screen name="PetScreen1" component={Pet_Screen} />
    </HomeConstant.Navigator>
  );
};

function HandyWorkScreen() {
  return(
    <HomeConstant.Navigator >
      <HomeConstant.Screen name="handyWorkScreen1" component={HandyWork_Screen} />
    </HomeConstant.Navigator>
  );
};

function TransportScreen() {
  return(
    <HomeConstant.Navigator >
      <HomeConstant.Screen name="transport_screen1" component={Transport_screen} />
    </HomeConstant.Navigator>
  );
};



function HomeScreen() {
  return (
    <NavigationContainer>
      <HomeConstant.Navigator screenOptions={{headerShown: false}}>
        <HomeConstant.Screen name="Home" component={Loadscreen} />
        <HomeConstant.Screen name="vol" component={Volunteer} />
        <HomeConstant.Screen name="Victim" component={Victim} />
        <HomeConstant.Screen name="social_screen" component={SocialScreen} />
        <HomeConstant.Screen name="pet_screen" component={Petscreen} />
        <HomeConstant.Screen name="handywork_screen" component={HandyWorkScreen} />
        <HomeConstant.Screen name="transport_screen" component={TransportScreen} />
      </HomeConstant.Navigator>
     
    </NavigationContainer>
  );
}

export default HomeScreen;