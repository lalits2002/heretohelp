import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import { Button } from 'react-native-elements';
import AppText from '../component/AppText/AppText';
import styles from './OnboardStyles';
import store from '../asyncStorage/store';
import { SIGN_UP } from '../asyncStorage/actionsList';
import Dark_Button from '../Items/Buttons/dark-bt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboard_screen = (props) => {

  const nextScreen = () => {
    AsyncStorage.setItem('initial_start', 'false')
    store.dispatch({ type: SIGN_UP })
  }
  
  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container}>
        <View style={styles.top_navigation}>
        </View>

        <View style={styles.header}>
          <View style={styles.header_image}>
            <Image
              source={require("./img/onb.png")}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
                alignSelf: "center",
              }}
            />
          </View>
        
          <View style={styles.title}>
            <AppText style={styles.head}>Make new friends locally</AppText>
          </View>
        </View>

        <View style={styles.content}>
          <AppText style={styles.text}>
            Perfect way to meet new people in your neighborhood.
          </AppText>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navigation_control}>
            <View style={{ width: '30%', alignSelf: 'flex-end', }}>
              <Dark_Button onPress={nextScreen}>Let's go</Dark_Button>
            </View>
          </View>

          <View style={styles.progress_bar_container}>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen;
