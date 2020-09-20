import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Top_container from "./head";
import TimePicker from "../timePicker/timePicker";

const Pet_screen3 = (props) => {
  const navigation = useNavigation();

  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Meridian, setMeridian] = useState(0);

  const hourHandler = (Hour) => {
    setHour(Hour);
    // console.log(Hour);
  };
  const minHandler = (Min) => {
    setMinute(Min);
    // console.log(Min);
  };
  const AmPmHandler = (AmPm) => {
    setMeridian(AmPm);
    // console.log(AmPm);
  };

  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.topContainer}>
        <Top_container
          title="Pet Care"
          sub_head="Sitting"
          detail_1={props.route.params.date}
          detail_3="What time do you request?"
        />
      </View>

      <View style={styles.midContainer}>
        <TimePicker
          getMin={minHandler}
          getHour={hourHandler}
          getMeridian={AmPmHandler}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("PetScreen4", {
              ...props.route.params,
              time: { Hour, Minute, Meridian },
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
  },
  topContainer: {
    flex: 5,
    width: "100%",
  },

  midContainer: {
    flex: 4,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    //backgroundColor: "#86EC4F",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: "60%",
    // backgroundColor: "#9811C9",
  },
});

export default Pet_screen3;
