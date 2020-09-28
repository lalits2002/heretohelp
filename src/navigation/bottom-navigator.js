import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Volunteer from "../component/Volunteer";
import Victim from "../component/Help-need";

import Chat_Screen from "../servises/chat/chat";
import Browsing_Screen from "../servises/browsing-requests/browsing-screen";
import ProfileScreen from "../component/profile/profile";




const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#2D375B"
      inactiveColor="#BDBDBD"
      barStyle = {{ paddingVertical : '4%', backgroundColor: '#E5E5E5' }}>
      <Tab.Screen options={{tabBarIcon: 'home'}} name="Home" component={Volunteer} />
      <Tab.Screen options={{tabBarIcon: 'map'}}  name="browse" component={Browsing_Screen} />
      <Tab.Screen options={{tabBarIcon: 'chat', tabBarBadge:'2'}} name="Settings" component={Chat_Screen} />
      <Tab.Screen options={{tabBarIcon: 'account'}} name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};