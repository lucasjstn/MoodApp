import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { emojis } from "../constantes";



const ItemRender = ({ id, mood, created_at, updated_at, user_id, short_description, activities1, activities2, activities3, emoji }) => (



    <TouchableOpacity
        style={styles.box}
        activeOpacity={0.6}
        onPress={()=> navigation .navigate('CartaoAberto')}
    >
        <Image source={emoji} style={styles.box.imagem_emoji}/>
        <Text style={styles.itemText}> {id} </Text>
        
        {
            mood == 'happy' ? <Text style={styles.bem}>BEM</Text>
            : mood === 'sad' ? <Text style={styles.triste}>TRISTE</Text>
            : mood === 'bad' ? <Text style={styles.mal}>MAL</Text>
            : null
        }


        <Text style={null}>{created_at}</Text>
        <Text style={null}>{updated_at}</Text>
        
        <View style={{flexDirection: 'row'}}>
            <Text style={{flexDirection: 'row', margin: 10,}}>{activities1}</Text>
            <Text style={{margin: 10,}}>{activities2}</Text>
            <Text style={{flexDirection: 'row', margin: 10,}}>{activities3}</Text>
        </View>
        <Text style={null}>{short_description}</Text>
        
    </TouchableOpacity>
);

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

export default ItemRender;