import { createStore, combineReducers } from 'redux';
import toggleFavorite from './reducers/FavoriteReducer'
import setAvatar from "./reducers/AvatarReducer";

export default createStore(combineReducers({toggleFavorite, setAvatar}))