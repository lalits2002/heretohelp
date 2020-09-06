import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import CalenderComponent from "../CalenderComponent";

import Top_container from "./head";

const Pet_screen2 = (props) => {
  const navigation = useNavigation();
  const [selectedDate, setDate] = React.useState("");
  const ClickHander = (day) => {
    setDate(day);
  };

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.topContainer}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_2="What is your requested date?"
        />
      </View>

      <View style={styles.midContainer}>
        <CalenderComponent getDate={ClickHander} />
      </View>

      <View style={styles.bottomContainer}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen3", {
              ...props.route.params,
              date: selectedDate,
            })
          }
        >
          <Text>Next</Text>
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
    backgroundColor: "#ffffff",
  },

  topContainer: {
    flex: 4,
    width: "100%",
  },
  midContainer: {
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: "60%",
    // backgroundColor: "#9811C9",
  },
  // top: {
  //   flex: 0.55,
  //   width: "100%",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignSelf: "flex-start",
  //   // backgroundColor: "#A596D3",
  // },
  // container1: {
  //   flex: 0.55,
  //   width: "100%",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   // backgroundColor: "#C6C438",
  // },
  // container2: {
  //   flex: 0.45,
  //   width: "100%",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   // backgroundColor: "#A596D3",
  // },
  // container3: {
  //   flex: 1.4,
  //   flexDirection: "column",
  //   width: "100%",
  //   paddingHorizontal: "2%",
  //   // backgroundColor: "#C6C438",
  // },
  // container4: {
  //   flex: 0.6,
  //   width: "100%",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   // backgroundColor: "#267DA5",
  // },

  // head: {
  //   fontSize: 26,
  //   fontWeight: "bold",
  //   color: Colors.primary1,
  // },
  // head2: {
  //   alignSelf: "flex-start",
  //   fontSize: 19,
  //   color: Colors.primary2,
  // },
  // head3: {
  //   fontSize: 17.5,
  //   alignSelf: "center",
  //   fontWeight: "bold",
  // },

  // back: {
  //   alignSelf: "flex-start",
  //   fontSize: 16,
  //   color: Colors.primary3,
  // },
});

export default Pet_screen2;
