import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Accessory, Avatar } from "react-native-elements";
import { GOOGLE_AUTH, SIGN_OUT } from "../../asyncStorage/actionsList";
import store_redux_thunk from "../../asyncStorage/store";
import Colors from "../../Items/Colors";
import fb from '../../config/firebase';

const db = firebase.firestore();

const Box = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.block1A} onPress={props.onPress}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 15,
            color: Colors.secondary3,
          }}
        >
          {props.lable1}{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.block1B} onPress={props.onPress}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 15,
            color: Colors.secondary3,
          }}
        >
          {props.lable2}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = (props) => {
  const [tasksRequested, setNoTasks] = useState(0);
  const [fullName, setName] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [imgLink, setImgLink] = useState(AvatarPlaceholder);

  const navigation = useNavigation();
  const AvatarPlaceholder =
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg";
  // make user uid as key
  var user = store_redux_thunk.getState().userToken;
  // if a google user then target changes
  // if (store_redux_thunk.getState().authType === GOOGLE_AUTH) {
  //   user = user.user;
  // }
  const uid = fb.auth().currentUser.uid;

  useEffect(() => {
    var docRef = db
      .collection("queries")
      .doc(uid)
      .collection("service-requests")
      .get()
      .then(function (querySnapshot) {
        var count = 0;
        querySnapshot.forEach(function (doc) {
          count++;
        });
        setNoTasks(count);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    db.collection("users")
      .doc(uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let n = doc.data().fullName;
          setName(n);
          setEmail(doc.data().email);
          var nameSplit = n.split(" ");
          setfName(nameSplit[0]);
          setlName(nameSplit[1]);
          setAddress(doc.data().address);
          setPhone(doc.data().phone);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  });

  const signout = () => {
    store_redux_thunk.dispatch((dispatch) => {
      dispatch({ type: "showload" });
    });
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("logged out");
        store_redux_thunk.dispatch((dispatch, getState) => {
          dispatch({
            type: SIGN_OUT,
          });
          // console.log(getState());
        });
      })
      .catch((error) => {
        console.log("signout error ", error);
      });
  };

  const deleteAccount = () => {
    var user = firebase.auth().currentUser;

    store_redux_thunk.dispatch((dispatch) => {
      dispatch({ type: "showload" });
    });
    user
      .delete()
      .then(function () {
        console.log("account deleted");
        store_redux_thunk.dispatch((dispatch) => {
          dispatch({
            type: SIGN_OUT,
          });
        });
      })
      .catch(function (error) {
        console.log("account delete error ", error);
      });
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.containerTop}>
          <Text style={styles.top1}>
            <Feather name="chevron-left" size={15} color={Colors.primary2} />{" "}
            Back{" "}
          </Text>
          <Text style={styles.top2}>Profile </Text>
          <Text style={styles.top3}>Edit </Text>
        </View>

        <View style={styles.profile}>
          <Avatar
            size={140}
            rounded
            source={{
              uri: imgLink,
            }}
          >
            <Accessory />
          </Avatar>

          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: Colors.primary2 }}
          >
            {fullName}
          </Text>
          <Text></Text>
          <Text
            style={{ fontSize: 15, alignSelf: "center", paddingLeft: "3%" }}
          >
            Enter short bio here. lorem ispum dolor amet, constructoradipiscing
            elit. Accuan, urna,viverra, faucibus auctor in euismod id nullam.
          </Text>
        </View>

        <Box lable1="FirstName" lable2={fName} />
        <Box lable1="LastName" lable2={lName} />
        <Box lable1="Email" lable2={email} />
        <Box
          lable1="Change Password"
          lable2={
            <Feather name="chevron-right" size={22} color={Colors.secondary3} />
          }
        />
        <Box lable1="Address" lable2={address} />
        <Box lable1="Phone" lable2={phone} />
        <Box lable1="Criminal record check" />
        <View style={styles.spacing}></View>
        <Box
          lable1="Settings"
          lable2={
            <Feather name="chevron-right" size={22} color={Colors.secondary3} />
          }
          onPress={() => {
            navigation.navigate("submit");
          }}
        />
        <View style={styles.spacing}></View>
        <Box lable1="Times volunteered" lable2="None done now" />
        <Box lable1="Tasks Requested" lable2={tasksRequested} />
        <View style={styles.spacing}></View>
        <Box lable1="Help" />
        <Box
          lable1="Terms of Service "
          onPress={() => {
            navigation.navigate("terms");
          }}
        />
        <Box
          lable1="Privacy Policy"
          onPress={() => {
            navigation.navigate("privacy");
          }}
        />
        <Box
          lable1="Submit Feedback "
          onPress={() => {
            navigation.navigate("feedback");
          }}
        />
        <Box lable1="Delete Account" onPress={deleteAccount} />
        <Box lable1="Log out from Account" onPress={signout} />
        <View style={styles.spacing}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: "7%",
  },
  container: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.secondary3,
  },
  containerTop: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary4,
    paddingVertical: "8%",
    // paddingBottom: "3%"
  },

  spacing: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: Colors.primary4,
  },
  profile: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.secondary3,
    paddingBottom: "7%",
    paddingTop: "4%",
  },
  top1: {
    alignSelf: "center",
    fontSize: 15,
    color: Colors.primary2,
  },
  top2: {
    alignSelf: "center",
    fontSize: 15,
    color: Colors.primary2,
  },
  top3: {
    alignSelf: "center",
    fontSize: 15,
    color: Colors.primary2,
    paddingRight: "1%",
  },
  block1: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  block2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  block1A: {
    alignItems: "center",
    paddingLeft: "2%",
  },
  block1B: {
    paddingRight: "2%",
  },
});

export default ProfileScreen;
