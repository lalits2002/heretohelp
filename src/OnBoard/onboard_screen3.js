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
  const [error, setError] = useState('');


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

  const SPECIAL_CHARACTERS = /[`~!@#$%^&*()_+\-=\\,./<>?|[\]{};':"]/;
  const PASSWORD_MIN_LENGTH = 8;

  //logic for passwords to be same in both fields
  const checkSame = () => (password === vPassword);
  const isValidPassword = () => {
    if (!( 
          password.length >= PASSWORD_MIN_LENGTH &&
          password.match(/[a-z]/) && 
          password.match(/[A-Z]/) && 
          password.match(/[0-9]/) &&
          password.match(SPECIAL_CHARACTERS) 
        )) 
    {
      setError( 
                'password must contain the following:\n' +
                ` - at least ${PASSWORD_MIN_LENGTH} characters\n` +
                ' - a lower-case letter\n' +
                ' - an upper-case letter\n' +
                ' - a digit; ie.(0-9)\n' + 
                ' - a special character; ie.(!, @, #, etc)'
              )
      return false
    }

    if ( !checkSame() ) {
      setError('Passwords do not match. Please try again.')
      return false
    }
      
    setError('');
    return true
  }
  const getValidation = () => {
    if (vPassword !== "") {
      return checkSame() ? "green" : "red";
    }
    return "black";
  };

  // authentication
  const submitHandler = () => {
    if (!isValidPassword()) {
      return;
    }

    // store_redux_thunk.dispatch((dispatch) => {
    //   dispatch({ type: 'showload' })
    // })


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

        switch (error.code) {
          case 'auth/email-already-in-use':
            console.log("That email address is already in use!");
            props.navigation.pop();
            break;
          case 'auth/invalid-email':
            console.log("That email address is invalid!");
            props.navigation.pop();
            break;
          default:
            console.error("you got ", error);
        } 

      });
  };

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: 89,
                height: 89,
                resizeMode: 'contain',
              }}
            />
          </View>

          <View style={styles.title}>
            <AppText style={styles.head}>One last thing!</AppText>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.field_group}>
            <InputField
              label={'Enter your Password'}
              secureTextEntry={true}
              placeholder={'Enter here'}
              placeholderTextColor={ Colors.secondary2 }
              onChangeText={ setPass }
              error={error}
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
