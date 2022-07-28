import  Awesome  from 'react-native-vector-icons/FontAwesome5'
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export const fontePadrao = 'Source Sans';

export const atividadesicones = {
  1: <Material name='soccer' size={27} color={'white'}/>,
  2: <Material name='shopping' size={27} color={'white'}/>,
  3: <FontAwesome5Icon name='bed' size={27} color={'white'}/>,
  4: <Material name='party-popper' size={27} color={'white'}/>,
  5: <FontAwesome5Icon name='film' size={27} color={'white'}/>,
  6: <Material name='food-fork-drink' size={27} color={'white'}/>,
  7: <Material name='gamepad' size={27} color={'white'}/>,
  8: <FontAwesome5Icon name='hand-holding-heart'size={27} color={'white'}/>,
  9: <Material name='toaster-oven' size={27} color={'white'}/>
}
export const atividadesicones1 = {
  1: <Material name='soccer' size={20} color={'black'} style={{fontWeight: 'bold'}}/>,
  2: <Material name='shopping' size={20} color={'black'}/>,
  3: <FontAwesome5Icon name='bed' size={20} color={'black'}/>,
  4: <Material name='party-popper' size={20} color={'black'}/>,
  5: <FontAwesome5Icon name='film' size={20} color={'black'}/>,
  6: <Material name='food-fork-drink' size={20} color={'black'}/>,
  7: <Material name='gamepad' size={20} color={'black'}/>,
  8: <FontAwesome5Icon name='hand-holding-heart'size={20} color={'black'}/>,
  9: <Material name='toaster-oven' size={20} color={'black'}/>
}

export const nomeAtividades = ['', 'esportes', 'compras', 'descanso', 'festa', 'filmes e séries', 'boa refeição', 'jogos', 'encontro', 'cozinhar'];

export const emojis = [
    {'sad': require('./assets/humores/sad.png'),
    'ok': require('./assets/humores/ok.png'),
    'radiant': require('./assets/humores/radiant.png'),
    'terrible': require('./assets/humores/terrible.png'),
    'happy': require('./assets/humores/happy.png')}]

    export const emojislist = [
        {
          id: '1', 
          emoji: emojis[0]['radiant'],
          humor: 'radiant',
        },
        {
          id: '2',
          emoji: emojis[0]['happy'],
          humor: 'happy',
        },
        {
          id: '3',
          emoji: emojis[0]['ok'],
          humor: 'ok',
        },
        {
          id: '4',
          emoji: emojis[0]['sad'],
          humor: 'sad',
        },
        {
        
          id: '5',
          emoji: emojis[0]['terrible'],
          humor: 'terrible',
        },
    ]
export const atividades = {
    
}

export const darkBlue = '#304FFE';
export const lightColor = '#F5F5F5';
export const lightBlue = '#304ffe1a';
    
export const generosTrad = {
  'male': 'masculino',
  'female': 'feminino',
  'other': 'outro'
}

