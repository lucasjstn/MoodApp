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
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {atividadesicones, atividadesicones1, d, darkBlue, emojislist, lightBlue, lightColor, meses} from '../constantes';
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



  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };



  const ListEmoji = ({item, index}) => {
    // console.log('item: \n ', item['mood']);
    // console.log('index: \n', index);
    return (
      <>
      <View>
      <Pressable
        key={index}
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
  const [activiesSelected, setActivitiesSelected] = useState([]);
  const dateNow = new Date().getDate();
  const hourNow = new Date().getHours()
  const minutesNow = new Date().getMinutes();
  const monthNow = new Date().getMonth();
  console.log(dateNow);
  console.log(minutesNow)

    useEffect(() => {
    if (
      trigger == true &&
      (arrayPorId.length < 3)
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
      
      setTimeout(() => {
        setTrigger(false);
      }, 1000);
    }
  }, [trigger]);
     
  const itens = [
    "sports",
    "shopping",
    "rest",
    "party",
    "movie",
    "meal",
    "games",
    "date",
    "cooking"
  ];

  const ids = {
    "sports": 1,
    "shopping": 2,
    "rest": 3,
    "party": 4,
    "movie": 5,
    "meal": 6,
    "games": 7,
    "date": 8,
    "cooking": 9
  }
    


  const [selected, setSelected] = useState([])
  console.log([itens.indexOf(activiesSelected[0])+1, itens.indexOf(activiesSelected[1])+1, itens.indexOf(activiesSelected[2])+1]);
  console.log(activiesSelected[0]);
  console.log(activiesSelected[1]);
  console.log(activiesSelected[2]);
  const arrayPorId = [itens.indexOf(activiesSelected[0])+1, itens.indexOf(activiesSelected[1])+1, itens.indexOf(activiesSelected[2])+1].filter(item => item != 0);
  console.log([itens.indexOf(activiesSelected[0])+1, itens.indexOf(activiesSelected[1])+1, itens.indexOf(activiesSelected[2])+1].filter((item) => item !== 0));
  console.log(itens.indexOf(activiesSelected[1])+1);
  console.log(arrayPorId);

  const criarCartao = () => {
    axios.post('https://shrouded-shelf-01513.herokuapp.com/daily_entries', {
      "daily_entry": {
        "mood": humor,
        "activity_ids": arrayPorId,
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
  

  return (
    <ScrollView style={{flexGrow: 1}}>
      <View style={{height: 1109, backgroundColor: 'white'}}>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '44.5%', left: '20.5%'}}>esporte</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '44.5%', left: '43.5%'}}>compras</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '44.5%', left: '66.5%'}}>descanso</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '53.5%', left: '22.5%'}}>festa</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '53.5%', left: '45.5%'}}>filme</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '53.5%', left: '65.5%'}}>boa refeição</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '62.5%', left: '21.5%'}}>games</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '62.5%', left: '43.5%'}}>encontro</Text>
        <Text style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: '62.5%', left: '67.5%'}}>cozinhar</Text>

      <View style={styles.viewContainer}>
        
        {itens?.map((item, index) => (
          <>
            <Pressable
            key={index + 1}
              onPress={() => {
                setActivitiesSelected((prevArray) =>
                  prevArray.includes(item)
                    ? prevArray.filter((i) => i !== item)
                    : activiesSelected.length < 3
                    ? [item, ...prevArray]
                    : [item, prevArray[0], prevArray[1]]
                    // : prevArray
                );
              }}
              style={[
                activiesSelected.includes(item)
                  ? styles.primeiroiconselecionado 
                  : styles.primeirafileira.icone
              ]}
              >
                
              {activiesSelected.includes(item) ? <View>{atividadesicones[index+1]}</View> : <View>{atividadesicones1[index+1]}</View>}
              
            </Pressable>
            
            {[2, 5].includes(index) && (
              <View style={{ display: "flex", flexBasis: "100%" }} />
            )}
            
          </>
        ))}
      </View>
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
          <Text style={styles.textodata}> HOJE, {dateNow} DE {meses[monthNow]}</Text>
          <Ionic
            name="time-outline"
            size={15}
            color={'#969696'}
            style={{top: 2, padding: 2}}
          />
          <Text style={styles.textodata}>{hourNow}:{minutesNow}</Text>

          
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


        <View style={styles.descricao}>
					<TextInput style={{maxWidth: '100%'}} multiline={true} numberOfLines={3} placeholder='escreva aqui o que aconteceu' onChangeText={(text)=> setDescricao(text)}/>
          
				</View>

        <TouchableOpacity style={styles.botaosalvar} onPress={()=> {setTrigger(true)}}>
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
  
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
    top: 400,
    height: 325,
    width: '88%',
    alignSelf: 'center',
    // alignItems: 'center'
    justifyContent: 'center'
  },
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
  primeiroiconselecionado: {
    backgroundColor: "blue",
    width: 60,
    height: 60,
    margin: 20,
    borderWidth: 1,
    borderRadius: 30,
    // backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },
  primeirafileira: {
    flexDirection: "row",
    top: 50,
    // left: 40,
    icone: {
      // marginLeft: 30,
      margin: 20,
      width: 60,
      height: 60,
      borderWidth: 1,
      borderRadius: 30,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }
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
