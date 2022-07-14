import React from 'react';
import {Text, View, StyleSheet, Image, StatusBar, Button} from 'react-native';

export default function Home() {

    return(
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}
                  backgroundColor={'white'}
        />
  
        <View style={styles.conteudo}>
  
            <Image source={require('../assets/carinha.png')} style={styles.carinha}/>
  
          <Text style={styles.texto}>
            Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela.
          </Text>
  
        </View>
  
      </View>
      
  
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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