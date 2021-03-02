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
          <AppText style={styles.head}>Seek local volunteers</AppText>
        </View>
      </View>

      <View style={styles.content}>
        <AppText style={styles.text}>
          Ask for assistance! Get help with pet care, transportation and handywork!
        </AppText>
      </View>
    </View>
  );
};

export default Onboard_screen;
