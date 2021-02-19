import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Request_Screen = props => {
    return(

    <View style={styles.screen} >
        <Text>Request_Screen</Text>
    </View>
    );  
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Request_Screen;