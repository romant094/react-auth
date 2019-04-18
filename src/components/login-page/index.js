import React from 'react';
import './login-page.css';
import {Redirect} from 'react-router-dom';

const LoginPage = ({isLoggedIn, onLogIn}) => {

    if (isLoggedIn){
        return (
            <Redirect to={'/'} />
        )
    }
    return (
        <div className="login">
            <button className="btn"
                    onClick={onLogIn}>
                Login
            </button>
        </div>
    )
};

export default LoginPage;