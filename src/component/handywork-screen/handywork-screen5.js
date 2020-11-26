import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import formatDate from "../formatDate";
import Modal from 'react-native-modal';

const HandyWork_Screen5 = (props) => {
  const navigation = useNavigation();
  const data = { ...props.route.params };

  const timestring =
    data.time.Hour + ":" + data.time.Minute + " " + data.time.Meridian;
    const [isModalVisible, setModalVisible] = useState(false);



  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name="chevron-left" size={15} color={Colors.primary3} />{" "}
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={styles.head}>Review your request</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Text style={styles.head2}>Type of service</Text>
          <TextInput style={styles.input} editable={false} value={data.type} />
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}>Date</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={formatDate(data.selectedDate)}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}>Time</Text>
          <TextInput style={styles.input} editable={false} value={timestring} />
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}>Notes</Text>
          <TextInput style={styles.input} editable={false} value={data.note} />
        </View>
      </View>

      <View style={styles.container3}>
        <Dark_Button
         onPress={() => {setModalVisible(true);}}
         >

          <Text style={{ fontSize: 18 }}>Submit</Text>
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
    marginTop: "7%",
  },
  top: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    // backgroundColor: "#A596D3",
  },
  container1: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 2.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "40%",
    paddingHorizontal: "2%",
    // backgroundColor: "#9811C9",
  },
  container3: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingLeft: "60%",
    // paddingBottom: '1%',
    // backgroundColor: "#C6C438",
  },
  box: {
    width: "100%",
    //  backgroundColor: "#267DA5",
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 15.6,
    fontWeight: "bold",
    color: Colors.secondary2,
  },
  input: {
    paddingTop: "2.5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
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

export default HandyWork_Screen5;
