import React, {useState}from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';

const App = () => {
 return (
   <View style={styles.body}>
     <Text style={styles.text}>Programming with Mash</Text>
     <TouchableOpacity style={[styles.button, styles.shadowProp]} >
       <Text style={styles.textButton}>ENTRAR</Text>
     </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
  body: {
   flex: 1,
    backgroundColor: '#304FFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
   color: 'black',
   fontSize: 20,
   fontStyle: 'italic',
   margin: 10,
  },
  button: {
   backgroundColor: '#C6CEFF',
   position: 'absolute',
   width: 133,
   height: 46,
   left: 140,
   top: 603,
   borderRadius: 10
  },
  textButton: {
   color: '#304FFE',
   fontFamily: 'Source Sans Pro',
   position: 'absolute',
   width: 56,
   height: 17,
   left: 43,
   top: 14,
   fontWeigth: 700,
   // justifyContent: 'center',
   // alignItems: 'center',
  },
  shadowProp: {
   shadowColor: '#000',
   shadowOffset: {width: 4, height: -4},
   shadowOpacity: 1,
   shadowRadius: 10,
   elevation: 10,
 },
});

export default App;

