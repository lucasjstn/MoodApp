import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { atividadesicones, atividadesicones1, emojis, fontePadrao, meses } from "../constantes";
import dateFormat, { masks} from "dateformat";
import { create } from "react-test-renderer";

const now = new Date();


export const ListEmoji = ({ emoji }) => (
  <Pressable onFocus={null} onPress={()=>{}} style={{width: 50, height: 50, backgroundColor: 'blue', margin: 10}}>
          <View>
          <Image style={{resizeMode: 'contain',position: 'absolute', width: 50, height: 50}} source={emoji}/>
          </View>
  </Pressable>
  );

const ItemRender = ({icone1, icone2, icone3,navigation, id, mood, created_at, updated_at, user_id, short_description, activities1, activities2, activities3, emoji }) => {


  const [createdat, setCreatedat] = useState('');
  // created_at = new Date();
  const now = new Date().getDate();
  const mesNow = new Date().getMonth();
  const date = created_at.slice(0, 10);
  const hour = created_at.slice(11, 16);
  const dia = created_at.slice(8, 10);
  const hourNow = new Date(created_at);
  var hojeOntem = '';
  if(now == dia){
    hojeOntem = 'hoje,'
  } else if(now == (dia -1)) {
    hojeOntem == 'ontem,'
  } else {
    hojeOntem = '';
  }
  
  // console.log('no itemrender', created_at);
  // console.log(mesNow)
  console.log()

  

  return (
    <><TouchableOpacity
      style={styles.box}
      activeOpacity={0.6}
      onPress={navigation}
    >
        <Image source={emoji} style={styles.box.imagem_emoji} />
        {/* <Text style={styles.itemText}> {id} </Text> */}

        <View style={{ position: 'absolute', top: '23%', left: '25%', flexDirection: 'row' }}>

          {mood == 'happy' ? <Text style={[styles.bem]}>FELIZ</Text>
            : mood === 'sad' ? <Text style={styles.triste}>TRISTE</Text>
              : mood === 'ok' ? <Text style={styles.ok}>OK</Text>
                : mood === 'terrible' ? <Text style={styles.mal}>ACABADO</Text>
                  : mood === 'radiant' ? <Text style={styles.radiante}>RADIANTE</Text>
                    : null}
          <Text style={{fontSize: 16,textTransform: 'uppercase', color: '#ACACAC', fontWeight: '400', top: 7, left: 5 }}>{hourNow.toLocaleTimeString().slice(0, 5)}</Text>
        </View>


        <Text style={{fontSize: 16,textTransform: 'uppercase', color: '#ACACAC', fontWeight: '400', position: 'absolute', left: '24.9%', top: '10%' }}>{hojeOntem} {dia} De {meses[mesNow]}</Text>


        <View style={{ flexDirection: 'row', alignSelf: 'center', width: '95%', height: 40, top: '50%', position: 'absolute', left: 30, }}>
          <View style={{ top: 7 }}>
            {atividadesicones1[icone1]}
          </View>

          <Text style={{ flexDirection: 'row', top: 10, left: 4, fontWeight: 'bold', fontFamily: fontePadrao }}>
            {activities1 == 'rest' ? 'descanso'
              : activities1 == 'party' ? 'festa'
                : activities1 == 'shopping' ? 'compras'
                  : activities1 == 'sports' ? 'esporte'
                    : activities1 == 'date' ? 'encontro'
                      : activities1 == 'movies' ? 'filmes e séries'
                        : activities1 == 'games' ? 'jogos'
                          : activities1 == 'cooking' ? 'cozinhar'
                            : activities1 == 'good_meal' ? 'boa refeição'
                              : null}
          </Text>
          <View style={{ margin: 10, }}>
            {atividadesicones1[icone2]}
          </View>
          <Text style={{ flexDirection: 'row', top: 10, fontWeight: 'bold', fontFamily: fontePadrao }}>
            {activities2 == 'rest' ? 'descanso'
              : activities2 == 'party' ? 'festa'
                : activities2 == 'shopping' ? 'compras'
                  : activities2 == 'sports' ? 'esporte'
                    : activities2 == 'date' ? 'encontro'
                      : activities2 == 'movies' ? 'filmes e séries'
                        : activities2 == 'games' ? 'jogos'
                          : activities2 == 'cooking' ? 'cozinhar'
                            : activities2 == 'good_meal' ? 'boa refeição'
                              : null}
          </Text>
          <View style={{ margin: 10, }}>
            {atividadesicones1[icone3]}
          </View>
          <Text style={{ flexDirection: 'row', top: 10, fontWeight: 'bold', fontFamily: fontePadrao }}>
            {activities3 == 'rest' ? 'descanso'
              : activities3 == 'party' ? 'festa'
                : activities3 == 'shopping' ? 'compras'
                  : activities3 == 'sports' ? 'esporte'
                    : activities3 == 'date' ? 'encontro'
                      : activities3 == 'movies' ? 'filmes e séries'
                        : activities3 == 'games' ? 'jogos'
                          : activities3 == 'cooking' ? 'cozinhar'
                            : activities3 == 'good_meal' ? 'boa refeição'
                              : null}
          </Text>
        </View>
        <Text style={{ position: 'absolute', top: '70%', left: 30, }}>{short_description.length > 0 ? short_description : '...sem descrição'}</Text>

      </TouchableOpacity><View style={{height: 5}}>

</View></>

  )
}


    
      


const styles = StyleSheet.create({
    bem: {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 24,
        color: 'red',
        fontFamily: fontePadrao,
      },
      mal: {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 16,
        fontWeight: '700',
        fontSize: 24,
        color: '#4B75E2',
        fontFamily: fontePadrao,
      },
      triste: {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 16,
        fontWeight: '700',
        fontSize: 24,
        color: '#4BE263',
        fontFamily: fontePadrao,
      },
      radiante: {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 16,
        fontWeight: '700',
        fontSize: 24,
        color: 'purple',
        fontFamily: fontePadrao,
      },
      ok: {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 16,
        fontWeight: '900',
        fontSize: 24,
        color: 'grey',
        fontFamily: fontePadrao,
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

export default ItemRender;