import  React from 'react'
import {Button, TextInput, View} from "react-native";

export default class Search extends React.Component {

    render() {
        return(
            <View>
                <TextInput placeholder='Titre du film' />
                <Button title='Rechercher' onPress={_ => {}}/>
            </View>
        )
    }
}