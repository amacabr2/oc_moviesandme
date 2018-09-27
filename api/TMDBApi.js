const API_TOKEN = "cbd10c0e49977aa4063ebd7fc84aea37"
const LANGUAGE = "fr-FR"

export function getFilmsFromApiWithSearchedText(text) {
    //https://api.themoviedb.org/3/movie/550?api_key
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=' + LANGUAGE + '&query=' + text

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}