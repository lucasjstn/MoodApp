import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { 
    // Text, 
    View, 
    StyleSheet,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from '../Telas/LoginPage';
// import HomePage from '../Telas/HomePage';
// import Bottom from './Telas/Bottom';
// import Lista from './Telas/Lista';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Telas/Home';
import Add from '../Nav/TabBarCards';
import List from '../Telas/List';
import  Icon  from 'react-native-vector-icons/Ionicons';
import TabBarCards from '../Nav/TabBarCards';

function ButtonHome(props){
    
    return(
      props.color !== 'blue'
      ?<View style={styles.containerAtive}>
      <Icon name='home-sharp' size={20} color={props.color}/>
      </View>
      : <View style={styles.container}>
        <Icon name='home-sharp' size={20} color={'blue'}/>
        </View> 
      
    )
  }

  const styles = StyleSheet.create({
    container: {
      width: 50,
      backgroundColor: '#304ffe1a',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginBottom: 10,
      marginTop: 10,
    },
    containerAtive: {
      width: 50,
      backgroundColor: 'blue',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginBottom: 10,
      marginTop: 10,
    }
  })