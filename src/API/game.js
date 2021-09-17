import axios from 'axios';

const apiRoot = process.env.REACT_APP_API;

async function getGames() {
    const games = await axios.get(apiRoot + '/game');
    return games.data;
}

let exp = {
    getGames
};

export default exp;