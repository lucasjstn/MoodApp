import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Image,
  Alert,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {darkBlue, fontePadrao, lightBlue, lightColor} from '../../constantes';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const EditarPerfil = ({navigation, route}) => {

    const {currentPhoto, currentName, currentEmail, currentGender, currentBirth} = route.params;
    const data = JSON.parse(currentBirth);

    const [name, setName] = useState(currentName);
    const [email, setEmail] = useState(currentEmail);
    const [gender, setGender] = useState(currentGender);
    const [birth, setBirth] = useState(data);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: 'masculino', value: 'masculino'
        },
        {
            label: 'feminino', value: 'feminino'
        },
        {
            label: 'outro', value: 'outro'
        }
    ]);
    const [modal, setModal] = useState(false);
    console.log(value);
    console.log(birth)

    // const EditarUsuário

    const photos = [
    {
        id: 1,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_1.png'
    },
    {
        id: 2,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_2.png'
    },
    {
        id: 3,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_3.png'
    },
    {
        id: 4,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_4.png'
    },
    {
        id: 5,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_5.png'
    },
    {
        id: 1,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_1.png'
    },
    {
        id: 1,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_1.png'
    },
    {
        id: 1,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_1.png'
    },
    {
        id: 1,
        photo: 'https://shrouded-shelf-01513.herokuapp.com/assets/images/avt_1.png'
    }
]

    return(

        <KeyboardAwareScrollView >

            <Modal 
            onRequestClose={()=> Alert.alert('Atenção', 'Suas alterações não serão salvas, deseja mesmo sair?', [
              {text: 'CANCELAR'},
              {
                text: 'SIM',
                onPress: () => {
                  setModal(false);
                },
              },
            ])} 
            visible={modal}
            
            >
                <View>
                    <TouchableOpacity
                        style={styles.botaomodalsair}
                        onPress={() => Alert.alert('Atenção', 'Suas alterações não serão salvas, deseja mesmo sair?', [
                            {text: 'CANCELAR'},
                            {
                              text: 'SIM',
                              onPress: () => {
                                setModal(false);
                              },
                            },
                          ])}>
                    <Text style={{fontSize: 25, color: darkBlue}}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.textoheaderperfil}>Selecione a foto do perfil</Text>
                </View>
            </Modal>

            <View  style={styles.container}>
            {/* <Text>{currentName}</Text>
            <Text>{currentEmail}</Text>
            <Text>{currentGender}</Text>
            <Text>{currentName}</Text>
            <Text>{data[0]}{data[1]}{data[2]}</Text> */}
            <Image
        style={styles.imagemeditar}
        source={{
          uri: `${currentPhoto}`,
        }}
      />
      <TouchableOpacity activeOpacity={0.5} style={styles.botaoalterar}
        onPress={()=>setModal(true)}
      >
        <Text style={styles.texto}>alterar foto</Text>
      </TouchableOpacity>
      <Text style={styles.nometexto}>nome</Text>
      <TextInput editable={false} defaultValue={currentName} style={styles.caixatextonome} onChangeText={(newName)=>{
        setName(newName)
      }}/>
      <Text style={styles.nomeemail}>email</Text>
      <TextInput editable={false} enabled={false} defaultValue={currentEmail} style={styles.caixatextoemail} onChangeText={(newName)=>{
        setEmail(newName)
      }}/>
      <Text style={styles.nomegender}>gênero</Text>
      {/* <TextInput enabled={false} defaultValue={currentGender} style={styles.caixatextogenero} onChangeText={(newName)=>{
        setEmail(newName)
      }}/> */}
      
      <DropDownPicker 
      disableBorderRadius={true}
    //   disableBorderRadius={true}
      listMode='SCROLLVIEW' 
containerStyle={styles.caixatextogenero}
    //   labelStyle={{
        
    //     }}
    //     border
        labelStyle={{fontWeight: 'bold', borderRadius: 0,
        fontFamily: fontePadrao,
        textTransform: 'uppercase',}}
        textStyle={{fontWeight: 'bold',
        fontFamily: fontePadrao,
        textTransform: 'uppercase'}}
        placeholder={currentGender}
        placeholderStyle={{fontWeight: 'bold', borderRadius: 0,
        fontFamily: fontePadrao,
        textTransform: 'uppercase',}}
        disabledStyle={{borderRadius: 0,}}
        modalTitleStyle={{borderRadius: 0,}}
        modalContentContainerStyle={{borderRadius: 0}}
        badgeStyle={{borderRadius: 0}}
        tickIconStyle={{borderRadius: 0}}
        itemSeparatorStyle={{borderRadius: 0}}
        closeIconStyle={{borderRadius: 0}}
        disabledItemContainerStyle={{borderRadius: 0}}
        open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />

      <Text style={styles.nomedata}>data de nascimento</Text>
      <TextInput editable={false} defaultValue={`${birth[0]}/${birth[1]}/${birth[2]}`} style={styles.caixatextodata} onChangeText={(newName)=>{
        setEmail(newName)
      }}/>
      
      <TouchableOpacity activeOpacity={0.5} style={styles.botaosalvar}>
        <Text style={styles.textosalvar}>Salvar</Text>
      </TouchableOpacity>
      </View>
        </KeyboardAwareScrollView>

    )
};

export default EditarPerfil;
const styles = StyleSheet.create({
    textoheaderperfil:{
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
    textosalvar:{
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
        // backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        width: '75%',
        // borderWidth: 1,
        // paddingLeft: '3%',
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
    caixatextonome:{
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
    // maxWidth: 200,
    width: 300, // position: 'absolute',
    flexDirection: 'row',
    left: -30,
    // top: 350,
    // left: 42,
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
    // width: 428,
    backgroundColor: lightColor,
    alignItems: 'center',
  },
});

