import React, { useState, useReducer } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";

import Dark_Button from "../Items/Buttons/dark-bt";
import Colors from "../Items/Colors";

const Onboard_screen1 = (props) => {
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const [fromState, dispatchFormState] = useReducer({
    inputValues: {
      email: "",
      password: "",
    },
    inputValidity: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container1}>
        <Image
          source={require("./img/vector2.png")}
          resizeMode={"contain"}
          // style={{bottom: '10%'}}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.head}>Almost There!</Text>
      </View>

      <View style={styles.container3}>
        <View style={{ paddingVertical: "4%", paddingTop: "5%" }}>
          <Text style={styles.head2}> Enter your email</Text>
          <TextInput style={styles.input} placeholder={"  Enter Here"} />
        </View>
      </View>
      <View style={styles.container3}>
        <View style={{ paddingVertical: "4%", paddingTop: "5%" }}>
          <Text style={styles.head2}> Enter your Password</Text>
          <TextInput style={styles.input} placeholder={"  Enter Here"} />
        </View>
      </View>

      <View style={styles.container4}>
        <Dark_Button>
          <Text style={{ fontWeight: "bold" }}>Next</Text>
        </Dark_Button>
      </View>
      <View style={styles.container5}>
        <View style={styles.line2}></View>
        <View style={styles.line}></View>
        <View style={styles.line2}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    // backgroundColor: '#99927d',
  },
  container1: {
    flex: 3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor: '#C68F8F'
  },
  container2: {
    flex: 1.1,
    width: "100%",
    paddingHorizontal: "4%",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: '#8FB6C6'
  },
  container3: {
    flex: 3,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: "4%",
    // backgroundColor: '#F692A6'
  },
  container4: {
    flex: 1.05,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "58%",
    paddingHorizontal: "3%",
    // backgroundColor: '#B58FC6'
  },
  container5: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: '#1D9F71'
  },
  head: {
    fontSize: 42,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary2,
  },
  line: {
    height: 3,
    width: 100,
    borderRadius: 20,
    backgroundColor: Colors.primary1,
  },
  line2: {
    height: 3,
    width: 100,
    borderRadius: 20,
    backgroundColor: Colors.disabledbutton,
  },
  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Onboard_screen1;
