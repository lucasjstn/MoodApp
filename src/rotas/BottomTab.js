import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import Perfil from '../telas/Perfil'
import { Modal, View } from 'react-native';

const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    return (
      	<Tab.Navigator initialRouteName='Home' backBehavior='firstRoute'
			 screenOptions={{ headerShown: false, tabBarShowLabel: false, }} defaultScreenOptions={{ tabBarStyle: {} }}>

			 <Tab.Screen name='Home' component={Home} options={{ tabBarIconStyle: { left: -40 } }} />
			 <Tab.Screen name='Add' component={Provisorio}/> 
			 <Tab.Screen name='Perfil' component={Perfil} />

		 </Tab.Navigator>
		 	
    )
}

function Provisorio(){
	return (
		<Modal style={{justifyContent: 'center', alignItems: 'center'}}> 
			<View style={{width: 100, height: 100, backgroundColor: 'black'}}>

			</View>
		</Modal>
	)
}

export default BottomTab;