import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import { Button } from 'react-native-elements';
import AppText from '../component/AppText/AppText';
import styles from './OnboardStyles';

const Onboard_screen = (props) => {

  const nextScreen = () => {
    props.navigation.navigate('Onboarding_3');
  }
  
  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container}>
        <View style={styles.top_navigation}>
          <Button
            type='clear'
            title='Skip'
            titleStyle={styles.top_nav_text}
            onPress={nextScreen}
          />
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
            <AppText style={styles.head}>Give back to the community</AppText>
          </View>
        </View>

        <View style={styles.content}>
          <AppText style={styles.text}>
            Become a volunteer and help locals with their tasks! 
          </AppText>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navigation_control}>
          </View>
          <View style={styles.progress_bar_container}>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar}></View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen;
