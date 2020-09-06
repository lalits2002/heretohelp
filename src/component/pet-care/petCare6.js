import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import Top_container from "./head";

const Pet_screen6 = (props) => {
  const navigation = useNavigation();
  const [value, onChangeText] = useState("");

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.topContainer}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_2="What is your pet's name?"
        />
      </View>
      <View style={styles.midContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={"Enter Text"}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen7", {
              ...props.route.params,
              petName: value,
            })
          }
        >
          <Text> Next</Text>
        </Dark_Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
    padding: "1.8%",
  },
  topContainer: {
    flex: 5,
    width: "100%",
  },

  midContainer: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#9811C9",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingTop: "5%",
    paddingLeft: "60%",
  },

  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Pet_screen6;
