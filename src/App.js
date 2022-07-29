import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import BottomTab from './rotas/BottomTab';
import Login from './telas/Login';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [initialRouteName, setInitialRouteName] = useState('Login');
  const [loading, setLoading] = useState(true);
  const getStoragedData = async () => {
    const token = await AsyncStorage.getItem('@login');
    if (token) {
      setInitialRouteName('BottomTab');
      setLoading(false);
      return 
    }
    setInitialRouteName('Login');
    setLoading(false);
  };

  useEffect(() => {
    getStoragedData();

  }, [])
  
  if(loading) return  <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size={"large"} color={'blue'}/></View>


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        {
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
