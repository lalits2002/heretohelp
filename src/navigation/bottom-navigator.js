import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import Home from '../component/icons-components/home';

import Volunteer from "../component/Volunteer";
import Victim from "../component/Help-need";
import Chat_Screen from "../servises/chat/chat";
import Browsing_Screen from "../servises/browsing-requests/browsing-screen";

import ProfileScreen from "../component/profile/profile";
import FeedbackScreen from "../component/profile/submit";
import SubmitScreen from "../component/profile/settings";
import Terms_component from "../component/profile/terms";
import PrivacyScreen from "../component/profile/privacy";
import Home from "../component/icons-components/home";



const ScreenConstant = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Profile_component() {
  return(

  <ScreenConstant.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    }}> 
      <ScreenConstant.Screen name="profile" component={ProfileScreen} />
      <ScreenConstant.Screen name="feedback" component={FeedbackScreen} />
      <ScreenConstant.Screen name="submit" component={SubmitScreen} />
      <ScreenConstant.Screen name="terms" component={Terms_component} />
      <ScreenConstant.Screen name="privacy" component={PrivacyScreen} />
  </ScreenConstant.Navigator>
  )
}


export default function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#2D375B"
      inactiveColor="#BDBDBD"
      barStyle = {{ paddingVertical : '4%', backgroundColor: '#E5E5E5' 
      }}>
      <Tab.Screen options={{tabBarIcon: () => {return <Home />} }} name="Home" component={Volunteer} />
      <Tab.Screen options={{tabBarIcon: 'map'}}  name="browse" component={Browsing_Screen} />
      <Tab.Screen options={{tabBarIcon: 'chat', tabBarBadge:'2'}} name="Settings" component={Chat_Screen} />
      <Tab.Screen options={{tabBarIcon: 'account'}} name="profile" component={Profile_component} />
    </Tab.Navigator>
  );
};