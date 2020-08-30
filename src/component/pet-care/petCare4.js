import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";

import Dark_Button2 from "../../Items/Buttons/dark-bt2";
import Colors from "../../Items/Colors";

const Pet_screen4 = (props) => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState("Eaither is fine");

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.head}> Pet Care </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}> Sitting </Text>
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
        <Text style={styles.head2}>Location for pet Sitting?</Text>
      </View>
      <View style={styles.container5}>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <View
            style={{
              paddingLeft: "20%",
              paddingVertical: "2%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <RadioButton color="#2D375B" value="In my home" />
            <Text style={styles.head4}>In my home</Text>
          </View>
          <View
            style={{
              paddingLeft: "20%",
              paddingVertical: "2%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <RadioButton color="#2D375B" value="Outside my home" />
            <Text style={styles.head4}>Outside my home</Text>
          </View>
          <View
            style={{
              paddingLeft: "20%",
              paddingVertical: "2%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <RadioButton color="#2D375B" value="Eaither is fine" />
            <Text style={styles.head4}>Eaither is fine</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.container6}>
        <Dark_Button2 onPress={() => props.navigation.navigate("PetScreen5")}>
          <Text> Next</Text>
        </Dark_Button2>
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
  },
  container1: {
    flex: 0.6,
    width: "100%",
    //backgroundColor: "#C6C438",
  },
  container2: {
    flex: 0.6,
    width: "100%",
    //backgroundColor: "#A596D3",
  },
  container3: {
    flex: 1.8,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: "2%",
    //backgroundColor: "#C6C438",
  },
  container4: {
    flex: 1.6,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    //backgroundColor: "#267DA5",
  },
  container5: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
    //backgroundColor: "#86EC4F",
  },
  container6: {
    flex: 1.6,
    width: "100%",
    //backgroundColor: "#9811C9",
    paddingHorizontal: "2%",
    paddingTop: "5%",
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

  head4: {
    alignSelf: "center",
    fontSize: 19,
    color: Colors.primary2,
  },
  top: {
    flex: 0.85,
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
});

export default Pet_screen4;
