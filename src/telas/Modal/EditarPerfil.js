import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from 'react-native';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import {
  darkBlue,
  emojislist,
  fontePadrao,
  FotoLista,
  lightBlue,
  lightColor,
} from '../../constantes';
import DropDownPicker from 'react-native-dropdown-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const EditarPerfil = ({navigation, route}) => {
  const {
    currentPhoto,
    currentName,
    currentEmail,
    currentGender,
    currentBirth,
    access_token,
    photoId
  } = route.params;
  const dataNas = JSON.parse(currentBirth);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [photoAtual, setPhotoAtual] = useState(currentPhoto);
  const [items, setItems] = useState([
    {
      label: 'masculino',
      value: 'male',
    },
    {
      label: 'feminino',
      value: 'female',
    },
    {
      label: 'outro',
      value: 'other',
    },
  ]);
  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState(0);

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  const AtualizarUsuario = () => {
    axios
      .put(
        'https://shrouded-shelf-01513.herokuapp.com/user',
        {
          user: {
            gender: value,
            photo_id: photo == 0 ? photoId : photo,
          },
        },
        config,
      )
      .then(response => response)
      .catch(error => console.log(error));
  };
  console.log(currentPhoto)
  useEffect(() => {
    selectedEmojiIndex(10);
  }, []);
  const ListaFotos = ({item, index}) => {
    // console.log('item: \n ', item['mood']);
    // console.log('index: \n', index);
    return (
      <>
        <View style={{alignItems: 'center', alignSelf: 'center'}}>
          <Pressable
            onPress={() => {
              selectedEmojiIndex(index);
              setPhotoAtual(item['photo']);
              setPhoto(item['id']);
            }}
            style={[item.selected ? styles.emojiselecionado : styles.emoji]}>
            <Image
              style={{
                // resizeMode: 'contain',
                // position: 'absolute',
                alignSelf: 'center',

                // marginRight: 30,
                // marginBottom: 10,
                top: 4,
                width: 92,
                height: 92,
                // alignSelf: 'center',
              }}
              source={{
                uri: item.photo,
              }}
            />
          </Pressable>
        </View>
      </>
    );
  };

  const selectedEmojiIndex = id => {
    FotoLista.map((item, index) => {
      if (index == id) {
        FotoLista[index].selected = true;
      } else {
        FotoLista[index].selected = false;
      }
    });
    setData([...FotoLista]);
  };

  return (
    <KeyboardAwareScrollView>
      <Modal
        onRequestClose={() =>
          Alert.alert(
            'Atenção',
            'Suas alterações não serão salvas, deseja mesmo sair?',
            [
              {text: 'CANCELAR'},
              {
                text: 'SIM',
                onPress: () => {
                  setModal(false);
                },
              },
            ],
          )
        }
        visible={modal}>
        <View style={{height: '100%'}}>
          <TouchableOpacity
            style={styles.botaomodalsair}
            onPress={() =>
              Alert.alert(
                'Atenção',
                'Suas alterações não serão salvas, deseja mesmo sair?',
                [
                  {text: 'CANCELAR'},
                  {
                    text: 'SIM',
                    onPress: () => {
                      setModal(false);
                    },
                  },
                ],
              )
            }>
            <Text style={{fontSize: 25, color: darkBlue}}>X</Text>
          </TouchableOpacity>
          <Text style={styles.textoheaderperfil}>
            Selecione a foto do perfil
          </Text>
          <FlatList
            columnWrapperStyle={{width: '100%'}}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={'fotoss'}
            numColumns={3}
            style={styles.listaemoji}
            // horizontal
            data={FotoLista}
            renderItem={ListaFotos}
          />
          {/* <Text>{photo}</Text> */}
          {/* <Text>{gender}</Text> */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setModal(false);
            }}
            style={styles.botaosalvarmodal}>
            <Text style={styles.textosalvar}>Salvar</Text>
          </TouchableOpacity>

        </View>
      </Modal>

      <View style={styles.container}>
        <Image
          style={styles.imagemeditar}
          source={{
            uri: `${photoAtual}`,
          }}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.botaoalterar}
          onPress={() => setModal(true)}>
          <Text style={styles.texto}>alterar foto</Text>
        </TouchableOpacity>
        <Text style={styles.nometexto}>nome</Text>
        <TextInput
          editable={false}
          defaultValue={currentName}
          style={styles.caixatextonome}
          onChangeText={newName => {
            setName(newName);
          }}
        />
        <Text style={styles.nomeemail}>email</Text>
        <TextInput
          editable={false}
          enabled={false}
          defaultValue={currentEmail}
          style={styles.caixatextoemail}
          onChangeText={newName => {
            setEmail(newName);
          }}
        />
        <Text style={styles.nomegender}>gênero</Text>

        <DropDownPicker
          disableBorderRadius={true}

          listMode="SCROLLVIEW"
          containerStyle={styles.caixatextogenero}
          labelStyle={{
            fontWeight: 'bold',
            borderRadius: 0,
            fontFamily: fontePadrao,
            textTransform: 'uppercase',
          }}
          textStyle={{
            fontWeight: 'bold',
            fontFamily: fontePadrao,
            textTransform: 'uppercase',
          }}
          placeholder={currentGender}
          placeholderStyle={{
            fontWeight: 'bold',
            borderRadius: 0,
            fontFamily: fontePadrao,
            textTransform: 'uppercase',
          }}
         
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <Text style={styles.nomedata}>data de nascimento</Text>
        <TextInput
          editable={false}
          defaultValue={`${dataNas[0]}/${dataNas[1]}/${dataNas[2]}`}
          style={styles.caixatextodata}
          onChangeText={newName => {
            setEmail(newName);
          }}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            AtualizarUsuario();
            navigation.navigate('PerfilHome');
          }}
          style={styles.botaosalvar}>
          <Text style={styles.textosalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditarPerfil;
const styles = StyleSheet.create({
  botaosalvarmodal: {
    borderRadius: 10,

    backgroundColor: darkBlue,
    position: 'absolute',
    top: '80%',
    height: '5%',
    width: '75%',
    height: '06%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  emoji: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 40,
    alignSelf: 'center',

  },
  emojiselecionado: {
    width: 100,
    height: 100,
    backgroundColor: '#304FFE',
    borderRadius: 50,
  },
  listaemoji: {
    alignSelf: 'center',
    top: '20%',
    width: '100%',
  },
  textoheaderperfil: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: fontePadrao,
    fontSize: 24,
    alignSelf: 'center',
    top: 100,
    position: 'absolute',
  },
  botaomodalsair: {
    position: 'absolute',
    top: 10,
    left: '6%',
    borderRadius: 10,
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: lightBlue,
    alignItems: 'center',
  },
  textosalvar: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: fontePadrao,
    textTransform: 'uppercase',
  },
  botaosalvar: {
    borderRadius: 10,

    backgroundColor: darkBlue,
    position: 'absolute',
    top: '90%',
    height: '5%',
    width: '75%',
    height: '06%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixatextodata: {
    borderRadius: 10,

    zIndex: -5,
    position: 'absolute',
    left: '12%',
    top: '73%',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '75%',
    borderWidth: 1,
    paddingLeft: '3%',
  },
  nomedata: {
    zIndex: -5,
    position: 'absolute',
    top: '70%',
    fontWeight: 'bold',
    fontFamily: fontePadrao,
    textTransform: 'uppercase',
    left: '12%',
  },
  caixatextogenero: {
    borderRadius: 10,
    position: 'absolute',
    left: '12%',
    top: '63%',
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '75%',
  },
  nomegender: {
    position: 'absolute',
    top: '60%',
    fontWeight: 'bold',
    fontFamily: fontePadrao,
    textTransform: 'uppercase',
    left: '12%',
  },
  nomeemail: {
    position: 'absolute',
    top: '50%',
    fontWeight: 'bold',
    fontFamily: fontePadrao,
    textTransform: 'uppercase',
    left: '12%',
  },
  caixatextoemail: {
    borderRadius: 10,
    position: 'absolute',
    left: '12%',
    top: '53%',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '75%',
    borderWidth: 1,
    paddingLeft: '3%',
  },
  caixatextonome: {
    borderRadius: 10,

    position: 'absolute',
    left: '12%',
    top: '42%',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '75%',
    borderWidth: 1,
    paddingLeft: '3%',
  },
  nometexto: {
    position: 'absolute',
    top: '39%',
    fontWeight: 'bold',
    fontFamily: fontePadrao,
    textTransform: 'uppercase',
    left: '12%',
  },
  texto: {
    fontFamily: fontePadrao,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: darkBlue,
  },
  botaoalterar: {
    backgroundColor: lightBlue,
    position: 'absolute',
    top: '29%',
    height: '5%',
    width: '42%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemeditar: {
    position: 'absolute',
    width: 128,
    height: 128,
    borderRadius: 128 / 2,
    top: '09%',
  },
  botaoSair: {
    alignSelf: 'center',
    width: '133%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    texto: {
      color: 'black',
      fontWeight: 'bold',
      fontFamily: fontePadrao,
      textTransform: 'uppercase',
    },
  },

  info: {

    width: 300,
    flexDirection: 'row',
    left: -30,
    titulo: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      margin: 2,
    },
    content: {
      fontWeight: '400',
      textTransform: 'uppercase',
      margin: 2,
    },
  },
  ola: {
    position: 'absolute',
    color: 'black',
    fontWeight: '400',
    top: 300,
    fontSize: 30,
    fontFamily: 'Source Sans Pro',
    textTransform: 'capitalize',
  },
  image: {
    backgroundColor: 'pink',
    width: 128,
    height: 128,
    borderRadius: 128 / 2,
    top: 128,
  },
  container: {
    height: 750,
    backgroundColor: lightColor,
    alignItems: 'center',
  },
});
