
import axios from "./axios.custormize";

const createUserAPI = (fullName, password, email, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = { fullName, password, email, phone };
    return axios.post(URL_BACKEND, data)
}

const updateUserAPI = () => {

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}

export {
    createUserAPI,
    updateUserAPI,
    fetchAllUserAPI,
}

