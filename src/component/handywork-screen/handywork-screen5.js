import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

const HandyWork_Screen5 = props => {
    return (
      <View style={{ ...styles.screen, ...props.style}}>
        <Text> develop </Text>
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
    marginTop: '7%'
  }
});





export default HandyWork_Screen5;