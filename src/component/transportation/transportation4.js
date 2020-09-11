import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useKeyboard } from "react-native-keyboard-height";

import Colors from "../../Items/Colors";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Top_container from "./Transport_head";

const screenHeight = Dimensions.get("window").height;

const Transport_screen4 = (props) => {
  const [value, onChangeText] = useState();
  // for dynamic flex
  const [topFlex, setTopFlex] = useState(5);
  const [midFlex, setMidFlex] = useState(4);
  const [bottomFlex, setBottomFlex] = useState(1);

  //
  const [kbHeight, setKbHeight] = useState(screenHeight);

  const didShow = (height) => {
    console.log("Keyboard show. Height is " + height);
    // setViewHeight(screenHeight - height);
    // height divide by height of container
    setKbHeight(
      height / screenHeight - StatusBar.currentHeight - 0.088 * screenHeight
    );
    //keyboard height ratio to the main height stored in const as not refreshed imm
    const kbhFactor = kbHeight;
    console.log(kbhFactor);

    setBottomFlex(bottomFlex - (kbhFactor * bottomFlex) / 5);

    setMidFlex(midFlex - (3 * kbhFactor * midFlex) / 4);
  };

  const didHide = () => {
    console.log("Keyboard hide");
    //giving default flex back
    setBottomFlex(1);
    setTopFlex(5);
    setMidFlex(4);
  };

  const [keyboardHeigth] = useKeyboard(
    didShow,
    didHide
  ); /* initialize the hook (optional parameters) */

  useEffect(() => {}, [keyboardHeigth]);

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
      <View style={topstyling(topFlex)}>
        <Top_container
          title="Transportation"
          sub_head="Transport Services"
          detail_3="Additional Details"
        />
      </View>

      <View style={midstyling(midFlex)}>
        <TextInput
          autoCapitalize="sentences"
          autoFocus={true}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={"Enter Text"}
        />
      </View>
      <View style={bottomstyling(bottomFlex)}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("Transport_screen5", {
              ...props.route.params,
              note: value,
            })
          }
        >
          <Text style={{ fontSize: 18 }}>Next</Text>
        </Dark_Button>
      </View>
    </SafeAreaView>
  );
};

const topstyling = (dFlex) => {
  return { flex: dFlex, width: "100%" };
};
const midstyling = (dflex) => {
  return {
    flex: dflex,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  };
};
const bottomstyling = (dFlex) => {
  return {
    flex: dFlex,
    width: "100%",
    // backgroundColor: "#9811C9",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingTop: "5%",
    paddingLeft: "60%",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7%",
    padding: "1.8%",
  },
  // top_box: {
  //   flex: 4,
  //   flexDirection: "column",
  //   width: "100%",
  //   justifyContent: "center",
  //   // backgroundColor: 'lightblue'
  // },

  // mid_box: {
  //   flex: 3.4,
  //   width: "100%",
  //   flexDirection: "column",
  //   justifyContent: "flex-start",
  //   alignSelf: "center",
  //   paddingTop: "20%",
  //   paddingHorizontal: "1%",
  //   // backgroundColor: "#f23d7c",
  // },
  // bottom_box: {
  //   flex: 1.2,
  //   width: "100%",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   paddingHorizontal: "2%",
  //   paddingLeft: "60%",
  //   // paddingLeft: '2%',
  //   // backgroundColor: "#9811C9",
  // },

  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
export default Transport_screen4;
