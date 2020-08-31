import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";

const Pet_screen3 = (props) => {
  const navigation = useNavigation();
  console.log(props.route.params);

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
        <Text style={styles.head2}> Your chosen date</Text>
      </View>
      <View style={styles.container5}>
        <Text style={styles.head2}> What time do you request?</Text>
      </View>
      <View style={styles.container6}></View>
      <View style={styles.container7}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen4", {
              ...props.route.params,
            })
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
    flex: 0.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    //backgroundColor: "#267DA5",
  },

  container5: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    //backgroundColor: "#fff",
  },

  container6: {
    flex: 3.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    //backgroundColor: "#86EC4F",
  },
  container7: {
    justifyContent: "center",
    flex: 1.6,
    width: "100%",
    //backgroundColor: "#9811C9",
    paddingHorizontal: "2%",
    paddingTop: "5%",

    paddingLeft: "60%",
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

export default Pet_screen3;
