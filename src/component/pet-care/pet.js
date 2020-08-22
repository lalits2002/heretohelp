import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

import Dark_Button from "../../Items/Buttons/dark-bt";
const Pet_Screen = (props) => {
  return (
    <View style={styles.petscreen}>
      {props.children}

      <View>
        <Text style={styles.title}>Pet Care</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Image style={styles.image} source={require("../h2h/s6.png")} />

        <Text style={styles.description}>
          All of our best friends require some extra TLC . That can mean
          grooming, pet-sitting, pet walking.
        </Text>

        <Text style={styles.typeSelectText}>Select type of Pet Care</Text>
        {/* Allocating the space for future implimentation of select */}
        <View style={styles.typeSelect} />

        <View style={styles.btn}>
          <Dark_Button>Request for Pet Care</Dark_Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  petscreen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: "4%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: { width: "50%", height: 200 },

  bodyContainer: {
    alignItems: "center",
  },
  description: {
    fontSize: 18,
    fontWeight: "800",
  },
  typeSelectText: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 25,
  },
  typeSelect: {
    width: "100%",
    height: 100,
    borderBottomColor: "#111",
    borderWidth: 1,
    backgroundColor: "rgb(250, 250, 250)",
    opacity: 0.2,
  },
  btn: {
    marginTop: 30,
  },
});

export default Pet_Screen;
