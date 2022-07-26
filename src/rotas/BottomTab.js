import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import Perfil from '../telas/Perfil'
import { Modal, Text, View, TextInput, TouchableOpacity, Pressable} from 'react-native';
import { darkBlue, lightBlue, lightColor } from '../constantes';

const BottomTab = ({navigation}) => {
    const Tab = createBottomTabNavigator();

    return (
      	<Tab.Navigator initialRouteName='Home' backBehavior='firstRoute'
			 screenOptions={{ headerShown: false, tabBarShowLabel: false, }} defaultScreenOptions={{}}>

			 <Tab.Screen name='Home' component={Home} options={{ unmountOnBlur: true, }} />
			 <Tab.Screen name='Add' component={Provisorio} options={{unmountOnBlur: true,}} /> 
			 <Tab.Screen name='Perfil' component={Perfil}/>

		 </Tab.Navigator>
		 	
    )
}

function Provisorio({navigation}){

	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState(false);

	const toHome = () => {
		navigation.navigate('Home');
	}

	useEffect(() => {
		setShow(true);
	}, [])

    return (

        <Modal 
		hardwareAccelerated
            visible={show}
			
        > 
			{/* //container principal */}
            <View style={{flex: 1,height: '100%',backgroundColor: lightColor}}>

				<TouchableOpacity style={{borderRadius: 10,justifyContent: 'center',width: 40, height: 40, backgroundColor: lightBlue, alignItems: 'center'}} onPress={toHome}>
					<Text style={{fontSize: 25, color: darkBlue}}>X</Text>
				</TouchableOpacity>
				<Text>Como voce está?</Text>
				<Text>hoje, 23 de janeiro</Text>
				<Text>8:35</Text>

				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<Pressable onFocus={null} onPress={()=>{setSelected(true)}} style={selected ? {width: 50, height: 50, backgroundColor: 'blue', margin: 10}: {width: 50, height: 50, backgroundColor: 'red', margin: 10}}>

					</Pressable>
					<TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'blue', margin: 10}}>

					</TouchableOpacity>
					<TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'blue', margin: 10}}>

					</TouchableOpacity>
					<TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'blue', margin: 10}}>

					</TouchableOpacity>
					<TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'blue', margin: 10}}>

					</TouchableOpacity>

					
				</View>
				<View style={{borderRadius: 10, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, height: '50%', width: '90%', alignSelf: 'center'}}>

				</View>

				

				<View style={{top: 20,borderRadius: 10, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, height: '10%', width: '90%', alignSelf: 'center'}}>
					<TextInput placeholder='escreva aqui o que aconteceu'/>
				</View>
				
				<View style={{top: 50}}>
				<TouchableOpacity style={{position: 'relative',backgroundColor: darkBlue, width: '90%', alignSelf: 'center', alignItems: 'center', top: '100%'}}>
					<Text>Salvar</Text>
				</TouchableOpacity>
				</View>
			</View>
        </Modal>
        
    )
}

export default BottomTab;