import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import CalenderComponent from "../CalenderComponent";

const Pet_screen2 = (props) => {
  const navigation = useNavigation();
  const [selectedDate, setDate] = React.useState("");
  const ClickHander = (day) => {
    setDate(day);
  };
  console.log(props);
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
        <Text style={styles.head}>Pet Care </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Sitting </Text>
      </View>

      <View style={styles.container3}>
        <Image
          resizeMode="contain"
          style={{
            height: "100%",
            width: "27%",
            alignSelf: "center",
          }}
          // change the source of the image
          source={require("../../Items/Icons/calender.jpeg")}
        />
      </View>
      <View style={styles.container4}>
        <Text style={styles.head2}> What is your requested date?</Text>
      </View>
      <View style={styles.container5}>
        <CalenderComponent getDate={ClickHander} />
      </View>
      <View style={styles.container6}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen3", {
              ...props.route.params,
              date: selectedDate,
            })
          }>
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
    backgroundColor: "#ffffff",
  },
  top: {
    flex: 0.55,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    // backgroundColor: "#A596D3",
  },
  container1: {
    flex: 0.55,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 0.45,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
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
    flex: 0.6,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#267DA5",
  },
  container5: {
    flex: 4.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  container6: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "2%",
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
    fontSize: 19,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: "center",
    fontWeight: "bold",
  },

  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary3,
  },
});

export default Pet_screen2;
