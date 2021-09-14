import user from '../../API/user.js';
import '../../css/bootstrap-4.4.1.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Auth({ setUserData }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (email, password) => {
        let userData;
        try {
            userData = await user.login(email, password);
            return userData;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                //incorrect username/password
            }
            return null;
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const loginData = await loginUser(email, password);
        if (loginData) {
            setUserData(loginData);
        }
    }

    return (
        <div style={{ paddingBottom: 70 }}>
            <div className="jumbotron">
                <h1 className="display-4 text-center">Game Night Scoreboard</h1>
                <p className="lead text-center">Family game night just got high-tech!</p>
            </div>
            <div className="container">
                <form method="post" name="form1" className="text-center" id="login" onSubmit={handleSubmit}>
                    <div>
                        <label>Username: </label><input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password: </label><input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
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
    );
}

Auth.propTypes = {
    setUserData: PropTypes.func.isRequired
};

export default Auth;