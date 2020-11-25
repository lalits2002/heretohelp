import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import formatDate from "../formatDate";

const Pet_screen9 = (props) => {
  const navigation = useNavigation();
  const data = { ...props.route.params };
  const  [showModal, setShowModal] = useState(false);
  const timestring =
    data.time.Hour + ":" + data.time.Minute + " " + data.time.Meridian;
  console.log(data);

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
        <Text style={styles.head}>Review your request </Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.head2}>Type of Pet Care</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.CareType}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Date</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={formatDate(data.date)}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Time</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={timestring}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Location for pet sitting</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.location}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Type of pet</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.PetType}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Pet's name</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.petName}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Pet size</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.size}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Notes</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={data.addtional}
        ></TextInput>
      </View>

      <View style={styles.container6}>
        <Dark_Button onPress={() => { setShowModal(true);}}>
          <Text> Submit</Text>
        </Dark_Button>
      </View>
      <Modal
         transparent={true}
         visible={showModal}
         animationType="slide"
         onRequestClose={() => { setShowModal(false)}}
        >


                <View style={styles.cardsection}>
                <View style={{ flex: 0.5, flexDirection: "column", alignSelf: "flex-end", paddingRight: "2%"}}>
                  <TouchableOpacity
                  onPress={() => { setShowModal(false);}}>
                  <Feather name="x-circle" size={25} color={Colors.primary3}   />
                  </TouchableOpacity>
                  </View>
                  <View style={{flex: 1, flexDirection: "column", }}>
                <Image
                  source={require('../h2h/Vector85.png')}
                  resizeMode= 'contain'
                   style={{
                    width: '20%',
                    height: '20%',
                    alignSelf: "center",


                   }}
                   /></View>
                   <Text style={styles.modaltextcontainer1}>Your request is posted!</Text>


                   <Text style={styles.modaltextcontainer2}>We will share your transportation request,
                    so local peple can reach out to you!</Text>

                {/* the above view contaisn text */}
                <View style={styles.modalbottomcontainer}>
                  <View style={styles.bottomblock1}>
                    <Text style={{fontSize: 15}} onPress={() => { setShowModal(false);}}>Cancel</Text></View>
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
    paddingTop: "7%",
    padding: "1.8%",
  },
  container1: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 1.5,
    width: "100%",
    // backgroundColor: "#A596D3",
  },
  container6: {
    flex: 1.5,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "2%",
    // paddingTop: "5%",
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  head3: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
  top: {
    flex: 0.6,
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
  input: {
    paddingHorizontal: "5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  input: {
    // paddingHorizontal: "5%",
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  cardsection: {
    flex: 1.2,
    marginVertical: "30%",
    marginRight: 25,
    marginLeft: 20,
    flexDirection: "column",
    width: "100%",
    backgroundColor: '#ffffff',
    justifyContent: "flex-end",
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.9 ,
    height: Dimensions.get('window').height * 0.2,
    borderWidth: 3,
    // paddingTop: "10%"
  },
  modalbottomcontainer: {
    flex: 0.9,
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
    paddingBottom: "7%"
  },
  modaltextcontainer2: {
    alignSelf: "center",
    fontSize: 15,
    paddingLeft: 25,
    paddingBottom: "10%",
  },

});

export default Pet_screen9;
