import '../../css/bootstrap-4.4.1.css';
import ActiveGameList from '../../Components/Main/ActiveGameList';
import CompletedGameList from '../../Components/Main/CompletedGameList';

function Main() {
  return (
    <div style={{ paddingBottom: 70 }}>
      <div className="jumbotron">
        <h1 className="display-4 text-center">Game Night Scoreboard</h1>
        <p className="lead text-center">Family game night just got high-tech!</p>
      </div>


      <div className="container">

        <div className="container" style={{ marginBottom: 35 }}>
          <a className="btn btn-primary" href="/NewGame" >New Game</a>
        </div>

        <div className="container">
          <h3>Active Games</h3>
          <ActiveGameList />
        </div>
        <br />
        <div className="container">
          <h3>Completed Games</h3>
          <CompletedGameList />
        </div>


        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light align-content-center">
          <div className="container">
            A HobbSquad Joint - Copyright ® 2021
          </div>
        </nav>

        <script src="js/jquery-3.4.1.min.js"></script>

        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap-4.4.1.js"></script>
      </div>
    </div>
  );
}

export default Main;