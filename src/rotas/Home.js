import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartaoAberto from "../telas/CartaoAberto";
import Cartao from "../telas/Cartao";

const Home = () => {

    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Cartao" >
            <HomeStack.Screen name='Cartao' component={Cartao} />
            <HomeStack.Screen name='CartaoAberto' component={CartaoAberto} />
        </HomeStack.Navigator>
    )
}

export default Home;