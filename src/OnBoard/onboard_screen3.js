import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";

import { RESTORE_TOKEN, SIGN_OUT, SIGN_IN, EMAIL_PASSWORD_AUTH } from "../asyncStorage/actionsList";
import store_redux_thunk from "../asyncStorage/store"

import firebase from "firebase";

import Dark_Button from "../Items/Buttons/dark-bt";
import Colors from "../Items/Colors";
import mediaStore from '../MediaStore/mediaStore'
import styles from './OnboardStyles';
import InputField from "../component/InputField/InputField";
import AppText from "../component/AppText/AppText";

const Onboard_screen3 = (props) => {
  const [password, setPass] = useState("");
  const [vPassword, setvPass] = useState("");


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


  const email = props.route.params.email;

  const fullName = props.route.params.fName + " " + props.route.params.lName;

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
    if (!checkSame()) {
      return;
    }

    store_redux_thunk.dispatch((dispatch) => {
      dispatch({ type: 'showload' })
    })


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
            // updating the redux store_redux_thunk now
            store_redux_thunk.dispatch((dispatch) => {
              dispatch({ type: SIGN_IN, token: user, authType: EMAIL_PASSWORD_AUTH })
            })
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
  };

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container}>

        <View style={styles.logo}>
          <Image
            source={require('./img/vector2.png')}
            style={{
              width: '89px',
              height: '89px',
              resizeMode: 'contain',
            }}
          />
        </View>

        <View style={styles.title}>
          <AppText style={styles.head}>One last thing!</AppText>
        </View>

        <View style={styles.field_group}>
          <InputField
            label={'Enter your Password'}
            secureTextEntry={true}
            placeholder={'Enter here'}
            placeholderTextColor={ Colors.secondary2 }
            onChangeText={ setPass }
          >
          </InputField>
        </View>

        <View style={styles.field_group}>
          <InputField
            label={'Verify Password'}
            secureTextEntry={true}
            placeholder={'Enter here'}
            placeholderTextColor={ Colors.secondary2 }
            onChangeText={ setvPass }
          >
          </InputField>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navigation_control}>
            <View style={{ width: '30%', alignSelf: 'flex-end', }}>
              <Dark_Button onPress={submitHandler}>Next</Dark_Button>
            </View>
          </View>

          <View style={styles.progress_bar_container}>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar_filled}></View>
            <View style={styles.progress_bar}></View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Onboard_screen3;
