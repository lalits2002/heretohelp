import React, { useState } from 'react';
import { View } from 'react-native';
import Top_container from '../handywork-screen/handy_head';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Dark_Button from '../../Items/Buttons/dark-bt';

const Social_Screen2B = (props) => {
    console.log(props);


    const data = { ...props.route.params };

    const getDate = data.selectedDate;
    console.log(getDate);
    return (
        <View style={{ ...styles.screen, ...props.style }}>
            <View style={styles.top_box} >
                <Top_container
                    title="Socialise"
                    sub_head="Coffe meetup"
                    detail_1="Friday, june 5, 2020"
                    detail_3="What time do you request?"
                />
            </View>
            <View style={styles.mid_box}></View>
            <View style={styles.bottom_box}>
                <Dark_Button onPress={() => props.navigation.navigate('socialscreen3B', {
                    ...props.route.params,
                    time: 'dev'
                })} >
                    <Text style={{ fontSize: 18 }}> Next</Text>
                </Dark_Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.6%',
        paddingTop: '7%',
        backgroundColor: '#ffffff',
    },
    top_box: {
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
        paddingLeft: '55%',
        // backgroundColor: "#9811C9",
    },
});

export default Social_Screen2B;
