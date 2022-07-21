import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartaoAberto from "../telas/CartaoAberto";
import Cartao from "../telas/Cartao";
import { Text, View } from "react-native";

const Home = ({route}) => {
    const { token, email } = route.params;
    

    const HomeStack = createNativeStackNavigator();

    return (
        // <HomeStack.Navigator initialRouteName="Cartao" >
        //     <HomeStack.Screen name='Cartao' component={Cartao} />
        //     <HomeStack.Screen name='CartaoAberto' component={CartaoAberto} />
        // </HomeStack.Navigator>

        <View style={{top: '50%'}}>
            <Text>{email} asdasdaasdasdasssadas</Text>
            <Text>{token}</Text>
        </View>
    )
}

export default Home;