import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";

import firebase from "firebase";

import Dark_Button from "../Items/Buttons/dark-bt";
import Colors from "../Items/Colors";

const Onboard_screen3 = (props) => {
  const [password, setPass] = useState("");
  const [vPassword, setvPass] = useState("");
  const email = props.route.params.email;

  const fullName = props.route.params.fName + " " + props.route.params.lName;
  console.log(fullName);

  //logic for passwords to be same in both fields
  const checkSame = () => (password === vPassword ? true : false);
  const getValidation = () => {
    if (vPassword !== "") {
      return checkSame() ? "green" : "red";
    }
    return "black";
  };

  // authentication
  const submitHandler = () => {
    console.log("hi");
    if (!checkSame()) {
      return;
    }
    {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("User account created & signed in!");
          setPass("");
          setvPass("");

          var user = firebase.auth().currentUser;

          user
            .updateProfile({
              displayName: fullName,
            })
            .then(function () {
              console.log(firebase.auth().currentUser);
              props.navigation.navigate("Victim");
            })
            .catch(function (error) {
              console.log("inside updation ", error);
            });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }

          console.error("you got ", error);
        });
    }
  };

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container1}>
        <Image
          source={require("./img/vector1.png")}
          resizeMode={"contain"}
          style={{ bottom: "10%" }}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.head}>One last thing!</Text>
      </View>

      <View style={styles.container3}>
        <View style={{ paddingVertical: "4%", paddingTop: "5%" }}>
          <Text style={styles.head2}> Enter your Password</Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            style={styles.input}
            placeholder={"  Enter Here"}
            onChangeText={(val) => {
              // console.log("changed password");
              setPass(val);
            }}
          />
        </View>

        <View style={{ paddingVertical: "4%", paddingTop: "5%" }}>
          <Text style={styles.head2}> Verify Password</Text>
          <TextInput
            secureTextEntry={true}
            value={vPassword}
            style={{ ...styles.input, borderBottomColor: getValidation() }}
            placeholder={"  Enter Here"}
            onChangeText={(val) => {
              // console.log("changed password");
              setvPass(val);
            }}
          />
        </View>
      </View>

      <View style={styles.container4}>
        <Dark_Button onPress={submitHandler}>Submit</Dark_Button>
      </View>
      <View style={styles.container5}>
        <View style={styles.line2}></View>
        <View style={styles.line2}></View>
        <View style={styles.line}></View>
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
    flexDirection: "column",
    justifyContent: "flex-start",
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
    borderBottomWidth: 2,
  },
});

export default Onboard_screen3;
