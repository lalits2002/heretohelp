import React from "react";
import { View, Image } from "react-native";
import AppText from '../component/AppText/AppText';
import styles from './OnboardStyles';

const Onboard_screen = () => {
  
  return (
    <View style={{ flex: 1 }}>
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
    </View>

  );
};

export default Onboard_screen;
