import React from 'react';
import { Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entrada from '../componentes/Entrada'


const Login = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>

            <Image 
                
            />

            <Entrada placeholder='email' keyboardType='email-address'/> 
            <Entrada Senha placeholder='senha'/>

            <TouchableOpacity activeOpacity={0.8} style={styles.botao_entrar} onPress={() => navigation.navigate('BottomTab')}>
                <Text>Entrar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#304FFE',
        alignItems: 'center',
      },
      loginLogo: {
        width: 228,
        height: 228,

       },
       botao_entrar: {
        backgroundColor: '#C6CEFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 133,
        height: 46,
        borderRadius: 10,
        top: 1,
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

export default Login;