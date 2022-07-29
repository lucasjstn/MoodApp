import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { atividadesicones, darkBlue, emojis, fontePadrao, lightBlue, meses, nomeAtividades } from '../constantes'
import  Icon  from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useFocusEffect } from "@react-navigation/native";
import { create } from "react-test-renderer";
const CartaoAberto = ({route, navigation}) => {
    
    const [data, setData] = useState(null)
    useEffect(() => {
        PegarEntrada()

    }, [data])
    

    const { id, token, atividade1, atividade2, atividade3, created_at} = route.params;

    const now = new Date().getDate();
  const mesNow = new Date().getMonth();
  const date = created_at.slice(0, 10);
  const hour = created_at.slice(11, 16);
  const dia = created_at.slice(8, 10);
  var hojeOntem = '';
  if(now == dia){
    hojeOntem = 'hoje'
  } else if(now == (dia -1)) {
    hojeOntem == 'ontem'
  }
  const d = new Date(created_at);
// console.log()


    const config = {
        headers: {'Authorization': `Bearer ${token}`}
    }

    const PegarEntrada  = async () => {
       try {
           await axios.get(`https://shrouded-shelf-01513.herokuapp.com/daily_entries/${id}`, config)
           .then(response => response).then(response => {setData(response?.data)})
           .catch(error => console.warn(error));
       } catch (error) {
        
       }
       
    }

    if(data == null) return <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size={"large"} color={'blue'}/></View>
    // console.log(data.activities[0])
    // console.log(data.created_at)
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.botaosair}
            onPress={() => navigation.navigate('Cartao')}>
            <Text style={{fontSize: 25, color: darkBlue}}>
            <Icon name='chevron-back-outline' color={'#304ffeb3'} size={30}/>
            </Text>
            </TouchableOpacity>

        <View style={styles.containertextodata}>
            <Icon
            name="time-outline"
            size={15}
            color={'#969696'}
            style={{top: 2, padding: 2}}
            />
            <Text style={styles.textodata}>{d.toLocaleTimeString().slice(0, 5)}</Text>
         </View>

            <View style={styles.containertextohora}>
                <Icon
                name="calendar-outline"
                size={15}
                style={{top: 2, padding: 2}}
                />
                <Text style={styles.textodata}>{hojeOntem}, {now} de {meses[mesNow]} </Text>
            </View>


            <Image source={emojis[0][`${data.mood}`]} style={styles.emoji}/>
            <Text style={[
                            data.mood == 'sad' 
                            ? styles.triste 
                            : data.mood == 'terrible' 
                            ? styles.mal 
                            :data.mood == 'happy' 
                            ? styles.bem 
                            :data.mood == 'radiant' 
                            ? styles.radiante 
                            :data.mood == 'ok' 
                            ? styles.ok 
                            :null]}
                            >
                                {data.mood == 'sad' 
                                ? 'triste' 
                                : data.mood == 'ok' 
                                ? 'ok' 
                                : data.mood == 'happy' 
                                ? 'feliz' 
                                : data.mood == 'radiant' 
                                ? 'radiante' 
                                : data.mood == 'terrible' 
                                ? 'acabado' 
                                : null
                            }
            </Text>
            

            <View style={styles.container_icones}>
               {/* {atividadesicones[data.activities[0].id]} */}
               <View style={{left: '15%', position: 'absolute',backgroundColor: darkBlue, width: 45, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 27,}}>
               {atividadesicones[data.activities[0].id]}    
               </View>
               <View style={{left: '44%', position: 'absolute',backgroundColor: darkBlue, width: 45, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 27}}>

               {atividadesicones[data.activities[1].id]}
               </View>
               <View style={{left: '75%', position: 'absolute',backgroundColor: darkBlue, width: 45, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 27,}}>
               {atividadesicones[data.activities[2].id]}
               </View>
               <View style={{flexDirection: 'row', top: 40}}>
                <Text style={{color: 'black', fontWeight: 'bold', width: '33%', textAlign: 'center', left: 13}}>{nomeAtividades[data.activities[0].id]}</Text>
                <Text style={{color: 'black', fontWeight: 'bold', width: '33%', textAlign: 'center'}}>{nomeAtividades[data.activities[1].id]}</Text>
                <Text style={{color: 'black', fontWeight: 'bold', width: '33%', textAlign: 'center'}}>{nomeAtividades[data.activities[2].id]}</Text>
               </View>
               {/* {atividadesicones[1]}
               {atividadesicones[2]}
               {atividadesicones[3]}
               {atividadesicones[4]}
               {atividadesicones[5]}
               {atividadesicones[6]}
               {atividadesicones[7]}
               {atividadesicones[8]}
               {atividadesicones[9]} */}
            </View>
            <View style={styles.descricao}>
            <Text numberOfLines={4} style={styles.descricao_texto}>{data.description.length > 0 ? data.description : '...sem descrição'}</Text>
          </View>
            {/* <Text>{atividade1}</Text> */}
            {/* <Text>{atividade2}</Text> */}
            {/* <Text>{data.activities[0].id}</Text> */}
            {/* <Text>{JSON.stringify(atividadesicones[3])} dasdasd</Text> */}
        {/* <View>
            <Text>{(emojis[0].sad)} dasdasd</Text>
            <Text>{token} asdaasdadadasd</Text>
        </View> */}
        <View style={{ position: 'absolute', top: '80%', alignSelf: 'center',width: '88%', }}>
          {/* <TouchableOpacity 
          onPress={()=>{
            axios.delete(`https://shrouded-shelf-01513.herokuapp.com/daily_entries/${id}`, config)
            .then(()=> {
              navigation.navigate('Cartao', {
                
              });
            }).catch(error => console.log(error)) ;
            
          }}
          activeOpacity={0.1} style={{backgroundColor: darkBlue, height: 50, justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center', textTransform: 'uppercase', color: 'white', fontWeight: 'bold'}}>Remover</Text>
          </TouchableOpacity> */}
        </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
  ok: {

      textTransform: 'uppercase',
      fontWeight: '400',
      fontSize: 16,
      fontWeight: '900',
      fontSize: 24,
      color: 'grey',
      fontFamily: fontePadrao,
      top: '25%',
    alignSelf: 'center',
  },
  radiante: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 16,
    fontWeight: '700',
    fontSize: 24,
    color: 'purple',
    fontFamily: fontePadrao,
    top: '25%',
    alignSelf: 'center',
  },
  bem: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 24,
    color: 'red',
    fontFamily: fontePadrao,
    top: '25%',
    alignSelf: 'center',
  },
  mal: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 16,
    fontWeight: '700',
    fontSize: 24,
    color: '#4B75E2',
    fontFamily: fontePadrao,
    top: '25%',
    alignSelf: 'center',
  },
  descricao_texto: {
    fontFamily: 'Source Sans',
    fontWeight: '400',
    fontSize: 13,
    left: 20,
    
  },
  descricao:{
    padding: 13,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    width: '88%',
    height: 90,
    backgroundColor: 'white',
    left: '6%',
    top: 438,
    borderRadius: 20,
  },
    container_icones: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: 'white',
        width: '88.7%',
        height: 160,
        top: 259,
        left: '6%',
        borderRadius: 20,
        position: 'absolute',
        // justifyContent: 'center',
        alignItems: 'center',
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
            top: '25%',
    alignSelf: 'center',
    },
    textodata: {
        fontWeight: '400',
        fontFamily: 'Source Sans Pro',
        fontSize: 15,
        color: '#969696',
        textTransform: 'uppercase',
    },
    containertextohora: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        top: '11%'
    },
    containertextodata: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        top: '09%'
    },
    emoji: {
        width: 65,
        height: 65,
        position: 'absolute',
        top: '16%',
        alignSelf: 'center',
    }, 
    container: {
        flex: 1,
        height: 926,
    },
    botaosair: {
        position: 'absolute',
        top: '2%',
        left: '6%',
        borderRadius: 10,
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: lightBlue,
        alignItems: 'center',
      },
})

const s = StyleSheet.create({
    containertextodata: {
        flexDirection: 'row',
    },
    body: {
    //   display: 'flex',
    //   flex: 1,
      backgroundColor: '#F1F1F1',
      height: '100%',
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
        // position: 'absolute',
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

export default CartaoAberto;