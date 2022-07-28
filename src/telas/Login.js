import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TextInput, Image, KeyboardAvoidingView, StatusBar, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    
    const [refresh_token, setRefresh_token] = useState('');
    const [access_token, setAcess_token] = useState('');
    let userToken = ''; 
    let userRefresh_token = '';
    let user = {
        Name: access_token,
        Age: refresh_token
    };
    const [status, setStatus] = useState(0);
    const [email, setEmail] = useState("lucas7@email.com");
    const [password, setPassword] = useState("senhasenha");
    const [msgErro, setMsgErro] = useState('');
    const [botao, setBotao] = useState(false);
    const [count, setCount] = useState(0);
    const [userInfo, setUserInfo] = useState({});
    const [params, setParams] = useState('');

    useEffect(() => {
        AsyncStorage.removeItem('@login');
    }, [])
    useEffect(()=>{
        // console.log('mount');
        // console.log('email: ', email);
        // console.log('senha: ', password);
        // console.log('status: ', status);
        // FazerLogin();
        if(botao == true){
            if(email.length == 0 || password.length == 0){
                setMsgErro('Os campos não podem estar vazios.')
                setBotao(false);
                setCount(count + 1);
            } else { 
                FazerLogin();
                setBotao(false);
            }   
            
        }
            
    }, [botao])

    const storeData = async (value) => {
        try {
            // console.log(value);
          await AsyncStorage.setItem('@login', value)
        } catch (e) {
          // saving error
        }
      }


    useEffect(()=>{

        if(status == 400){
            setMsgErro('Campos de login ou senha estão errados, tente novamente.')
            setBotao(false);
            setStatus(0);
            setCount(count + 1);
        } 
         else if(status == 200){
            
            setMsgErro('Logado');
            setBotao(false);
            
            navigation.navigate('BottomTab');
        }

    }, [status])

    useEffect(()=>{

        setCount(0);
        if(count == 5){
            setMsgErro('Tentativas Bloqueadas')
            setEmail('');
            setPassword('');
        }
        
    }, [count == 5])

    // console.log(access_token);

    

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
                // params = response?.data.access_token;
                // console.log(response?.data.access_token, "\n",response?.data.refresh_token)
                setStatus(response.status);
                setParams (response?.data.access_token);
                storeData(response?.data.access_token)
            })
            .catch(error => { console.log(error);setStatus(error.response.status)})
    }



    

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>

            <Text>{params}</Text>
            <TextInput 
                style={{
                    width: '80%',
                    backgroundColor: 'white',
                    color: 'black',
                    margin: 10,
                }}

                defaultValue={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput 
                style={{
                    width: '80%',
                    backgroundColor: 'white',
                    color: 'black',
                    margin: 10,
                }}
                
                defaultValue={password}
                onChangeText={text => setPassword(text)}
            />
           
           <Button title='login' onPress={()=> {setBotao(true)
            console.log('Botao clicado')}}/>
           <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}
           >HTTP: {msgErro}</Text>
            <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}
           >{botao ? 'true' : 'false'}</Text>
            <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}
           >{count}</Text>

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