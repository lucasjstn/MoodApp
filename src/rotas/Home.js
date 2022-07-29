import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, FlatList, SafeAreaView, Touchable, Image, ActivityIndicator, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { emojis } from '../constantes'
import ItemRender from "../componentes/ItemRender";
import CartaoAberto from "../telas/CartaoAberto";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Home = ({navigation}) => {
    
    const [access_token, setAcess_token] = useState('');
    const [refresh_token, setRefresh_token] = useState('');
    const [cards, setCartao] = useState(null);
    const [count, setCount] = useState(0);
    const [object, setObject] = useState([]);
    
    const isFocused = useIsFocused();



    useEffect(()=> {
        // console.log('token atual: \n', access_token);
        CapturarEntradas();
        console.log(access_token)
        // console.log(cards);
    }, [access_token])


    const getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
            setAcess_token(value);
          }
        } catch(e) {
          // error reading value
        }
      }

      useEffect(()=>{
        getData('@login');
      }, [access_token])
      
    //   useEffect(()=>{
    //     CapturarEntradas();
    //     return (()=> {cards === null})
    // }, [cards === null])
    const config = {
      headers: { 'Authorization': `Bearer ${access_token}`}
    }

    const CapturarEntradas = async () => {
        try {
            await axios.get(`https://shrouded-shelf-01513.herokuapp.com/daily_entries`, config
            ).then(response => response).then(response => {setCartao(response?.data)})
        } catch (error) {
            // console.warn(error);
        }   
        
        // console.log('cards no documento: \n', cards);
        // axios.get('https://shrouded-shel.herokuapp.com/daily_entries', {
        //     headers: { 'Authorization': `Bearer ${access_token}`}
        // }).then(response => {
        //     // console.log(response?.data)
        //     setCartao(Object.keys(response?.data).length);
        //     setObject(response?.data);
        // }).catch(error => console.log('erororororo: \n', error))
    }


    // const newobj = Object.values(cards);
    // console.log(newobj)
    // console.log(' --------newobj-------\n', newobj[0]['activities'])
    
    // console.log(data[1].mood)
 
    //   console.log(emojis['sad']);
    if(cards == null) return <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size={"large"} color={'blue'}/></View>
    // console.log('cartao 1: \n', cards != null ? Object.keys(cards) : 'nulo');
    // console.log(typeof cards !== 'undefined' ? cards[0].activities[2]  : 'nulo')
    // console.log(emojis[0]['sad'])

    const abrirCartao = (rota, payload) => {
      navigation.navigate(rota, payload);
    }
    
      const Cartao = ({navigation}) => {
          return(
              <SafeAreaView>
                 <FlatList 
                      ListEmptyComponent={ListaVazia}
                      data={cards}
                      renderItem={({item}) => 
                          <ItemRender 
                            id={item.id} 
                            emoji={emojis[0][`${item.mood}`]}
                            mood={item.mood} 
                            created_at={item.created_at}
                            short_description={item.short_description}
                            activities1={typeof item.activities[0] === 'undefined' ? null : item.activities[0].name }
                            activities2={typeof item.activities[1] === 'undefined' ? null : item.activities[1].name}
                            activities3={typeof item.activities[2] === 'undefined' ? '' : item.activities[2].name  }
                            icone1={item.activities[0].id}
                            icone2={item.activities[1].id}
                            icone3={item.activities[2].id}
                            navigation={()=>abrirCartao('CartaoAberto', {
                              id: item.id,
                              token: access_token,
                              atividade1: item.activities[0].name,
                              atividade2: item.activities[1].name,
                              atividade3: item.activities[2].name,
                              created_at: cards[0].created_at,
                            })}
                            />}
                      keyExtractor={item => item.id}
                 />
                 {/* <Text>{access_token.length}</Text> */}
              </SafeAreaView>
          )
      }
      const ListaVazia = () => {
         

            return (
              <View style={styles.container}>
              <StatusBar barStyle={'dark-content'}
                        backgroundColor={'white'}
              />
              <Image source={require('../assets/carinha.png')} style={{alignSelf: 'center', top: 5}}/>
              <View style={styles.conteudo}>
        
                  {/* <Image source={require('../assets/carinha.png')} style={styles.carinha}/> */}
        
                {/* <Text>{access_token.length}</Text> */}
                <Text style={styles.texto}>
                  Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela.
                </Text>
              </View>
        
            </View>    
          )
         
        
      }
      


    // console.log(object);
    const HomeStack = createBottomTabNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Cartao" screenOptions={{headerShown: false,}} tabBar={()=> null}>
            <>
            <HomeStack.Screen name='Cartao' options={{unmountOnBlur: true}} component={Cartao} />
            <HomeStack.Screen name='CartaoAberto' options={{unmountOnBlur: true}} component={CartaoAberto} />
            </>
            <>
            <HomeStack.Screen name='ListaVazia' component={ListaVazia} />
            </>
      
           
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
    bem: {
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: 16,
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#E24B4B',
      },
      mal: {
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: 16,
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#4B75E2',
      },
      triste: {
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: 16,
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#4BE263',
      },
    texto: {
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: 16,
        
        hora: {
          textTransform: 'uppercase',
          fontStyle: 'Source Sans Pro',
          fontWeight: '400',
          fontSize: 14,
        },
        
        
        
      },
    box: {
        display: 'flex',
        width: '88%',
        height: 158,
        backgroundColor: 'white',
        marginTop: '5.5%',
        left: '6%',
        borderRadius: 10,
        imagem_emoji: {
          position: 'absolute',
          backgroundColor: 'red',
          width: '15%',
          height: '36%',
          left: '7.9%',
          top: '9%',
        },
    },
      conteudo: {
        display: 'flex', 
        height: '92%',
        alignItems: 'center',
    
      },
      carinha: {
        marginTop: 100,
        width: 48,
        height: 48
        
      },
      texto: {
        textAlign: 'center',
        width: '60%',
        margin: 15,
        fontFamily: 'Source Sans Pro',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '400',
      }
})

export default Home;