import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import Top_container from './handy_head';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';


const HandyWork_Screen3 = props => {
  console.log(props);


  const data = {...props.route.params};

  const getDate = data.selectedDate;
  console.log(getDate);

    return(
      <View style={{ ...styles.screen, ...props.style}}>

      <View style={styles.top_box} >
        <Top_container
            title="Handy Work"
            sub_head="Handyman Services"
            detail_1="Friday, june 5, 2020"
            detail_3="What time do you request?"
         />
      </View>

      <View style={styles.mid_box}></View>
      <View style={styles.bottom_box}>
        <Dark_Button onPress={() => props.navigation.navigate('handyWorkScreen4', {
           ...props.route.params,
           time: 'dev'
        })} >
          <Text style={{fontSize: 18}}> Next</Text>
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
    backgroundColor: "#ffffff",
    padding: "1.8%",
    paddingTop: '7%'

  },
  top_box:{
    flex: 4,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'rgb(25,5,120)',
  },
  mid_box: {
    flex: 4.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  bottom_box: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: '60%',
    // backgroundColor: "#9811C9",
  },
  back:{
    alignSelf: "flex-start",
    fontSize: 16,
    // color: Colors.primary2,
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    // color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 19,
    // color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: 'flex-start',
    fontWeight: "bold",
  },
});

export default HandyWork_Screen3;