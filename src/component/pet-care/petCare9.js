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
import { Feather } from "@expo/vector-icons";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";

const Pet_screen9 = (props) => {
  const navigation = useNavigation();
  const data = { ...props.route.params };
  console.log(data);

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name="chevron-left" size={15} color={Colors.primary3} />
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.head}>Review your request </Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.head2}>Type of Pet Care</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.CareType}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Date</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.date}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Time</Text>
        <TextInput style={styles.input} editable={false} value={""}></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Location for pet sitting</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.location}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Type of pet</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.PetType}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Pet's name</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.petName}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Pet size</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.size}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Notes</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.addtional}
        ></TextInput>
      </View>

      <View style={styles.container6}>
        <Dark_Button onPress={() => props.navigation.navigate("PetScreen9")}>
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
    paddingTop: "7%",
    padding: "1.8%",
  },
  container1: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 1.5,
    width: "100%",
    // backgroundColor: "#A596D3",
  },
  container6: {
    flex: 1.5,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "2%",
    // paddingTop: "5%",
    paddingLeft: "60%",
    // backgroundColor: "#9811C9",
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  head3: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
  top: {
    flex: 0.6,
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
  input: {
    // paddingHorizontal: "5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Pet_screen9;
