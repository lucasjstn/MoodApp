
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const CardOpened = ({navigation, route}) => {

const item = route.params;

    return (
        <View style={sview.body}>
          
          <TouchableOpacity style={sview.containerBotao} onPress={()=> navigation.goBack()}>
          <Icon name='chevron-back-outline' color={'#304ffeb3'} size={30}/>
          </TouchableOpacity>
    
          <View style={sview.hora}>
            <Icon name='time-outline' size={15} color={'#969696'} style={{paddingRight: 4, top: 2,}}/>
            <Text style={sview.texto}>{item.hora}</Text>
          </View>
    
          <View style={sview.data}>
            <Icon name='calendar-outline' color={'#969696'} size={15} style={{paddingRight: 4, top: 2,}}/>
            <Text style={sview.texto}>
              {item.data}
            </Text>
          </View>
    
          <View style={sview.emojibox}>
            <Image source={item.emoji} style={sview.emojibox.emoji}/>
          </View>
    
          <View style={sview.texto_humor}>
          <Text 
          style={
            item.humor === 'bem' ? sview.texto_humor.bem
            : item.humor === 'triste' ? sview.texto_humor.triste 
            : item.humor === 'mal' ? sview.texto_humor.mal 
            : null }
                      >
              {item.humor}
            </Text>
          </View>
    
          <View style={sview.container_icones}>
            <View style={sview.atividade1}>
              <Image source={item.iconeAtividade1} style={sview.aicone}/>
              <Text  numberOfLines={1} style={sview.texto_atividade}>{item.atividade1}</Text>
            </View>
    
            <View style={sview.atividade2}>
            <Image source={item.iconeAtividade2}  style={sview.aicone}/>
              <Text numberOfLines={1} style={sview.texto_atividade}>{item.atividade2}</Text>
            </View>
    
            <View style={sview.atividade3}>
            <Image source={item.iconeAtividade3} style={sview.aicone}/>
              <Text numberOfLines={1} style={sview.texto_atividade}>{item.atividade3}</Text>
            </View>
          </View>
    
          <View style={sview.descricao}>
            <Text numberOfLines={4} style={sview.descricao_texto}>{item.about}</Text>
          </View>
    
    
        </View>
      )
}

const sview = StyleSheet.create({
    descricao_texto: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 'bold',
      fontSize: 13,
    },
    descricao: {
      padding: 13,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: '88%',
      height: 90,
      backgroundColor: 'white',
      left: '6%',
      top: 438,
      borderRadius: 20,
    },
    texto_atividade: {
      top: 50,
      fontFamily: 'Source Sans Pro',
      fontWeight: 'bold',
      fontSize: 12,
    },
    aicone: {
      tintColor: 'white',
      position: 'absolute',
      width: 30,
      height: 30,
    },
    atividade1: {
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      backgroundColor: '#304FFE',
      maxWidth: 80,
      width: 60,
      height: 60,
      top: '30%',
      left: '15%',
    },
    atividade2: {
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      backgroundColor: '#304FFE',
      width: 60,
      height: 60,
      top: '30%',
      left: '44%',
    },
    atividade3: {
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      backgroundColor: '#304FFE',
      width: 60,
      height: 60,
      top: '30%',
      left: '75%',
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
  
    },
    texto_humor: {
      position: 'absolute',
      top: 196,
      width: '100%',
      alignItems: 'center',
        bem: {
          color: '#E24B4B',
          textTransform: 'uppercase',
          fontSize: 20,
          fontFamily: 'Source Sans Pro',
          fontWeight: '700',
        },
        mal: {
          color: '#4B75E2',
          textTransform: 'uppercase',
          fontSize: 20,
          fontFamily: 'Source Sans Pro',
          fontWeight: '700',
        },
        triste: {
          color: '#4BE263',
          textTransform: 'uppercase',
          fontSize: 20,
          fontFamily: 'Source Sans Pro',
          fontWeight: '700',
        },
    },
    emojibox: {
      // backgroundColor: 'pink',
      position: 'absolute',
      width: '100%',
      height: 65,
      top: 130,
      alignItems: 'center',
      emoji: {
        width: 65,
        height: 65,
      },
    },
    data: {
      flexDirection: 'row',
      position: 'absolute',
      // backgroundColor: '#DE9595',
      width: '100%',
      top: 74,
      justifyContent: 'center',
    },
    texto: {
        fontWeight: '400',
        fontFamily: 'Source Sans Pro',
        fontSize: 15,
        color: '#969696',
        textTransform: 'uppercase',
    },
    hora: {
      position: 'absolute',
      // backgroundColor: 'cyan',
      width: '100%',
      height: 17,
      flexDirection: 'row',
      top: 47,
      justifyContent: 'center'
      
    },
    body: { 
      backgroundColor: '#F1F1F1',
      flex: 1,
    },
    containerBotao: {
      backgroundColor: '#C6CEFF',
      width: 36,
      height: 36,
      top: 11,
      left: 33,
      borderRadius: 9,
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default CardOpened;