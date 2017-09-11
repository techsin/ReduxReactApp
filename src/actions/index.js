const API_KEY = '901278f5e3c9532b139980a28961f525';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city='ny') {
    const FULL_URL = `${URL}&q=${city},us`;
    const request = fetch(FULL_URL).then(res=>res.json());

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

