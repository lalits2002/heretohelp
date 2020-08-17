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



const ScreenConstant = createStackNavigator();





function SocialScreen() {
  return(
    <ScreenConstant.Navigator >
      <ScreenConstant.Screen name="socialscreen1" component={Social_Screen} />
    </ScreenConstant.Navigator>
  );
};

function Petscreen() {
  return(
    <ScreenConstant.Navigator >
      <ScreenConstant.Screen name="PetScreen1" component={Pet_Screen} />
    </ScreenConstant.Navigator>
  );
};

function HandyWorkScreen() {
  return(
    <ScreenConstant.Navigator >
      <ScreenConstant.Screen name="handyWorkScreen1" component={HandyWork_Screen} />
    </ScreenConstant.Navigator>
  );
};

function TransportScreen() {
  return(
    <ScreenConstant.Navigator >
      <ScreenConstant.Screen name="transport_screen1" component={Transport_screen} />
    </ScreenConstant.Navigator>
  );
};

function VolunteerScreen() {
  return(
      <ScreenConstant.Navigator screenOptions={{headerShown: false}}>
        <ScreenConstant.Screen name="volunteer" component={Volunteer} />
        <ScreenConstant.Screen name="social_screen" component={SocialScreen} />
        <ScreenConstant.Screen name="pet_screen" component={Petscreen} />
        <ScreenConstant.Screen name="handywork_screen" component={HandyWorkScreen} />
        <ScreenConstant.Screen name="transport_screen" component={TransportScreen} />
      </ScreenConstant.Navigator>
  );
};

function VictimScreen() {
  return (
    <ScreenConstant.Navigator screenOptions={{headerShown: false}}>
        <ScreenConstant.Screen name="VictimScreen" component={Victim} />
        <ScreenConstant.Screen name="social_screen" component={SocialScreen} />
        <ScreenConstant.Screen name="pet_screen" component={Petscreen} />
        <ScreenConstant.Screen name="handywork_screen" component={HandyWorkScreen} />
        <ScreenConstant.Screen name="transport_screen" component={TransportScreen} />
    </ScreenConstant.Navigator>
  );
}



function HomeScreen() {
  return (
    <NavigationContainer>
      <ScreenConstant.Navigator screenOptions={{headerShown: false}}>
        <ScreenConstant.Screen name="Home" component={Loadscreen} />
        <ScreenConstant.Screen name="vol" component={VolunteerScreen} />
        <ScreenConstant.Screen name="Victim" component={VictimScreen} />
        
      </ScreenConstant.Navigator>
     
    </NavigationContainer>
  );
}

export default HomeScreen;