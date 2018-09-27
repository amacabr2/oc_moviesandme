import  React from 'react'
import {Button, TextInput, View, StyleSheet, FlatList, ActivityIndicator} from "react-native";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from '../api/TMDBApi'

export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
            films: [],
            isLoading: false
        }
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
            this.setState({isLoading: true})

            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({
                    films: data.results,
                    isLoading: false
                })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadFilms()}
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

                {this._displayLoading()}
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
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})