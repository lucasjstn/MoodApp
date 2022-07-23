import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, FlatList, SafeAreaView, Touchable, Image} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import emojis from '../constantes'


const Home = () => {

    const [access_token, setAcess_token] = useState('');
    const [refresh_token, setRefresh_token] = useState('');
    const [cards, setCartao] = useState([]);
    const [count, setCount] = useState(0);
    const [object, setObject] = useState([]);
    

    useEffect(()=> {
        CapturarEntradas();
        // console.log(cards);
    }, [])

    const getData = async () => {
        try {
            AsyncStorage.getItem('@token').then(value => {
                    setAcess_token(value);
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    const CapturarEntradas = () => {
        axios.get('https://shrouded-shel.herokuapp.com/daily_entries', {
            headers: { 'Authorization': `Bearer 68lMx8dLkJe0XlyEF9FHa6Nehh7htU25_EaUgBx0myo`}
        }).then(response => {
            // console.log(response?.data)
            setCartao(Object.keys(response?.data).length);
            setObject(response?.data);
        }).catch(error => console.log(error))
    }

    const data = [
        {
            "id": 518,
            "mood": "sad",
            "created_at": "2022-07-23T11:59:45.324Z",
            "updated_at": "2022-07-23T11:59:45.324Z",
            "user_id": 19,
            "short_description": "asdsdad fo...",
            "activities": [
                {
                    "id": 1,
                    "name": "sports"
                },
                {
                    "id": 4,
                    "name": "party"
                },
                {
                    "id": 3,
                    "name": "rest"
                }
            ]
        },
        {
            "id": 519,
            "mood": "sad",
            "created_at": "2022-07-23T12:43:11.578Z",
            "updated_at": "2022-07-23T12:43:11.578Z",
            "user_id": 19,
            "short_description": "asdsdad fo...",
            "activities": [
                {
                    "id": 1,
                    "name": "sports"
                },
                {
                    "id": 4,
                    "name": "party"
                },
                {
                    "id": 3,
                    "name": "rest"
                }
            ]
        },
        
    ]

    const newobj = Object.values(cards);
    console.log(newobj)
    // console.log(' --------newobj-------\n', newobj[0]['activities'])
    

    const ItemRender = ({ id, mood, created_at, updated_at, user_id, short_description, activities, emoji }) => (
                <TouchableOpacity
                    style={styles.box}
                    activeOpacity={0.6}
                    onPress={()=> navigation .navigate('CartaoAberto')}
                >
                    <Image source={emoji} style={styles.box.imagem_emoji}/>
                    <Text style={styles.itemText}> {id} </Text>
                    <Text style={null}>{mood}</Text>
                    <Text style={null}>{created_at}</Text>
                    <Text style={null}>{updated_at}</Text>
                    <Text style={null}>{short_description}</Text>
                    <Text style={null}>{activities}</Text>
                </TouchableOpacity>
      );
      
      const Cartao = ({navigation}) => {
          return(
              <SafeAreaView>
                 <FlatList 
                      data={data}
                      renderItem={({item}) => 
                          <ItemRender 
                            id={item.id} 
                            mood={item.mood} 
                            created_at={item.created_at}
                            short_description={item.short_description}
                            activities={[item.activities[0].name, item.activities[1].name, item.activities[2].name]}
                            />}
                      keyExtractor={item => item.id}
                 />
              </SafeAreaView>
          )
      }
      const ListaVazia = () => {
          return (
              <View style={styles.container}>
              <StatusBar barStyle={'dark-content'}
                        backgroundColor={'white'}
              />
        
              <View style={styles.conteudo}>
        
                  {/* <Image source={require('../assets/carinha.png')} style={styles.carinha}/> */}
        
                <Text style={styles.texto}>
                  Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela.
                </Text>
        
              </View>
        
            </View>    
          )
      }
      

    const CartaoAberto = () => {

    }



    // console.log(object);
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Cartao" screenOptions={{headerShown: false,}}>
            {cards == 0?
            <>
            <HomeStack.Screen name='Cartao' component={Cartao} />
            <HomeStack.Screen name='CartaoAberto' component={CartaoAberto} />
            </>
            :
            <>
            <HomeStack.Screen name='ListaVazia' component={ListaVazia}/>
            </>
            }
           
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
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