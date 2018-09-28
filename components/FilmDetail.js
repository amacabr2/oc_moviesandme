import React from 'react'
import {StyleSheet} from 'react-native'

export default class FilmDetail extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <Text>Détail du film {this.props.navigation.state.params.idFilm}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})