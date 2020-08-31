import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators, TransitionPresets   } from "@react-navigation/stack";

import Loadscreen from "../component/home/Load";
import Volunteer from "../component/Volunteer";
import Victim from "../component/Help-need";

import Social_Screen from "../component/socialise/socialise-screen";
import Social_Screen2 from "../component/socialise/socialise-screen2";
import Social_Screen3 from "../component/socialise/socialise-screen3";
import Social_Screen4 from "../component/socialise/socialise-screen4";
import Social_Screen5 from "../component/socialise/socialise-screen5";
import Social_Screen6 from "../component/socialise/socialise-screen6";



import Pet_Screen from "../component/pet-care/pet";
import Pet_screen2 from "../component/pet-care/petCare2";
import Pet_screen3 from "../component/pet-care/petCare3";
import Pet_screen4 from "../component/pet-care/petCare4";
import Pet_screen5 from "../component/pet-care/petCare5";
import Pet_screen6 from "../component/pet-care/petCare6";
import Pet_screen7 from "../component/pet-care/petCare7";
import Pet_screen8 from "../component/pet-care/petCare8";

import HandyWork_Screen from "../component/handywork-screen/handywork-screen";
import HandyWork_Screen2 from "../component/handywork-screen/handywork-screen2";
import HandyWork_Screen3 from "../component/handywork-screen/handywork-screen3";
import HandyWork_Screen4 from "../component/handywork-screen/handywork-screen4";
import HandyWork_Screen5 from "../component/handywork-screen/handywork-screen5";

import Transport_screen from "../component/transportation/transportation";
import Transport_screen2 from "../component/transportation/transportation2";

import Chat_Screen from "../servises/chat/chat";
import Browsing_Screen from "../servises/browsing-requests/browsing-screen";
import ProfileScreen from "../component/profile/profile";



const ScreenConstant = createStackNavigator();

function SocialScreen() {
  return (
    <ScreenConstant.Navigator screenOptions={{ headerShown: false }}>
      <ScreenConstant.Screen name="socialscreen1" component={Social_Screen} />
      <ScreenConstant.Screen name="socialscreen2" component={Social_Screen2} />
      <ScreenConstant.Screen name="socialscreen3" component={Social_Screen3} />
      <ScreenConstant.Screen name="socialscreen4" component={Social_Screen4} />
      <ScreenConstant.Screen name="socialscreen5" component={Social_Screen5} />
      <ScreenConstant.Screen name="socialscreen6" component={Social_Screen6} />


    </ScreenConstant.Navigator>
  );
}

function Petscreen() {
  return (
    <ScreenConstant.Navigator screenOptions={{ headerShown: false }}>
      <ScreenConstant.Screen name="PetScreen1" component={Pet_Screen} />
      <ScreenConstant.Screen name="PetScreen2" component={Pet_screen2} />
      <ScreenConstant.Screen name="PetScreen3" component={Pet_screen3} />
      <ScreenConstant.Screen name="PetScreen4" component={Pet_screen4} />
      <ScreenConstant.Screen name="PetScreen5" component={Pet_screen5} />
      <ScreenConstant.Screen name="PetScreen6" component={Pet_screen6} />
      <ScreenConstant.Screen name="PetScreen7" component={Pet_screen7} />
      <ScreenConstant.Screen name="PetScreen8" component={Pet_screen8} />
    </ScreenConstant.Navigator>
  );
}

function HandyWorkScreen() {
  return (
    <ScreenConstant.Navigator 
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS ,
    }}>
      <ScreenConstant.Screen name="handyWorkScreen1" component={HandyWork_Screen} />
      <ScreenConstant.Screen name="handyWorkScreen2" component={HandyWork_Screen2} />
      <ScreenConstant.Screen name="handyWorkScreen3" component={HandyWork_Screen3} />
      <ScreenConstant.Screen
        name="handyWorkScreen4"
        component={HandyWork_Screen4}
      />
      <ScreenConstant.Screen
        name="handyWorkScreen5"
        component={HandyWork_Screen5}
      />
    </ScreenConstant.Navigator>
  );
}

function TransportScreen() {
  return (
    <ScreenConstant.Navigator screenOptions={{ headerShown: false }}>
      <ScreenConstant.Screen
        name="transport_screen1"
        component={Transport_screen}
      />
      <ScreenConstant.Screen
        name="transport_screen2"
        component={Transport_screen2}
      />
    </ScreenConstant.Navigator>
  );
}

function HomeScreen() {
  return (
    <NavigationContainer>
      <ScreenConstant.Navigator screenOptions={{ headerShown: false }}>
        <ScreenConstant.Screen name="Home" component={Loadscreen} />
        <ScreenConstant.Screen name="vol" component={Volunteer} />
        <ScreenConstant.Screen name="Victim" component={Victim} />

        <ScreenConstant.Screen name="social_screen"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
        component={SocialScreen} />

        <ScreenConstant.Screen name="pet_screen" 
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
        component={Petscreen}  />
        <ScreenConstant.Screen name="handywork_screen"
            options={{
              
              cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
            }} 
          component={HandyWorkScreen}/>
        <ScreenConstant.Screen 
          name="transport_screen"
          options={{ cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid }}
          component={TransportScreen}/>
          

        <ScreenConstant.Screen 
            name="chat" 
            options={{ cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS}}
            component={Chat_Screen} />

        <ScreenConstant.Screen name="browse" component={Browsing_Screen} />
        <ScreenConstant.Screen name="profile" component={ProfileScreen} />
      </ScreenConstant.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen;
