import axios from 'axios';

const apiRoot = "http://localhost:4800";

async function getGames() {
    const games = await axios.get(apiRoot + '/game');
    return games.data;
}

let exp = {
    getGames
};

export default exp;