import  React from 'react'
import {Button, TextInput, View, StyleSheet, FlatList} from "react-native";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from '../api/TMDBApi'

export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
            films: []
        }
    }

    _loadFilms() {
        console.log(this.searchedText.length)
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({films: data.results})
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button
                    style={styles.button}
                    title='Rechercher'
                    onPress={() => this._loadFilms()}
                />

                <FlatList
                    data={this.state.films}
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