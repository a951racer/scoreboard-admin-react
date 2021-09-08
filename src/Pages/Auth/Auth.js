import '../../css/bootstrap-4.4.1.css';

function Auth() {
    return (
        <body style={{ paddingBottom: 70 }}>
            <div class="jumbotron">
                <h1 class="display-4 text-center">Game Night Scoreboard</h1>
                <p class="lead text-center">Family game night just got high-tech!</p>
            </div>
            <div class="container">
                <form method="post" name="form1" class="text-center" id="login">
                    <div>
                        <label>Username: </label><input type="email" />
                    </div>
                    <div>
                        <label>Password: </label><input type="password" />
                    </div>
                    <button type="button" class="btn btn-primary">Login</button>
                </form>
            </div>
            <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light align-content-center">
                <div class="container">
                    A HobbSquad Joint - Copyright ® 2021
                </div>
            </nav>

            <script src="js/jquery-3.4.1.min.js"></script>

            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap-4.4.1.js"></script>
        </body>
    );
}

export default Auth;