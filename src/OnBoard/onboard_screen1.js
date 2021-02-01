import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { firebaseConfig } from "../component/authentication/credencials";

import firebase from "firebase";

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!firebase.app.length) {
    console.error('Firebase initialization error raised', err.stack)
  }
}

// firebase.initializeApp(firebaseConfig)
// if ( === 0) {

// }


import * as Google from 'expo-google-app-auth'


import { RESTORE_TOKEN, SIGN_OUT, SIGN_IN, GOOGLE_AUTH } from "../asyncStorage/actionsList";
import store_redux_thunk from "../asyncStorage/store"

import mediaStore from '../MediaStore/mediaStore'
import getMedia from '../servises/mediaDownloader';

import Dark_Button from "../Items/Buttons/dark-bt";
import Colors from "../Items/Colors";
import InputField from '../component/InputField/InputField';
import AppText from '../component/AppText/AppText';
import styles from './OnboardStyles';

const Onboard_screen1 = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  // hooks for media
  const [image0, setImage] = useState(' ');

  // setImage(getMedia('img/vector1.png'))

  var defaultString = '.root/in-app-media/';
  // console.log(defaultString + mediaLocation);
  // var url = firebase.storage().ref(defaultString + 'vector1.png').getDownloadURL()
  //   .then(url => {
  //     mediaStore.dispatch({
  //       type: 'addMedia',
  //       metadata: {
  //         name: 'vector1.png',
  //         url
  //       }
  //     })
  //     setImage(url)
  //     // return url
  //   })
  //   .catch(function (error) {
  //     // Handle any errors
  //   });

  const isUserEqual = (googleUser, firebaseUser) => {
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

  const onSignIn = (googleUser) => {

    //console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken, googleUser.accessToken);
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then((User) => {
          console.log('user signed in USER = ', User);
          store_redux_thunk.dispatch((dispatch) => {
            dispatch({ type: SIGN_IN, token: User, authType: GOOGLE_AUTH })
          })
        }).catch(function (error) {
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

  const signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '73279523429-85lh1pk97napmo4nq6bgefi4uhr2uf5j.apps.googleusercontent.com',
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })
      if (result.type === "success") {
        onSignIn(result);

      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error is here", e)
    }
  }
  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container}>

        <View style={styles.logo}>
          <Image
            // source={{
            //   uri: mediaStore.getState()['vector1.png'] === undefined ? image0 : mediaStore.getState()['vector1.png']
            // }}
            source={require('./img/vector1.png')}
            style={{
              width: '89px',
              height: '89px',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.title}>
          <AppText style={styles.head}>Let's get started!</AppText>
        </View>

        <View style={styles.field_group}>
          <InputField
            label={"First Name"}
            secureTextEntry={false}
            placeholder={"Your name here"}
            placeholderTextColor={ Colors.secondary2 }
            onChangeText={ setFName }
          >
          </InputField>
        </View>

        <View style={styles.field_group}>
          <InputField
            label={"Last Name"}
            secureTextEntry={false}
            placeholder={"Your surname here"}
            placeholderTextColor={ Colors.secondary2 }
            onChangeText={ setLName }
          >
          </InputField>
        </View>

        <View style={styles.divider_container}>
          <View style={styles.divider}></View>
          <View style={{ width: '20%' }}><Text style={{ fontFamily: 'Avenir', fontSize: 13, color: '#C8C8C8', alignSelf: 'center', }}>OR</Text></View>
          <View style={styles.divider}></View>
        </View>

        <View
          style={styles.oauth_group}
        >
          <Dark_Button
            onPress={signIn}
          >
            GOOGLE
          </Dark_Button>
        </View>

        <View style={styles.navigation}>
          <View
            style={styles.navigation_control}
          >
            <View style={{ width: '30%', alignSelf: 'flex-end', }}>
              <Dark_Button
                onPress={() => props.navigation.navigate("OB2", { fName, lName })}
              >
                Next
              </Dark_Button>
            </View>

          </View>
          <View style={styles.progress_bar_container}>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar}></View>
            <View style={styles.progress_bar}></View>
            <View style={styles.progress_bar}></View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen1;
