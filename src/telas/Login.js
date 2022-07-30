import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TextInput, Image, KeyboardAvoidingView, StatusBar, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontePadrao } from '../constantes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
    
    const [refresh_token, setRefresh_token] = useState('');
    const [access_token, setAcess_token] = useState('');
    const [status, setStatus] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgErro, setMsgErro] = useState('');
    const [botao, setBotao] = useState(false);
    const [count, setCount] = useState(0);

    const [editable, setEditable] = useState(true);

    useEffect(()=>{
        if(botao == true){
            if(email.length == 0 || password.length == 0){
                setMsgErro('Os campos não podem estar vazios.')
                setBotao(false);
                setCount(count + 1);
            } else if(validateEmail(email)){ 
                FazerLogin();
                setBotao(false);
            } else {
                setMsgErro('Email inválido');
                setBotao(false);
            }
            
        }
            
    }, [botao])




    useEffect(()=>{

        if(status == 400){
            setMsgErro('Campos de login ou senha estão errados, tente novamente.')
            setBotao(false);
            setStatus(0);
            setCount(count + 1);
        } 
         else if(status == 200){
            
            // setMsgErro('Logado');
            setBotao(false);
            
            navigation.reset({
                index: 0,
                routes: [{name: 'BottomTab'}]
            });
        }

    }, [status])

    useEffect(()=>{
        var contador = 0;
        setCount(0);
        if(count == 5){
            setMsgErro('Tentativas Bloqueadas')
            setEmail('');
            setPassword('');
            
        }
        
    }, [count == 5])

        function validateEmail (emailAdress)
        {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
        if (emailAdress.match(regexEmail)) {
        return true; 
        } else {
        return false; 
        }
        }

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
            .then( async (response) => {
                // params = response?.data.access_token;
                // console.log(response?.data.access_token, "\n",response?.data.refresh_token)
                setStatus(response.status);
                // setParams (response?.data.access_token);
                // storeData(response?.data.access_token)
                setEmail('');
                setPassword('');
                await AsyncStorage.setItem('@login', response?.data.access_token)
            })
            .catch(error => { console.log(error);setStatus(error.response.status)})
    }



    

    return (
        <KeyboardAwareScrollView >
            <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>

            {/* <Text>{params}</Text> */}

            <Image
                resizeMode='contain'
                source={require('../assets/login.png')}
                style={styles.loginLogo}
            />
            <TextInput 
                editable={editable}
                style={styles.entradas}
                placeholder='email'
                defaultValue={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput 
            secureTextEntry={true}
                placeholder='senha'
                style={styles.entradas}
                defaultValue={password}
                onChangeText={text => setPassword(text)}
            />
           
           <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.botao_entrar}
                onPress={()=>{setBotao(true)}}
            >
                <Text style={styles.texto_botao}>Entrar</Text>
            </TouchableOpacity>
           <Text style={{width: '88%', textAlign: 'center', top: '10%',fontSize: 17, color: 'orange', fontWeight: 'bold'}}
           >{msgErro}</Text>
            
            </View>
        </KeyboardAwareScrollView>
    )
}



const styles = StyleSheet.create({
    entradas: {
        paddingLeft: 10,
        width: '80%',
        backgroundColor: 'white',
        marginBottom: 23,
        borderRadius: 10,
        top: '16%',
        // position: 'absolute',
    },
    container: {
        display: 'flex',
        height: 896,
        backgroundColor: '#304FFE',
        alignItems: 'center',
      },
      loginLogo: {
        top: 92,
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
        top: '22%'
       },
       texto_botao: {
        
        color: '#304FFE',
        fontFamily: fontePadrao,
        fontSize: 15,
        // fontWeigth: 'bold',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        // justifyContent: 'center',
        // alignItems: 'center',
       },
})

export default Login;