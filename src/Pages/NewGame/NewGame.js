import '../../css/bootstrap-4.4.1.css';

function NewGame() {
    return (
        <div style={{ paddingBottom: 70 }}>
            <div className="jumbotron">
                <h1 className="display-4 text-center">Game Night Scoreboard</h1>
                <p className="lead text-center">Family game night just got high-tech!</p>
            </div>
            <div className="container">
                <h1>New Game</h1>
                <form method="post" name="form1" id="new-game">
                    <div>
                        <label><b>Game:</b> </label>
                        <select>
                            <option value="Hearts">Hearts</option>
                            <option value="5 Crowsns">5 Crowns</option>
                            <option value="Oh Hell">Oh Hell</option>
                            <option value="Phase 10">Phase 10</option>
                        </select>
                    </div>
                    <div>
                        <label><b>Players:</b> </label>
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="addPlayerModal">Add PLayer</button>
                    </div>
                    <div>
                        <ol>
                            <li>Mary</li>
                            <li>Sue</li>
                            <li>Jimmy</li>
                        </ol>
                    </div>
                    <button type="button" className="btn btn-primary">Start Game</button>
                </form>
            </div>
            <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid text-center text-light">
                    A HobbSquad Joint - Copyright ® 2021
                </div>
            </nav>


            <div className="modal fade" id="addPlayerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <script src="js/jquery-3.4.1.min.js"></script>

            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap-4.4.1.js"></script>
        </div>
    );
}

export default NewGame;