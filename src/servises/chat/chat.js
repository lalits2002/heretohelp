import React,{ useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, Text, TextInput, Button, YellowBox } from 'react-native';
import * as firebase from 'firebase'
// import 'firebase/firestore'



YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])
// const db = firebase.firestore()
// const chatsRef = db.collection('chats')

const Chat_Screen = props => {
    return(
    <View style={styles.screen} >
        <Text>Chat_Screen</Text>
    </View>
    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Chat_Screen;