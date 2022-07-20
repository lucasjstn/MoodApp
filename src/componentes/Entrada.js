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
        backgroundColor: '#F6F6F6',
        width: 321,
        height: 46,
        position: 'relative',
        margin: 10,
        borderRadius: 10,
        fontFamily: 'Source Sans Pro',
    }
})

export default Entrada;