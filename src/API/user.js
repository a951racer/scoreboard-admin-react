import axios from 'axios';

const apiRoot = process.env.REACT_APP_API;

async function login(email, password) {
    const user = await axios.post(apiRoot + '/auth/login', {
        email,
        password
    });
    return user.data;
}

async function register(email, username, password) {
    const user = await axios.post(apiRoot + '/auth/register', {
        email,
        username,
        password
    });
    return user.data;
}

let exp = {
    login,
    register
};

export default exp;