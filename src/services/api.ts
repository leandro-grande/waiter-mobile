import axios from 'axios';


export const api = axios.create({
	baseURL: 'http://172.16.120.23:3333'
});
