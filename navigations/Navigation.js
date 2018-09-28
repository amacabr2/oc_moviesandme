import { createStackNavigator } from 'react-navigation'
import Search from '../components/Search'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    }
})

export default SearchStackNavigator