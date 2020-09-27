import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Terms_component = props => {
    return(
    <View style={styles.screen} >
        <Text>Terms_component</Text>
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

export default Terms_component;