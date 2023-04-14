import axios from "axios";


const token = localStorage.getItem('token');



const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    withCredentials: true,
    timeout: 4000,
    headers: {
        Accept: 'application/json',

    }

});






export default axiosInstance;