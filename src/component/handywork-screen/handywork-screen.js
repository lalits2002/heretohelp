import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const HandyWork_Screen = props => {
    return(
    <View style={styles.screen} >
        <Text>HandyWork_Screen</Text>
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

export default HandyWork_Screen;