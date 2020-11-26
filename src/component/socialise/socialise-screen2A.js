import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import Top_container from "../handywork-screen/handy_head";
import Dark_Button from "../../Items/Buttons/dark-bt";
import Colors from "../../Items/Colors";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Modal from 'react-native-modal';

const Social_Screen2A = (props) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const data = { ...props.route.params };
  console.log(props.route.params);

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
          <Text style={styles.head2}>Types of social activity</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={data.SocialSet}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.head2}>Location</Text>
          <TextInput style={styles.input} editable={false} value={data.time} />
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
  box: {
    width: "100%",
    //  backgroundColor: "#267DA5",
  },
  container1: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 5.0,
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

export default Social_Screen2A;
