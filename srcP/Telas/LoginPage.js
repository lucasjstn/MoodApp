import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity, StatusBar} from 'react-native';
import Entrada from "../Componentes/Entrada";


export default function LoginPage(){

    const navigation = useNavigation('');
    const aoApertar = () => {

        navigation.reset({
            index: 0,
            routes: [{name: 'BottomTab'}],
        });
        }
    

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <StatusBar barStyle={'dark-content'}
                backgroundColor={'white'}
            />
            <Image
                resizeMode='contain'
                source={require('../assets/login.png')}
                style={styles.loginLogo}
            />
            <Entrada placeholder='e-mail' />
            <Entrada placeholder='senha' Senha/>

            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.botao_entrar}
                onPress={(aoApertar)}
            >
                <Text style={styles.texto_botao}>Entrar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        backgroundColor: '#304FFE',
        alignItems: 'center',
        // justifyContent: 'center',
      },
      loginLogo: {
        width: 228,
        height: 228,
        // marginBottom: 58
        marginTop: '14%',
        marginLeft: '21%',
        marginRight: '21%',
       },
       botao_entrar: {
        backgroundColor: '#C6CEFF',
       //  position: '',
        justifyContent: 'center',
        alignItems: 'center',
        width: 133,
        height: 46,
        marginTop: 82,
        borderRadius: 10
       },
       texto_botao: {
        color: '#304FFE',
        fontFamily: 'Source Sans Pro',
        fontSize: 15,
        fontWeigth: 'bold',
        textTransform: 'uppercase',
        // justifyContent: 'center',
        // alignItems: 'center',
       },
})

