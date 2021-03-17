import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  ActivityIndicator
} from "react-native";
import Dark_Button from "../Items/Buttons/dark-bt";
import AppText from '../component/AppText/AppText';
import styles from './SignupStyles';
import { _setPlaceHolderColor } from './methods';

const WithAuthScreen = (props) => {
  const { children, title, onNextButtonPress, style, screen, nextButtonLoader=false } = props
  return (
    <SafeAreaView style={{...styles.screen, ...style}}>
      <View style={{flex: 1, marginHorizontal: 20}}>

        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: 89,
                height: 89,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles.title}>
            <AppText style={styles.head}>{title}</AppText>
          </View>
        </View>

          {children}
          
        <View style={styles.navigation}>
          <View
            style={styles.navigation_control}
          >
            <View style={{ width: '30%', alignSelf: 'flex-end', marginTop: Platform.OS == "android" && screen && 30 }}>
              <Dark_Button onPress={() => onNextButtonPress()}>
                {nextButtonLoader ? <ActivityIndicator /> : "Next"}
              </Dark_Button>
            </View>

          </View>
        </View>

      </View>
    </SafeAreaView>
  )
};

export default WithAuthScreen;
