import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const PetScreen = props => {
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
    }
});

export default PetScreen;