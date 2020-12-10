// import React from 'react';
// import { StyleSheet, View, Text, Modal } from 'react-native';
// import Dark_Button from "./Buttons/dark-bt";

// const Confirm = ({ showModal, onAccept, onDeline }) => {
//     return(
//         <Modal
//          transparent={true}
//          visible={showModal}
//          animationType="slide"
//          onRequestClose={() => {}}
//         >
//             <View style={styles.container}>
//                 {/* the above view is the container which contains all image */}
//                 <View style={styles.cardsection}>
//                    <Text style={styles.textcontainer}>Are you sure that you want to proceed</Text>
//                 </View>
//                 {/* the above view contaisn text */}
//                 <View style={styles.bottomcontainer}>
//                     <Dark_Button onPress={onAccept}><Text>Cancel</Text></Dark_Button>
//                     <Dark_Button onPress={onDeline}><Text>Got it</Text></Dark_Button>
//                 </View>
//             </View>
//         </Modal>
//     )

// };

// const styles = StyleSheet.create({
//     textcontainer: {
//         flex: 1,
//         fontSize: 18,
//         textAlign: "center",
//         lineHeight: 40,
//     },

//     container: {
//         backgroundColor: "rgba(0, 0, 0, 0.75)",
//         position: "relative",
//         flex: 1,
//         justifyContent: "center"
//     },
//     cardsection: {
//         justifyContent: "center"

//     }

// });


// export default Confirm ;
