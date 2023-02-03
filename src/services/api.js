import axios from 'axios'
// import qs from 'qs'
import { BASE_URL, APIKEY } from '../config/api_config'

export const getSearch = async (search, searchType) => {

    const api_key = APIKEY
    const url = `${BASE_URL}/search/${searchType}?api_key=${api_key}&query=${search}`
    console.log(url)
    const response = await axios.get(url);
    const results = response.data.results
    return results
}

export const getMovies = async (category) => {

    const api_key = APIKEY
    const url = `${BASE_URL}/movie/${category}?api_key=${api_key}`
    console.log(url)
    const response = await axios.get(url);
    const results = response.data.results
    return results
}

export const getTvShows = async (category) => {

    const api_key = APIKEY
    const url = `${BASE_URL}/tv/${category}?api_key=${api_key}`
    console.log(url)
    const response = await axios.get(url);
    const results = response.data.results
    return results
}

export const singleMovie = async (id,type) => {

    const api_key = APIKEY
    const url = `${BASE_URL}/${type}/${id}?api_key=${api_key}`
    console.log(url)
    const response = await axios.get(url);
    const results = response.data
    return results
}