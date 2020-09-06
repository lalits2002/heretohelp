import React, { useState } from "react";
import { StyleSheet, View,  Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../Items/Colors";
import Dark_Button from "../../Items/Buttons/dark-bt";

const Transport_screen5 = (props) => {
  const navigation = useNavigation();
  const [value, onChangeText] = useState();


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
        <Text style={styles.head}> Transportation </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}> Transport Services </Text>
      </View>

      <View style={styles.container3}>
        <Image
          resizeMode="contain"
          style={{
            height: "100%",
            width: "40%",
            alignSelf: "center",
          }}
          // change the source of the image
          source={require("../../Items/Icons/calender.jpeg")}
        />
      </View>
      <View style={styles.container4}>
        <Text style={styles.head3}>Additional Details</Text>
      </View>
      <View style={styles.container5}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={'I need a drive to Doctor appointment at the Hospital'}
        />
      </View>
      <View style={styles.container6}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("Transport_screen6"

            )
          }
        >
          <Text> Next</Text>
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
    padding: '1.8%',
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
    flex: 1.4,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: "2%",
    // backgroundColor: "#C6C438",
  },
  container4: {
    flex: 1,
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
    paddingTop: "4%",
    paddingLeft: "60%",
  },
  head: {
    fontSize: 21,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 17,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 18,
    alignSelf: "flex-start",
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
    fontSize: 17,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Transport_screen5;
