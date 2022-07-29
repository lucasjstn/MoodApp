import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Image,
  Alert,
  Modal,
} from 'react-native';
import {darkBlue, fontePadrao, FotoLista, generosTrad, lightColor} from '../constantes';
import EditarPerfil from './Modal/EditarPerfil';

const PerfilHome = ({navigation, route}) => {
  const [access_token, setAcess_token] = useState('');
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  useEffect(() => {
    getData('@login');
  });

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setAcess_token(value);
      }
    } catch (e) {
      // console.warn(e);
    }
  };

  useEffect(()=>{
    setTimeout(() => {
      DadosUsuario();
    }, 10);
  })

  useEffect(() => {
    // console.log('token atual: \n', access_token);
    DadosUsuario();
    // console.log(cards);
  }, [access_token]);

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const DadosUsuario = async () => {
    try {
      await axios
        .get(`https://shrouded-shelf-01513.herokuapp.com/user`, config)
        .then(response => response)
        .then(response => {
          setUserData(response?.data);
        })
        .catch(error => error);
    } catch (error) {}
  };
  if (userData == null)
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );

    const photo = FotoLista[''];
      // console.log(userData['photo']['id'], FotoLista[0])
  // console.log(userData);
  const ano = userData['birthdate'].slice(0, 4);
  const mes = userData['birthdate'].slice(5, 7);
  const dia = userData['birthdate'].slice(8, 10);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${FotoLista[userData['photo']['id']-1]['photo']}`,
        }}
      />

      {/* <Text>access: {access_token}</Text> */}
      <View
        style={{
          // backgroundColor: 'pink',
          maxWidth: '80%',
          height: 100,
          width: '80%',
          alignSelf: 'center',
          height: 50,
          position: 'absolute',
          top: 350,
        }}>
        <View style={styles.info}>
          <Text style={styles.info.titulo}>EMAIL: </Text>
          <Text style={styles.info.content} numberOfLines={1}>
            {userData['email']}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.info.titulo}>gênero:</Text>
          <Text style={styles.info.content} numberOfLines={1}>
            {generosTrad[userData['gender']]}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.info.titulo}>data de nascimento:</Text>
          <Text style={styles.info.content} numberOfLines={1}>
            {dia}/{mes}/{ano}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botaoSalvar}
          onPress={() => {
            navigation.navigate('EditarPerfil', {
                currentPhoto: `${FotoLista[userData['photo']['id']-1]['photo']}`,
                currentName: userData['name'],
                currentEmail: userData['email'],
                currentGender: generosTrad[userData['gender']],
                currentBirth: JSON.stringify([dia, mes, ano]),
                access_token: access_token,

            });
          }}>
          <Text style={styles.botaoSalvar.texto}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Alert.alert('Atenção', 'Deseja mesmo sair?', [
              {text: 'CANCELAR'},
              {
                text: 'SIM',
                onPress: () => {
                  navigation.navigate('Login');
                  axios.get(
                    `https://shrouded-shelf-01513.herokuapp.com/daily_entries`,
                    config,
                  );
                },
              },
            ]);
          }}
          style={styles.botaoSair}>
          <Text style={styles.botaoSair.texto}>sair</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.ola}>olá, {userData['name']}</Text>

    </View>
  );
};



const Perfil = ({navigation, route}) => {
  const PerfilStack = createStackNavigator();
  return (
    <PerfilStack.Navigator
      initialRouteName="PerfilHome"
      screenOptions={{headerShown: false}}>
      <PerfilStack.Screen name="PerfilHome" component={PerfilHome} />
      <PerfilStack.Screen name="EditarPerfil" component={EditarPerfil} />
    </PerfilStack.Navigator>
  );
};

const styles = StyleSheet.create({
    imagemeditar: {
        width: 128,
        height: 128,
        borderRadius: 128 / 2,
        top: '07%',
    },
  botaoSair: {
    alignSelf: 'center',
    width: '133%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    texto: {
      color: 'black',
      fontWeight: 'bold',
      fontFamily: fontePadrao,
      textTransform: 'uppercase',
    },
  },
  botaoSalvar: {
    alignSelf: 'center',
    width: '133%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#304FFE',
    texto: {
      color: lightColor,
      fontWeight: 'bold',
      fontFamily: fontePadrao,
      textTransform: 'uppercase',
    },
  },
  info: {
    // maxWidth: 200,
    width: 300, // position: 'absolute',
    flexDirection: 'row',
    left: -30,
    // top: 350,
    // left: 42,
    titulo: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      margin: 2,
    },
    content: {
      fontWeight: '400',
      textTransform: 'uppercase',
      margin: 2,
    },
  },
  ola: {
    position: 'absolute',
    color: 'black',
    fontWeight: '400',
    top: 300,
    fontSize: 30,
    fontFamily: 'Source Sans Pro',
    textTransform: 'capitalize',
  },
  image: {
    backgroundColor: 'pink',
    width: 128,
    height: 128,
    borderRadius: 128 / 2,
    top: 128,
  },
  container: {
    height: '100%',
    backgroundColor: lightColor,
    alignItems: 'center',
  },
});

export default Perfil;
