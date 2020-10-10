import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Dark_Button from "../Items/Buttons/dark-bt";
import Button2 from "../Items/Buttons/light-bt";

const Loadscreen = (props) => {
  return (
    <View style={styles.load}>
      <Image source={require("./h2h/load1.png")} style={styles.image} />
      <Text style={styles.intro}>
        Here 2 Help connects volunteers with people who need help completing
        different tasks.
      </Text>
      <View style={styles.Button}>
        <Dark_Button onPress={() => props.navigation.navigate("vol")}>
          I'm Here to Volunteer
        </Dark_Button>
        <View style={styles.space} />
        <Button2 onPress={() => props.navigation.navigate("OB1")}>
          I need Help
        </Button2>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  load: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    bottom: "13%",
  },
  intro: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    padding: "6%",
  },
  Button: {
    width: "100%",
    top: "15%",
    paddingHorizontal: "8%",
    // backgroundColor: 'blue',
  },
  space: {
    padding: 5,
  },
});

export default Loadscreen;
