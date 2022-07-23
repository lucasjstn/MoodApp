import axios from 'axios';
import { useState } from 'react';
const baseUrl = 'https://shrouded-shel.herokuapp.com/daily_entries';

axios({method: 'get', url: `${baseUrl}/api/users/1`,}).then((response) => { console.log(response.data)});

export const [data, setData] = useState('');

async function CapturarEntradas() {
    axios.get(`${baseUrl}/daily_entries`).then((response) => {console.log(response.data)})
}

setData(1);
console.log(data);