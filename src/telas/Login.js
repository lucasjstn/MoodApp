import axios from 'axios';
import React, { useState } from 'react';
import { TextInput, Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { azul, corClara, fontePadrao, height, loginLogo, width } from '../constantes';


const Login = ({navigation}) => {

    const [status, setStatus] = useState('');
    const [email, setEmail] = useState("lucas7@email.com");
    const [password, setPassword] = useState("senhasenha");

    const FazerLogin = () => {
        
        axios
            .post("https://shrouded-shelf-01513.herokuapp.com/oauth/token", 
                {
                    "grant_type": "password",
                    "email": email,
                    "password": password,
                    "client_id": "3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc",
                    "client_secret": "389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0",
                }
            )
            .then(response => {
                // token = response?.data.access_token;
                // console.log(response?.data.access_token, "\n",response?.data.refresh_token)
                navigation.navigate('BottomTab');
                // navigation.reset({
                //     index: 0,
                //     routes: [{name: 'BottomTab'}]
                // });
                setStatus('');
            })
            .catch(error => { setStatus('Email ou senha inválidos, por favor tente novamente.')})

            
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
            <Text style={styles.mensagem_erro}>{status}</Text>
            <Image source={loginLogo} resizeMode='contain' style={styles.login_logo}/>

            <TextInput 
                style={styles.entradatexto1}
                defaultValue={email}
                returnKeyType='route'
                placeholder='email'
                onChangeText={text => setEmail(text)}
            />

            <TextInput 
                style={styles.entradatexto2}
                defaultValue={password}
                placeholder='senha'
                keyboardType='ascii-capable'
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />
           
           

           <TouchableOpacity 
                title='login' 
                onPress={FazerLogin}
                style={styles.botao_entrar}
                >
            <Text style={styles.botao_entrar_texto}>Entrar</Text>
           </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    mensagem_erro: {
        position: 'absolute',
        top: height * 0.34,
        fontFamily: fontePadrao,
        color: 'orange',
    },
    entradatexto1: {
        padding: 10,
        position: 'absolute',
        width: width * 0.77,
        margin: 10,
        top: height * 0.36,
        backgroundColor: corClara,
        borderRadius: 10,
    },
    entradatexto2: {
        padding: 10,
        // position: 'absolute',
        width: width * 0.77,
        marginBottom: 10,
        // top: height * 0.38,
        backgroundColor: corClara,
        borderRadius: 10,
    },
    login_logo: {
        top: height * 0.07,
        position: 'absolute',
        width: width * 0.55,//228, //
        height: width * 0.55,
        // backgroundColor: 'red',
    },
    container: {
        justifyContent: 'center',
        display: 'flex',
        height: height,
        backgroundColor: azul,
        alignItems: 'center',
      },
      loginLogo: {
        width: 228,
        height: 228,

       },
       botao_entrar_texto:{
        fontFamily: fontePadrao,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: azul,
       },
       botao_entrar: {
        backgroundColor: '#C6CEFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 133,
        height: 46,
        borderRadius: 10,
        top: 30,
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