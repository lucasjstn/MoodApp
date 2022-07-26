import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, FlatList, SafeAreaView, Touchable, Image, ActivityIndicator} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { emojis } from '../constantes'
import ItemRender from "../componentes/ItemRender";

const Home = () => {

    const [access_token, setAcess_token] = useState('');
    const [refresh_token, setRefresh_token] = useState('');
    const [cards, setCartao] = useState(null);
    const [count, setCount] = useState(0);
    const [object, setObject] = useState([]);
    

    useEffect(()=> {
        // console.log('token atual: \n', access_token);
        CapturarEntradas();
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
        getData('@storage_Key');
      }, [access_token])
      
      useEffect(()=>{
        CapturarEntradas();
        return (()=> {cards === null})
    }, [cards === null])
    const config = {
      headers: { 'Authorization': `Bearer cMqC64-PGaroJtIlJ-eOqNdRfFVuGhgIQZ-GjoiKZPE
      `}
    }

    const CapturarEntradas = async () => {
        try {
            await axios.get(`https://shrouded-shelf-01513.herokuapp.com/daily_entries`, config
            ).then(response => response).then(response => {setCartao(response?.data)})
        } catch (error) {
            console.warn(error);
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

    const data = [
        // {
        //     "id": 518,
        //     "mood": "happy",
        //     "created_at": "2022-07-23T11:59:45.324Z",
        //     "updated_at": "2022-07-23T11:59:45.324Z",
        //     "user_id": 19,
        //     "short_description": "asdsdad fo...",
        //     "activities": [
        //         {
        //             "id": 1,
        //             "name": "sports"
        //         },
        //         {
        //             "id": 4,
        //             "name": "party"
        //         },
        //         {
        //             "id": 3,
        //             "name": "rest"
        //         }
        //     ]
        // },
        // {
        //     "id": 519,
        //     "mood": "sad",
        //     "created_at": "2022-07-23T12:43:11.578Z",
        //     "updated_at": "2022-07-23T12:43:11.578Z",
        //     "user_id": 19,
        //     "short_description": "asdsdad fo...",
        //     "activities": [
        //         {
        //             "id": 1,
        //             "name": "sports"
        //         },
        //         {
        //             "id": 4,
        //             "name": "party"
        //         },
        //         {
        //             "id": 3,
        //             "name": "rest"
        //         }
        //     ]
        // },
        // {
        //     "id": 520,
        //     "mood": "bad",
        //     "created_at": "2022-07-23T12:43:11.578Z",
        //     "updated_at": "2022-07-23T12:43:11.578Z",
        //     "user_id": 19,
        //     "short_description": "asdsdad fo...",
        //     "activities": [
        //         {
        //             "id": 1,
        //             "name": "sports"
        //         },
        //         {
        //             "id": 4,
        //             "name": "party"
        //         },
        //         {
        //             "id": 3,
        //             "name": "rest"
        //         }
        //     ]
        // },
        
    ]

    // const newobj = Object.values(cards);
    // console.log(newobj)
    // console.log(' --------newobj-------\n', newobj[0]['activities'])
    
    // console.log(data[1].mood)
 
    //   console.log(emojis['sad']);
    if(cards == null) return <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size={"large"} color={'blue'}/></View>
    console.log('cartao 1: \n', cards != null ? Object.keys(cards) : 'nulo');
    console.log(typeof cards !== 'undefined' ? cards[0].activities[2]  : 'nulo')
      const Cartao = ({navigation}) => {
          return(
              <SafeAreaView>
                 <FlatList 
                      ListEmptyComponent={ListaVazia}
                      data={cards}
                      renderItem={({item}) => 
                          <ItemRender 
                            id={item.id} 
                            emoji={emojis[`${item.mood}`]}
                            mood={item.mood} 
                            created_at={item.created_at}
                            short_description={item.short_description}
                            activities1={typeof item.activities[0] === 'undefined' ? null : item.activities[0].name }
                            activities2={typeof item.activities[1] === 'undefined' ? null : item.activities[1].name}
                            activities3={typeof item.activities[2] === 'undefined' ? '' : item.activities[2].name  }
                            />}
                      keyExtractor={item => item.id}
                 />
              </SafeAreaView>
          )
      }
      const ListaVazia = () => {
         
          setTimeout(() => {
            return (
              <View style={styles.container}>
              <StatusBar barStyle={'dark-content'}
                        backgroundColor={'white'}
              />
        
              <View style={styles.conteudo}>
        
                  {/* <Image source={require('../assets/carinha.png')} style={styles.carinha}/> */}
        
                <Text>{access_token.length}</Text>
                <Text style={styles.texto}>
                  Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela.
                </Text>
              </View>
        
            </View>    
          )
          }, 0);
        
      }
      

    const CartaoAberto = () => {

    }



    // console.log(object);
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Cartao" screenOptions={{headerShown: false,}}>
            <>
            <HomeStack.Screen name='Cartao' component={Cartao} />
            <HomeStack.Screen name='CartaoAberto' component={CartaoAberto} />
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