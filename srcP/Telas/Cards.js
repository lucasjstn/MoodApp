// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View, StyleSheet, FlatList, Image, Pressable, Touchable, TouchableOpacity} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import  Icon  from 'react-native-vector-icons/Ionicons';
import { Data } from '../DataBase/Data';

const emojiBem = '../assets/humores/happy.png';
const emojiNervous = '../assets/humores/terrible.png';
const emojiTriste = '../assets/humores/sad.png';

const atividades = [
  {
    festa: require('../assets/atividades/party.png'),
    esporte: require('../assets/atividades/sports.png'),
    cozinhar: require('../assets/atividades/cooking.png')
  },
]

const Cards = ({ navigation}) => {
    return (
        <View style={s.body}>
              <FlatList
                data={Data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (

                <TouchableOpacity activeOpacity={0.5} style={s.box} 
                onPress={() => navigation.navigate('CardOpened', {
                  humor: item.humor,
                  emoji: 
                    item.humor === 'bem'
                  ? require(emojiBem)
                  : item.humor === 'mal'
                  ? require(emojiNervous)
                  : item.humor === 'triste'
                  ? require(emojiTriste)
                  : null,
                  hora: item.hora,
                  data: item.data,
                  atividade1: item.nomeAtividade1,
                  atividade2: item.nomeAtividade2,
                  atividade3: item.nomeAtividade3,

                  iconeAtividade1: 

                  item.nomeAtividade1 === 'festa' 
                  ? atividades[0].festa

                  : item.nomeAtividade1 === 'esportes'
                  ? atividades[0].esporte

                  : item.nomeAtividade1 === 'cozinhar'
                  ? atividades[0].cozinhar : null,

                  iconeAtividade2: 

                  item.nomeAtividade2 === 'festa' 
                  ? atividades[0].festa

                  : item.nomeAtividade2 === 'esportes'
                  ? atividades[0].esporte

                  : item.nomeAtividade2 === 'cozinhar'
                  ? atividades[0].cozinhar : null,

                  iconeAtividade3: 

                  item.nomeAtividade3 === 'festa' 
                  ? atividades[0].festa

                  : item.nomeAtividade3 === 'esportes'
                  ? atividades[0].esporte

                  : item.nomeAtividade3 === 'cozinhar'
                  ? atividades[0].cozinhar : null,
                  
                  about: item.descricao,


                }
                )}
                >

                  {/* <Text>{item.name}</Text> */}
        
                    
                    <Image source={item.emoji} style={s.box.imagem_emoji}/>
        
                    <View style={s.box.texto_data}>
                      <Text style={s.texto}>{item.data}</Text>
                    </View>
        
                    <View style={s.box.humor_e_hora}>
                      {/* humor */}
                    
                      <Text style={
                        item.humor === 'bem' ? s.texto.bem 
                        : item.humor === 'triste' ? s.texto.triste 
                        : item.humor === 'mal' ? s.texto.mal 
                        : null }
                      >
                        {item.humor}
                      </Text>
        
                      {/* hora */}
                      <Text style={s.texto.hora}> {item.hora}</Text>
                    </View>
        
                    <View style={s.box.atividades}>
                      {/* primeira atividade */}
                      <Image source={item.atividade1_icone} resizeMode={'contain'} style={{width: '10%'}}/>
                      <Text style={{marginLeft: 5, marginRight: 8, fontWeight: 'bold', fontSize: 12, fontFamily: 'Source Sans Pro'}}>{item.nomeAtividade1}</Text>
                      {/* segunda atividade */}
                      <Image source={item.atividade2_icone} style={{width: '10%', height: '100%'}}/>
                      <Text style={{marginLeft: 5, marginRight: 8, fontWeight: 'bold', fontSize: 12, fontFamily: 'Source Sans Pro'}}>{item.nomeAtividade2}</Text>
                      {/* terceira atividade */}
                      <Image source={item.atividade3_icone} style={{width: '10%', height: '100%'}}/>
                      <Text style={{marginLeft: 5, marginRight: 8, fontWeight: 'bold', fontSize: 12, fontFamily: 'Source Sans Pro'}}> {item.nomeAtividade3}</Text>
        
                    </View>
        
        {/* descricao */}
                    <View style={s.box.descricao}>
                      <Text numberOfLines={1}>{item.descricao}</Text>
                    </View>
                  
        
        
                </TouchableOpacity>
                )}
              >
        
              </FlatList>
              </View>
              )
}

const s = StyleSheet.create({

    body: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#F1F1F1',
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
        // backgroundColor: 'red',
        width: '15%',
        height: '36%',
        left: '7.9%',
        top: '9%',
      },
      humor_e_hora: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row', 
        // backgroundColor: 'orange',
        height: '18%',
        alignItems: 'flex-end',
        top: '22%',
        left: '30%'
        
      },
      atividades: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        // backgroundColor: 'grey',
        maxWidth: '100%',
        height: '18%',
        top: '55%',
        left: '7.9%',
        color: 'black',
        fontStyle: 'Source Sans Pro',
        fontWeight: 'bold',
        fontSize: 12,
      }, 
      texto_data: {
        position: 'absolute',
        top: '10%',
        left: '30%',
        // backgroundColor: 'purple',
        height: '15%',
        texto: {
          textTransform: 'uppercase',
          fontStyle: 'Source Sans Pro',
  
        },
      },
      descricao: {
        position: 'absolute',
        display: 'flex',
        // backgroundColor: 'pink',
        top: '75%',
        left: '7.9%',
        width: '62%',
        
  
      },
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
      bem: {
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#E24B4B',
      },
      mal: {
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#4B75E2',
      },
      triste: {
        textTransform: 'uppercase',
        fontStyle: 'Source Sans Pro',
        fontWeight: '700',
        fontSize: 24,
        color: '#4BE263',
  
      }
    },
    texto_humor: {
      
    }
  
  });
  

export default Cards;