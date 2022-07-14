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


const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
            <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {height: '8%'}
                
            }}
            initialRouteName='Home' 
            backBehavior='firstRoute'
            
            >
                <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarIcon: ({focused, size, color}) => (
                        <ButtonHome color={focused? '#C6CEFF' : 'blue'}/>
                      ) 
                }}
                />
                <Tab.Screen 
                name='TabBarCards' 
                component={TabBarCards}
                options={{
                    tabBarIconStyle: {},
                    tabBarIcon: ({focused, size, color}) => (
                      <ButtonAdd color={color} size={65}/>
                    )
                }}
                />
                <Tab.Screen 
                name='List' 
                
                component={List}
                options={{
                    tabBarIcon: ({focused, size, color}) => (
                      <ButtonList color={focused? '#C6CEFF' : 'blue'}/>
                    )
                    
                  }}
                />
            </Tab.Navigator>
    )
}

function ButtonList(props) {
    return(
      props.color !== 'blue'
      ?<View style={styles.containerAtive}>
      <Icon name='list-sharp' size={20} color={props.color}/>
      </View>
      : <View style={styles.container}>
        <Icon name='list-sharp' size={20} color={'blue'}/>
        </View> 
      
    )
  }
  
  function ButtonAdd(props) {
    return (
      <View style={{height: 70, alignItems: 'center', width: 100, elevation: 10}}>
        <Icon name='add-circle-sharp' color={'blue'} size={props.size}/> 
      </View>
    )
  }
  
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

export default BottomTab;