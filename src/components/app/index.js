import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './app.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ClosedPage from '../closed-page'
import LoginPage from '../login-page';

class App extends Component {
    state = {
        isLoggedIn: false
    };
    onLogin = () => {
        this.setState({isLoggedIn: true});
        console.log('I logged in!')
    };

    render() {
        const {isLoggedIn} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <Router>
                    <div className="App-links">
                        <Link to={'/'}>Start page</Link>
                        <Link to={'/opened'}>Opened page</Link>
                        <Link to={'/closed'}>Closed page</Link>
                        {/*<Link to={'/login'}>login</Link>*/}
                    </div>

                    <div className="App-content">
                        <Route path={'/'} exact render={() => (<h2>Welcome!<br/>This is a simple example of auth</h2>)}/>
                        <Route path={'/opened'}
                               render={() => (<h2><span className="text-color--green">opened</span> content</h2>)}/>
                        <Route path={'/closed'} render={() => (<ClosedPage isLoggedIn={isLoggedIn}/>)}/>
                        <Route path={'/login'} render={() => (<LoginPage isLoggedIn={isLoggedIn} onLogIn={this.onLogin}/>)}/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
