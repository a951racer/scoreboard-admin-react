import game from '../../API/game';
import { useEffect, useState } from 'react';

function ActiveGameList() {

    const [games, setGames] = useState();

    const findGames = async () => {
        const gamesData = await game.getGames();
        setGames(gamesData.filter(game => {
            return game.status.localeCompare("in progress") === 0;
        }).sort((a, b) => {
            return (new Date(a.startedDate)).getTime() - (new Date(b.startedDate)).getTime();
        }));
    }

    useEffect(() => findGames(), []);

    return (
        <table width="400" border="1">
            <tbody>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Game</th>
                    <th scope="col">Players</th>
                </tr>
                {games && games.map(game => {
                    return (
                        <tr key={game._id}>
                            <td><a href={`/${game._id}`}>{(new Date(game.startedDate)).toLocaleString()}</a></td>
                            <td>{game.description}</td>
                            <td>{game.players.length}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default ActiveGameList;