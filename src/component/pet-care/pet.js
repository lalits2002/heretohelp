import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Pet_Screen = props => {
    return(

    <View style={styles.petscreen} >{props.children}
        <Text>PetScreen</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    petscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Pet_Screen;