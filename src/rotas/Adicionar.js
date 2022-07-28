import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import Perfil from '../telas/Perfil';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  Modal,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {d, darkBlue, emojislist, lightBlue, lightColor} from '../constantes';
import {Item2render, ListEmoji} from '../componentes/ItemRender';
import {emojis} from '../constantes';
import Ionic from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Adicionar({navigation}) {
  const [emojis, setEmojis] = useState([]);
  const [data, setData] = useState([]);
  const [humor, setHumor] = useState('');
  const [trigger, setTrigger] = useState(false);
  const [encontro, setEncontro] = useState(false);
  const [descanso, setDescanso] = useState(false);
  const [compras, setCompras] = useState(false);
  const [filme, setFilmes] = useState(false);
  const [refeicao, setRefeicao] = useState(false);
  const [festa, setFesta] = useState(false);
  const [esporte, setEsporte] = useState(false);
  const [cozinhar, setCozinhar] = useState(false);
  const [games, setGames] = useState(false);
  const [count, setCount] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [atividades, setAtividades] = useState([]);
  const [atividade1, setAtividade1] = useState(0);
  const [atividade2, setAtividade2] = useState(0);
  const [atividade3, setAtividade3] = useState(0);
  const [access_token, setAcess_token] = useState('');

  useEffect(()=>{
    getData('@login');
  })

    useEffect(()=> {
      setEmojis(emojislist);
      setCount(0);
      getData('@login')
      selectedEmojiIndex(10)
      
    }, [])
    useEffect(()=> {
      setCount(0);
      setDescanso(false);
      setEncontro(false);
    }, [count < 0])



    const getData = async (key) => {
      try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
          setAcess_token(value);
        }
      } catch(e) {
        console.warn(e);
      }
      
    }
    
    getData('@login')
  const obj = {
    daily_entry: {
      mood: humor,
      activity_ids: [atividade1, atividade2, atividade3],
      description: descricao,
    },
  };

  useEffect(() => {
    if (
      trigger == true &&
      (atividade1 == 0 || atividade2 == 0 || atividade3 == 0)
    ) {
      console.log('precisa escolher 3 atividades');
      setTrigger(false);
      return Alert.alert('Atenção', 'Você precisa escolher três atividades');
    } else if (trigger == true && humor.length == 0) {
      Alert.alert('Humor não pode ser vazio', 'selecione um humor');
      setTrigger(false);
    } else if (trigger == true) {
      criarCartao();
      console.log('aaaaa');
      // navigation .navigate('BottomTab')
      setTimeout(() => {
        setTrigger(false);
      }, 1000);
    }
  }, [trigger]);

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const criarCartao = () => {
    axios.post('https://shrouded-shelf-01513.herokuapp.com/daily_entries', {
      "daily_entry": {
        "mood": humor,
        "activity_ids": [atividade1, atividade2, atividade3],
        "description": descricao,
    }}, config
     
    )
    .then(response => {
      navigation.navigate('Home');
      // return Alert.alert('Aviso', 'cartão criado com sucesso');
    })
    .catch(error => {
      // navigation.navigate('Login');
      console.log(error);
    })
  }

  const ListEmoji = ({item, index}) => {
    // console.log('item: \n ', item['mood']);
    // console.log('index: \n', index);
    return (
      <>
      <View>
      <Pressable

        onPress={() => {
          selectedEmojiIndex(index);
          setHumor(item.humor);
        } }
        style={[item.selected ? styles.emojiselecionado : styles.emoji]}>
        <Image
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            width: 43,
            height: 43,
          }}
          source={item.emoji} />
      <Text style={[item.selected ? {textAlign: 'justify', top: 40, color: '#C801FA', fontSize: 11, fontWeight: '700', textTransform: 'uppercase'} : {textAlign: 'justify', top: 40, color: '#969696', fontSize: 11, fontWeight: '700', textTransform: 'uppercase'}]}>{item.humor == 'radiant' ? 'radiante' : item.humor == 'ok' ? 'ok' : item.humor == 'sad' ? 'triste' : item.humor == 'terrible' ? 'acabado' : item.humor == 'happy' ? 'feliz'  : null}</Text>
      </Pressable>
      </View></>
    );
  };

  const selectedEmojiIndex = id => {
    // alert(JSON.stringify(emojislist));
    console.log('id: ', id)
    emojislist.map((item, index) => {
      if (index == id) {
        // setIndex(index);
        emojislist[index].selected = true;
      } else {
        // setIndex(null);
        emojislist[index].selected = false;
      }
    });
    setData([...emojislist]);
  };


  return (
    <ScrollView style={{flexGrow: 1}}>
      <View style={{height: 1109, backgroundColor: 'white'}}>
        {/* //container principal */}
        {/* botaosair */}
        <TouchableOpacity
          style={styles.botaosair}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 25, color: darkBlue}}>X</Text>
        </TouchableOpacity>
        <Text style={styles.headertexto}>Como voce está?</Text>

        <View style={styles.containertextodata}>

          <Ionic
            name="calendar-outline"
            size={15}
            style={{top: 2, padding: 2}}
          />
          <Text style={styles.textodata}> asdasdas</Text>
          <Ionic
            name="time-outline"
            size={15}
            color={'#969696'}
            style={{top: 2, padding: 2}}
          />
          <Text style={styles.textodata}>8:05</Text>

          
        </View>

        {/* // <View styles={styles.containertextohora}>
        // <Ionic name='time-outline' size={15} color={'#969696'}/>
				// <Text style={styles.textodata}>8:35</Text>
				// </View> */}

        <FlatList
          style={styles.listaemoji}
          horizontal
          data={emojislist}
          renderItem={ListEmoji}
        />
       
       <Text>{humor} Atividades: {atividade1} {atividade2} {atividade3} {descricao}</Text>
       <Text>{access_token.length}</Text>
        <View style={styles.atividadescontainer}>
          {/* primeira fileira de icones */}

          <View style={styles.primeirafileira}>
            {/* descanso */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>
              
            <Pressable
              onPress={() => {
                if (descanso == false && count < 3) {
                  setDescanso(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(3);
                  } else if (count == 1) {
                    setAtividade2(3);
                  } else if (count === 2) {
                    setAtividade3(3);
                  }
                } else if (descanso == true && count <= 3) {
                  setCount(count - 1);
                  setDescanso(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count == 3) {
                    setAtividade3('');
                  }
                } else if (descanso == false && count == 3) {
                  setDescanso(false);
                }
              }}
              style={[
                descanso == true ? styles.iconeselecionado : styles.icone,
              ]}>
              <Icon name="bed" size={35} color={descanso ? 'white' : 'black'} />
              
            </Pressable>
            <Text style={{textAlign: 'center', right: 20, fontWeight: 'bold', fontSize: 12,color: 'black'}}>descanso</Text>
            </View>
           
            {/* descanso */}

            {/* encontro */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>

            <Pressable
              onPress={() => {
                if (encontro == false && count < 3) {
                  setEncontro(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(8);
                  } else if (count == 1) {
                    setAtividade2(8);
                  } else if (count === 2) {
                    setAtividade3(8);
                  }
                } else if (encontro == true && count <= 3) {
                  setCount(count - 1);
                  setEncontro(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (encontro == false && count == 3) {
                  setEncontro(false);
                }
              }}
              style={[
                encontro == true ? styles.iconeselecionado : styles.icone,
              ]}>
              <Icon name='hand-holding-heart'
                size={35}
                color={encontro ? 'white' : 'black'}
              />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20, fontWeight: 'bold', fontSize: 12,color: 'black'}}>encontro</Text>

            </View>

            {/* encontro */}

            {/* filme */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>

            <Pressable
              onPress={() => {
                if (filme == false && count < 3) {
                  setFilmes(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(5);
                  } else if (count == 1) {
                    setAtividade2(5);
                  } else if (count === 2) {
                    setAtividade3(5);
                  }
                } else if (filme == true && count <= 3) {
                  setCount(count - 1);
                  setFilmes(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (filme == false && count == 3) {
                  setFilmes(false);
                }
              }}
              style={[filme == true ? styles.iconeselecionado : styles.icone]}>
              <Icon name="film" size={35} color={filme ? 'white' : 'black'} />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20, fontWeight: 'bold', fontSize: 12, color: 'black'}}>filme</Text>

            </View>
            {/* filme */}
          </View>
  
          {/* segunda */}
          <View style={styles.segundafileira}>
            {/* segunda fileira de icones */}

            {/* compras */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>
            <Pressable
              onPress={() => {
                if (compras == false && count < 3) {
                  setCompras(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(2);
                  } else if (count == 1) {
                    setAtividade2(2);
                  } else if (count === 2) {
                    setAtividade3(2);
                  }
                } else if (compras == true && count <= 3) {
                  setCount(count - 1);
                  setCompras(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (compras == false && count == 3) {
                  setCompras(false);
                }
              }}
              style={[
                compras == true ? styles.iconeselecionado : styles.icone,
              ]}>
              <Material name='shopping'
                size={35}
                color={compras ? 'white' : 'black'}
              />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20,fontWeight: 'bold', fontSize: 12, color: 'black'}}>compras</Text>

            </View>
            {/* compras */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>
            <Pressable
              onPress={() => {
                if (refeicao == false && count < 3) {
                  setRefeicao(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(6);
                  } else if (count == 1) {
                    setAtividade2(6);
                  } else if (count === 2) {
                    setAtividade3(6);
                  }
                } else if (refeicao == true && count <= 3) {
                  setCount(count - 1);
                  setRefeicao(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (refeicao == false && count == 3) {
                  setRefeicao(false);
                }
              }}
              style={[
                refeicao == true ? styles.iconeselecionado : styles.icone,
              ]}>
              <Material name='food-fork-drink'
                size={35}
                color={refeicao ? 'white' : 'black'}
              />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20, fontWeight: 'bold', fontSize: 12, color: 'black'}}>boa refeição</Text>
            </View>

            {/* festa */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>
            <Pressable
              onPress={() => {
                if (festa == false && count < 3) {
                  setFesta(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(4);
                  } else if (count == 1) {
                    setAtividade2(4);
                  } else if (count === 2) {
                    setAtividade3(4);
                  }
                } else if (festa == true && count <= 3) {
                  setCount(count - 1);
                  setFesta(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (festa == false && count == 3) {
                  setFesta(false);
                }
              }}
              style={[festa == true ? styles.iconeselecionado : styles.icone]}>
              <Material name='party-popper'
                size={35}
                color={festa ? 'white' : 'black'}
              />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20,fontWeight: 'bold', fontSize: 12, color: 'black'}}>festa</Text>
            </View>
            {/* festa */}
          </View>

          {/* terceira */}
          <View style={styles.terceirafileira}>
            {/* esportes */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>

            <Pressable
              onPress={() => {
                if (esporte == false && count < 3) {
                  setEsporte(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(1);
                  } else if (count == 1) {
                    setAtividade2(1);
                  } else if (count === 2) {
                    setAtividade3(1);
                  }
                } else if (esporte == true && count <= 3) {
                  setCount(count - 1);
                  setEsporte(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (esporte == false && count == 3) {
                  setEsporte(false);
                }
              }}
              style={[
                esporte == true ? styles.iconeselecionado : styles.icone,
              ]}>
             <Material name='soccer' size={35}
                color={esporte ? 'white' : 'black'}
              />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20, fontWeight: 'bold', fontSize: 12, color: 'black'}}>esporte</Text>

            </View>

            {/* esportes */}

            {/* cozinhar */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>

            <Pressable
              onPress={() => {
                if (cozinhar == false && count < 3) {
                  setCozinhar(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(9);
                  } else if (count == 1) {
                    setAtividade2(9);
                  } else if (count === 2) {
                    setAtividade3(9);
                  }
                } else if (cozinhar == true && count <= 3) {
                  setCount(count - 1);
                  setCozinhar(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (cozinhar == false && count == 3) {
                  setCozinhar(false);
                }
              }}
              style={[
                cozinhar == true ? styles.iconeselecionado : styles.icone,
              ]}>
              <Material name='toaster-oven'
                size={35}
                color={cozinhar ? 'white' : 'black'}
              />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20, fontWeight: 'bold', fontSize: 12, color: 'black'}}>cozinhar</Text>

            </View>
            {/* cozinhar */}

            {/* Games */}
            <View style={{alignSelf: 'center', alignContent: 'center'}}>

            <Pressable
              onPress={() => {
                if (games == false && count < 3) {
                  setGames(true);
                  setCount(count + 1);
                  if (count == 0) {
                    setAtividade1(7);
                  } else if (count == 1) {
                    setAtividade2(7);
                  } else if (count === 2) {
                    setAtividade3(7);
                  }
                } else if (games == true && count <= 3) {
                  setCount(count - 1);
                  setGames(false);
                  if (count == 1) {
                    setAtividade1('');
                  } else if (count == 2) {
                    setAtividade2('');
                  } else if (count === 3) {
                    setAtividade3('');
                  }
                } else if (games == false && count == 3) {
                  setGames(false);
                }
              }}
              style={[games == true ? styles.iconeselecionado : styles.icone]}>
              <Material name='gamepad' size={35} color={games ? 'white' : 'black'} />
            </Pressable>
            <Text style={{textAlign: 'center', right: 20, fontWeight: 'bold', fontSize: 12, color: 'black'}}>jogos</Text>

            </View>

            {/* Games */}
          </View>
        </View>

        <View style={styles.descricao}>
					<TextInput placeholder='escreva aqui o que aconteceu' onChangeText={(text)=> setDescricao(text)}/>
          
				</View>

        <TouchableOpacity style={styles.botaosalvar} onPress={()=> setTrigger(true)}>
          <Text style={styles.botaosalvar.texto}>Salvar</Text>
        </TouchableOpacity>
        {/* <Text>Atividades: {atividade1} {atividade2} {atividade3}</Text>
                <Text>{descricao}</Text>
                <Text>{access_token}</Text>
                <Text>{JSON.stringify(obj)}</Text> */}
      </View>
    </ScrollView>
  );
}
// style={{top: 20, backgroundColor: 'white', borderColor: 'black',   width: '90%', alignSelf: 'center'}}

export const styles = StyleSheet.create({
  descricao: {
    position: 'absolute',
    top: '70%',
    height: 100,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    width: '90%',
    margin: 10,
  },
  listaemoji: {
    position: 'absolute',
    alignSelf: 'center',
    top: '24%',
  },

  containertextodata: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    top: '16%',
  },
  containertextohora: {
    position: 'absolute',
    top: 100,
    backgroundColor: 'red',
  },
  textodata: {
    fontWeight: '400',
    fontFamily: 'Source Sans Pro',
    fontSize: 15,
    color: '#969696',
    textTransform: 'uppercase',
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
  headertexto: {
    color: 'black',
    fontWeight: '700',
    position: 'absolute',
    top: '11%',
    fontSize: 30,
    alignSelf: 'center',
  },
  botaosalvar: {
    position: 'absolute',
    backgroundColor: darkBlue,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    top: '85%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',

    texto: {
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  },
  descricaocontainer: {
    maring: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    height: 100,
    alignSelf: 'center',
    // alignItems: 'center',
  },
  primeirafileira: {
    flexDirection: 'row',
    left: 30,
    top: 20,
    // position: 'absolute',
    // top: '42%',

    // top: '8%',
    // position: 'absolute',
    // left: 40,
    icone: {
      // marginLeft: 30,
      // margin: 20,
      width: 60,
      height: 60,
      borderWidth: 1,
      borderRadius: 30,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  segundafileira: {
    left: 30,
    top: 20,
    flexDirection: 'row',


    // left: 40,
    icone: {
      // marginLeft: 30,
      margin: 20,
      width: 60,
      height: 60,
      borderWidth: 1,
      borderRadius: 30,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  terceirafileira: {
    top: 20,
    left: 30,
    flexDirection: 'row',
    // top: '50%',
    // position: 'absolute',
    // left: 40,
  },

  icone: {
    // marginLeft: 30,
    //   margin: 20,
    margin: '7%',
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  iconeselecionado: {
    backgroundColor: 'blue',
    margin: '7%',
    width: 60,
    height: 60,
    // borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  atividadescontainer: {
    postion: 'absolute',
    top: '32%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: '30%',
    width: '90%',
    alignSelf: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  emojiselecionado: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 57,
    backgroundColor: '#304FFE',
    margin: 10,
    borderRadius: 35,
     },
  emoji: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 58,
    height: 80,
    margin: 10,
    borderRadius: 25,
    // backgroundColor: 'pink'
  },
});

export default Adicionar;
