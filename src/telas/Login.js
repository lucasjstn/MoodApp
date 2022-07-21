import axios from 'axios';
import React, { useState } from 'react';
import { TextInput, Image, KeyboardAvoidingView, StatusBar, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Entrada from '../componentes/Entrada'

const Login = ({navigation}) => {

    const [params, setParams] = useState('');
    const [status, setStatus] = useState(0);
    const [name, setName] = useState("");
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
                // params = response?.data.access_token;
                // console.log(response?.data.access_token, "\n",response?.data.refresh_token)
                setStatus(response.status);
                setParams (response?.data.access_token);
            })
            .catch(error => { setStatus(error.response.status)})
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
           <TextInput 
                style={{
                    width: '80%',
                    backgroundColor: 'white',
                    color: 'black',
                    margin: 10,
                }}

                defaultValue={name}
                onChangeText={text => setName(text)}
           />

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
           
           <Button title='console' onPress={() => {console.log(name)}}/>
           <Button title='login' onPress={FazerLogin}/>
           <Text>{email}</Text>
           <Text>{password}</Text>
           <Text>{params}</Text>
           <Text>HTTP: {status}</Text>

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