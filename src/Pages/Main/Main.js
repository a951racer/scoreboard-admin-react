import '../../css/bootstrap-4.4.1.css';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <title>Untitled Document</title>

      </header>
      <div className="Main-body" style={{ paddingBottom: 70 }}>
        <div class="jumbotron">
          <h1 class="display-4 text-center">Game Night Scoreboard</h1>
          <p class="lead text-center">Family game night just got high-tech!</p>
        </div>


        <div class="container">

          <div class="container" style={{ marginBottom: 35 }}>
            <button type="button" class="btn btn-primary">New Game</button>
          </div>

          <div class="container">
            <h3>Active Games</h3>
            <table width="400" border="1">
              <tbody>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Game</th>
                  <th scope="col">Players</th>
                </tr>
                <tr>
                  <td><a href="#">8/1/2021 1:30pm</a></td>
                  <td>Oh Hell</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td><a href="#">8/7/2021 2:10pm</a></td>
                  <td>Hearts</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div class="container">
            <h3>Recent Games</h3>
            <table width="400" border="1">
              <tbody>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Game</th>
                  <th scope="col">Players</th>
                </tr>
                <tr>
                  <td><a href="#">7/27/2021 12: 30pm</a></td>
                  <td>5 Crowns</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><a href="#">7/21/2021 3: 15m</a></td>
                  <td>Hearts</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td><a href="#">7/10/2021 1: 25pm</a></td>
                  <td>Phase 10</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td><a href="#">7/4/2021 2: 30pm</a></td>
                  <td>5 Crowns</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>
          </div>


          <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light align-content-center">
            <div class="container">
              A HobbSquad Joint - Copyright ® 2021
            </div>
          </nav>

          <script src="js/jquery-3.4.1.min.js"></script>

          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap-4.4.1.js"></script>
        </div>
      </div>
    </div>
  );
}

export default Main;