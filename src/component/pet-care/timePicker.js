import React, { useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Hour from "./timePicker/hourPicker";
import Meridian from "./timePicker/meridianPicker";
import Minute from "./timePicker/minutePicker";

const TimePicker = (props) => {
  console.log("Hi");
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          //   backgroundColor: "red",
          //   width: "100%",
          height: 250,
        }}
      >
        <Hour getHour={props.getHour} />
      </View>
      <View
        style={{
          flex: 1,
          //   backgroundColor: "blue",
          //   width: "100%",
          height: 250,
        }}
      >
        <Minute getMin={props.getMin} />
      </View>
      <View
        style={{
          flex: 1,
          //   backgroundColor: "green",
          //   width: "100%",
          height: 250,
        }}
      >
        <Meridian getMeridian={props.getMeridian} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default TimePicker;
