import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import * as Google from 'expo-google-app-auth'
// import * as Google from 'expo-google-app-auth';

import { RESTORE_TOKEN,SIGN_OUT,SIGN_IN, GOOGLE_AUTH } from "../asyncStorage/actionsList";
import store from "../asyncStorage/store"

import Dark_Button from "../Items/Buttons/dark-bt";
import Colors from "../Items/Colors";

const Onboard_screen1 = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");


const isUserEqual = (googleUser, firebaseUser) =>{
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
  }
  
  const onSignIn= (googleUser)=> {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken, googleUser.accessToken);
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).then((User) => {
        console.log('user signed in USER = ', User );
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}

//   const signInWithGoogleAsync = async () => {
//     console.log("came here");
//   try {
//     const result = await Google.logInAsync({
//       behavior:'web',
//       androidClientId: '614477296361-jn1pgrno24lun4d2sjvet3n572tj976u.apps.googleusercontent.com',
//       // iosClientId: YOUR_CLIENT_ID_HERE,
//       scopes: ['profile', 'email'],
//     });

//     if (result.type === 'success') {
//       console.log("success");
//       onSignIn(result);
//        //store.dispatch((dispatch) => {
//               //  dispatch({type:SIGN_IN,token:result.accessToken})
// //})
//       return result.accessToken;
//     } else {
//       return { cancelled: true };
//     }
//   } catch (e) {
//     return { error: true };
//   }
// }

  
  const signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "614477296361-jg54s05qt189ke8q820041us7a9dgvr3.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })
      if (result.type === "success") {
        onSignIn(result);
        store.dispatch((dispatch) => {
                dispatch({type:SIGN_IN,token:result, authType : GOOGLE_AUTH})
              })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error is here", e)
    }
}

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
        <Text style={styles.head}>Let's get Started!</Text>
      </View>

      <View style={styles.container3}>
        <View style={{ paddingVertical: "4%", paddingTop: "5%" }}>
          <Text style={styles.head2}> First Name </Text>
          <TextInput
            style={styles.input}
            value={fName}
            onChangeText={(txt) => {
              setFName(txt);
            }}
            placeholder={"  Your name Here"}
          />
        </View>

        <View style={{ paddingVertical: "3%" }}>
          <Text style={styles.head2}> Last Name </Text>
          <TextInput
            style={styles.input}
            value={lName}
            onChangeText={(txt) => {
              setLName(txt);
            }}
            placeholder={"  Your surname Here"}
          />
        </View>
      </View>

      <View
        style={styles.container4}
      >
        <Dark_Button
          onPress={signIn}
        >
          GOOGLE
        </Dark_Button>
      </View>
      <View
        style={styles.container4}
      >
        <Dark_Button
          onPress={() => props.navigation.navigate("OB2", { fName, lName })}
        >
          Next
        </Dark_Button>
      </View>
      <View style={styles.container5}>
        <View style={styles.line}></View>
        <View style={styles.line2}></View>
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
    borderBottomWidth: 1,
  },
});

export default Onboard_screen1;
