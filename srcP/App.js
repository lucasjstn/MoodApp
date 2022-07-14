import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './Telas/LoginPage';
import BottomTab from './Nav/BottomTab';

const App = () => {
    
    const Stack = createNativeStackNavigator();
    
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName='Login'
            >
                <Stack.Screen name='Login' component={LoginPage}/>
                <Stack.Screen name='BottomTab' component={BottomTab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;