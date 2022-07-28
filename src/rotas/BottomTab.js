import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import Perfil from '../telas/Perfil';
import {
  Modal,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  darkBlue,
  emojis,
  emojislist,
  lightBlue,
  lightColor,
} from '../constantes';
import {Item2render, ListEmoji} from '../componentes/ItemRender';
import Adicionar from './Adicionar';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = ({navigation, route}) => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    
      initialRouteName="Home"
      backBehavior="firstRoute"
      screenOptions={{
        tabBarStyle: {height: 60},
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
      defaultScreenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused, size, color}) => (
            <ButtonHome color={focused ? '#C6CEFF' : 'blue'} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Adicionar}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused, size, color}) => (
            <ButtonAdd color={color} size={65} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{}}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused, size, color}) => (
            <ButtonList color={focused ? '#C6CEFF' : 'blue'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function ButtonList(props) {
  return props.color !== 'blue' ? (
    <View style={styles.containerAtive}>
      <Icon name="list-sharp" size={20} color={props.color} />
    </View>
  ) : (
    <View style={styles.container}>
      <Icon name="list-sharp" size={20} color={'blue'} />
    </View>
  );
}

function ButtonAdd(props) {
  return (
    <View style={{height: 70, alignItems: 'center', width: 100, elevation: 10}}>
      <Icon name="add-circle-sharp" color={'blue'} size={props.size} />
    </View>
  );
}

function ButtonHome(props) {
  return props.color !== 'blue' ? (
    <View style={styles.containerAtive}>
      <Icon name="home-sharp" size={20} color={props.color} />
    </View>
  ) : (
    <View style={styles.container}>
      <Icon name="home-sharp" size={20} color={'blue'} />
    </View>
  );
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
  },
});

export default BottomTab;
