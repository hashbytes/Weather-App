import axios from 'axios';

const API_KEY = 'cc39fc40b2e7cc04ce916dfd6cc479e8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

const config = {

};

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url, {crossDomain: true});

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}