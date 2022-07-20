import axios from 'axios';
const baseUrl = 'https://reqres.in';

axios({method: 'get', url: `${baseUrl}/api/users/1`,}).then((response) => { console.log(response.data)});

axios.get(`${baseUrl}/api/users/1`).then((response) => {console.log(response.data)})