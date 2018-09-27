import  React from 'react'
import {Button, TextInput, View, StyleSheet, FlatList, Text} from "react-native";
import films from '../helpers/FilmsData'
import FilmItem from "./FilmItem";

export default class Search extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button style={styles.button} title='Rechercher' onPress={() => {}}/>

                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    textinput: {
        height: 50,
        paddingLeft: 5
    },
    button: {
        height: 50,
    }
})