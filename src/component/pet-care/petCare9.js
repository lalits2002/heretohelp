import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";

const Pet_screen9 = (props) => {
  console.log(props.route.params);
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.head}> Review your request </Text>
      </View>

      <View style={styles.container6}>
        <Dark_Button onPress={() => props.navigation.navigate("PetScreen8")}>
          <Text> Submit</Text>
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
    margin: "1.8%",
  },
  container1: {
    flex: 0.6,
    width: "100%",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 0.6,
    width: "100%",
    // backgroundColor: "#A596D3",
  },
  container3: {
    flex: 1.8,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: "2%",
    // backgroundColor: "#C6C438",
  },
  container4: {
    flex: 1.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#267DA5",
  },
  container5: {
    flex: 3,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  container6: {
    flex: 1.6,
    width: "100%",
    // backgroundColor: "#9811C9",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingTop: "5%",
    paddingLeft: "60%",
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 19,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: "center",
    fontWeight: "bold",
  },
  top: {
    flex: 0.85,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    // backgroundColor: "#A596D3",
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary3,
  },
  input: {
    paddingHorizontal: "5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Pet_screen9;
