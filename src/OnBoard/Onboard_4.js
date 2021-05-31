import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import AppText from "../component/AppText/AppText";
import Dark_Button from "../Items/Buttons/dark-bt";
import Styles from "./OnboardStyles";

import Colors from "../Items/Colors";
import { ScrollView } from "react-native-gesture-handler";

const Onboard_Login = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.container1}>
          <Text>Insert navigational slider here</Text>
        </View>
        <View style={styles.title}>
          <AppText style={Styles.head}>Create your{"\n"}login</AppText>
        </View>

        <View style={styles.container2}>
          <TextInput style={styles.input} placeholder="Email Address" />
        </View>

        <View style={styles.container3}>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
          />
        </View>

        <View style={styles.container4}>
          <Dark_Button
            onPress={() =>
              props.navigation.navigate("OnboardingScreen_5", {
                ...props.route.params,
              })
            }
          >
            Continue
          </Dark_Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingTop: "10%",
    padding: "7%",
  },
  container1: {
    paddingVertical: "5%",
    backgroundColor: "lightblue",
  },
  container2: {
    paddingVertical: "5%",
  },
  container3: {
    paddingVertical: "8%",
  },
  container4: {
    paddingVertical: "8%",
  },
  head: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.primary2,
  },
  input: {
    fontSize: 15,
    color: Colors.secondary3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary2,
  },
  title: {
    paddingVertical: "12%",
  },
});

export default Onboard_Login;
