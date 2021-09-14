import axios from 'axios';

const apiRoot = "http://localhost:4800";

async function login(email, password) {
    const user = await axios.post(apiRoot + '/auth/login', {
        email,
        password
    });
    return user.data;
}

let exp = {
    login
};

export default exp;