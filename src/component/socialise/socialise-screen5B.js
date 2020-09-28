import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Social_Screen5B = (props) => {
  const navigation = useNavigation();
  const data = { ...props.route.params };
  console.log(data);
  const timestring =
    data.time.Hour + ":" + data.time.Minute + " " + data.time.Meridian;
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name="chevron-left" size={15} color={Colors.primary3} />{" "}
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.head}>Review your request</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Text style={styles.head2}>Types of social activity</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={data.SocialSet}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.head2}>Date</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={data.selectedDate}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.head2}>Time</Text>
          <TextInput style={styles.input} editable={false} value={timestring} />
        </View>
        <View style={styles.box}>
          <Text style={styles.head2}>Location</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={data.Location}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.head2}>Notes</Text>
          <TextInput style={styles.input} editable={false} value={data.note} />
        </View>
      </View>
      <View style={styles.container3}>
        <Dark_Button>
          <Text style={{ fontSize: 18 }}>Submit</Text>
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
    marginTop: "7%",
  },
  top: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    // backgroundColor: "#A596D3",
  },
  box: {
    width: "100%",
    //  backgroundColor: "#267DA5",
  },
  container1: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 5.0,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "40%",
    paddingHorizontal: "2%",
    // backgroundColor: "#9811C9",
  },
  container3: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingLeft: "60%",
    // paddingBottom: '1%',
    // backgroundColor: "#C6C438",
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 15.6,
    fontWeight: "bold",
    color: Colors.secondary2,
  },
  input: {
    paddingTop: "2.5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Social_Screen5B;
