import user from '../../API/user.js';
import '../../css/bootstrap-4.4.1.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function CreateAccount({ setUserData }) {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const createUser = async (email, username, password) => {
        let userData;
        try {
            userData = await user.register(email, username, password);
            return userData;
        } catch (error) {
            setShowError(true);
            return null;
        }
    }

    const loginUser = async (email, password) => {
        let userData;
        try {
            userData = await user.login(email, password);
            return userData;
        } catch (error) {
            return null;
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const registerData = await createUser(email, username, password);
        if (registerData) {
            const loginData = await loginUser(email, password);
            if(loginData){
                setUserData(loginData);
            } else {
                setUserData(registerData);
            }
        }
    }

    const [showError, setShowError] = useState(false);

    const hideError = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowError(false);
    };

    return (
        <div style={{ paddingBottom: 70 }}>
            <div className="jumbotron">
                <h1 className="display-4 text-center">Game Night Scoreboard</h1>
                <p className="lead text-center">Family game night just got high-tech!</p>
            </div>
            <div className="container">
                <form method="post" name="form1" className="text-center" id="login" onSubmit={handleSubmit}>
                    <div>
                        <label>Email: </label><input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Username: </label><input type="text" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password: </label><input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={showError}
                        autoHideDuration={6000}
                        onClose={hideError}
                        message="Account Creation Failed"
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={hideError}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />

                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
                <a href="/Login">Already have an account?</a>
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

CreateAccount.propTypes = {
    setUserData: PropTypes.func.isRequired
};

export default CreateAccount;