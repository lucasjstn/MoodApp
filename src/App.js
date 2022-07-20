import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import BottomTab from './rotas/BottomTab';
import Login from './telas/Login';

const App = () => {

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="BottomTab" component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;