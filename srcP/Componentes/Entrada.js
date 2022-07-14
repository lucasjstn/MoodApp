import React from "react";
import { 
    View,
    StyleSheet,
    TextInput
} from "react-native";

const Entrada = (props) => {

    {let Senha = true;}

    return(
        <View>
            <TextInput      
                style={styles.caixa}
                placeholder={props.placeholder}
                secureTextEntry={props.Senha}
                keyboardType={props.keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    caixa: {  
        padding: 10,
        backgroundColor: '#F6F6F6',
        width: 321,
        height: 46,
        position: 'relative',
        marginTop: '6.1%',
        borderRadius: 10,
        // fontFamily: 'Source Sans Pro',
         // marginTop: ,
    }
})

export default Entrada;