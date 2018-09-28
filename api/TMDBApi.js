const API_TOKEN = "cbd10c0e49977aa4063ebd7fc84aea37"
const LANGUAGE = "fr-FR"

export function getFilmsFromApiWithSearchedText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=' + LANGUAGE + '&query=' + text + '&page=' + page

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=' + LANGUAGE)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getBestFilmsFromApi (page) {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_TOKEN + '&vote_count.gte=1000&sort_by=release_date.desc&language=fr&page=' + page)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}