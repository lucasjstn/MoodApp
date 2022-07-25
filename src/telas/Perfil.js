import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { darkBlue, fontePadrao, lightColor } from "../constantes";

const Perfil = () => {
    return(
        <View style={styles.container}>

            <View style={styles.image}>
                
            </View>

            <View style={{backgroundColor: 'pink', maxWidth: '80%', height: 100, width: '80%', alignSelf: 'center', height: 50, position: 'absolute', top: 350}}>

                <View style={styles.info}>
                    <Text style={styles.info.titulo}>E-mail:</Text>
                    <Text style={styles.info.content} numberOfLines={1}>Emailmsm@email.commmmmmmmmmm</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.info.titulo}>gênero:</Text>
                    <Text style={styles.info.content} numberOfLines={1}>feminino</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.info.titulo}>data de nascimento:</Text>
                    <Text style={styles.info.content} numberOfLines={1}>15/15/2015</Text>
                </View>

                    <TouchableOpacity style={styles.botaoSalvar}>
                        <Text style={styles.botaoSalvar.texto}>Editar perfil</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.botaoSair}>
                        <Text style={styles.botaoSair.texto}>sair</Text>
                    </TouchableOpacity>
            
            </View>
            <Text style={styles.ola}>olá, fulana</Text>

            
        </View>
    )
}

const styles = StyleSheet.create({
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
    botaoSalvar: {
        alignSelf: 'center',
        width: '133%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#304FFE',  
            texto: {
                color: lightColor,
                fontWeight: 'bold',
                fontFamily: fontePadrao,
                textTransform: 'uppercase',  
            },
    },
    info: {
        // maxWidth: 200,
        width: 300,        // position: 'absolute',
        flexDirection: 'row',
        left: -30,
        // top: 350,
        // left: 42,
        titulo: {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            margin: 2,

        },
        content:{
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
        textTransform: 'capitalize'
    },
    image:{
        backgroundColor: 'pink',
        width: 128,
        height: 128,
        borderRadius: 128/2,
        top: 128, 
    },
    container: {
        height: '100%',
        backgroundColor: lightColor,
        alignItems: 'center',
    }
})

export default Perfil;