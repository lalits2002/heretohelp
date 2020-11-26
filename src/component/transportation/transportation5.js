import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import formatDate from "../formatDate";
import Modal from "react-native-modal";


import Colors from "../../Items/Colors";
import Dark_Button from "../../Items/Buttons/dark-bt";
import { State } from "react-native-gesture-handler";

const Transport_screen5 = (props) => {
  const navigation = useNavigation();
  const [value, onChangeText] = useState();
  const data = { ...props.route.params };
  const [isModalVisible, setModalVisible] = useState(false);


  console.log(data);

  const timestring =
    data.time.Hour + ":" + data.time.Minute + " " + data.time.Meridian;

  return (
    <SafeAreaView style={{ ...styles.screen, ...props.style }}>
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
        <Text style={styles.head1}>Review your request</Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.box}>
          <Text style={styles.head2}> Type of transportation</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={data.Transporttype}
          ></TextInput>
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}> Date</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={formatDate(data.date)}
          ></TextInput>
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}> Time</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={timestring}
            placeholder={"11:00 Pm "}
          ></TextInput>
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}> Notes </Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={data.note}
          ></TextInput>
        </View>
      </View>

      <View style={styles.container3}>
        <Dark_Button

        onPress={() => {setModalVisible(true);}}
        >
          <Text style={{ fontSize: 18 }}> Submit</Text>
        </Dark_Button>
      </View>

      <Modal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      backdropColor='#2D375B'
      backdropOpacity={0.7}
      onBackButtonPress={() => {setModalVisible(false)}}
      >

        <View style={styles.cardsection}>
                <View style={{ flex: 1, flexDirection: "column", alignSelf: "flex-end", paddingRight: "2%"}}>
                  <TouchableOpacity
                  onPress={() => { setModalVisible(false);}}>
                  <Feather name="x-circle" size={25} color={Colors.primary3}   />
                  </TouchableOpacity>
                  </View>
                  <View style={{flex: 1.2, flexDirection: "column", }}>
                <Image
                  source={require('../h2h/Vector85.png')}
                  resizeMode= 'contain'
                   style={{
                    width: '25%',
                    height: '25%',
                    alignSelf: "center",


                   }}
                   /></View>
                   <Text style={styles.modaltextcontainer1}>Your request is posted!</Text>


                   <Text style={styles.modaltextcontainer2}>We will share your transportation request,
                    so local peple can reach out to you!</Text>

                {/* the above view contaisn text */}
                <View style={styles.modalbottomcontainer}>
                  <View style={styles.bottomblock1}>
                    <Text style={{fontSize: 15}} onPress={() => { setModalVisible(false);}}>Cancel</Text></View>
                    <View style={styles.bottomblock2}>
                    <Text style={{fontSize: 15}}>Got it!</Text></View>
                </View>
                </View>
                <View style={{flex: 1, flexDirection: "column", width: "100%" }}></View>

      </Modal>

    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    // backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    paddingTop: "7%",
  },
  top: {
    flex: 0.5,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignSelf: "flex-start",
    // backgroundColor: 'lightblue'
  },

  container1: {
    flex: 0.6,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: '#f72f54'
  },
  container2: {
    flex: 2.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "40%",
    // paddingHorizontal: '3.7%'
    // backgroundColor: '#d5ff03'
  },

  container3: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: "60%",
    paddingHorizontal: "3%",
    // backgroundColor: '#ff4800'
  },
  box: {
    width: "100%",
  },

  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },
  head1: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    fontSize: 15.6,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: Colors.secondary2,
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    color: Colors.secondary3,
    paddingTop: "2.5%",
  },

  cardsection: {
    flex: 1.5,
    marginVertical: "30%",
    marginRight: 20,
    marginLeft: 12,
    flexDirection: "column",
    width: "100%",
    backgroundColor: '#ffffff',
    justifyContent: "flex-end",
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.85 ,
    height: Dimensions.get('window').height * 0.25,
    borderWidth: 3,
    // paddingTop: "10%"
  },
  modalbottomcontainer: {
    flex: 1.5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: '#d3eb23',

  },
  bottomblock1: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    borderRightWidth: 2,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2
  },
  bottomblock2: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2
  },
  modaltextcontainer1: {
    fontSize: 24,
    color: Colors.secondary4,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: "5%"
  },
  modaltextcontainer2: {
    alignSelf: "center",
    fontSize: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: "6.5%",
  },
});
export default Transport_screen5;
