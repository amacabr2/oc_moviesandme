import  React from 'react'
import {Button, TextInput, View, StyleSheet} from "react-native";

export default class Search extends React.Component {

    render() {
        return(
            <View style={styles.view}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button style={styles.button} title='Rechercher' onPress={_ => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        paddingLeft: 5
    },
    button: {
        marginLeft: 5,
        marginRight: 5
    }
})