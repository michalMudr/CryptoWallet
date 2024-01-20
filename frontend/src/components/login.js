import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; // Import Redirect
import { Route } from 'react-router-dom'; // Import Route
import axios from 'axios';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleLogin = () => {
        const { username, password } = this.state;
        const csrftoken = getCookie('csrftoken');

        console.log('CSRF Token:', csrftoken); // Check if the CSRF token is correctly retrieved

        axios
            .post('api/login/', { username, password }, { headers: {
                'X-CSRFToken': csrftoken
                }
            })
            .then((response) => {
                // Handle successful login
                console.log(response.data.message);
                // Redirect to a protected route if needed
                this.setState({ redirectToMainPage: true }); // Set a state variable to trigger the redirection
            })
            .catch((error) => {
                // Handle login error
                console.error('Login error:', error.response);
                this.setState({ error: 'Login failed' });
            });
    };

    handleLogout = () => {
        axios
            .get('/api/logout/')
            .then((response) => {
                // Handle successful logout
                console.log(response.data.message);
                // Redirect to a different route if needed
            })
            .catch((error) => {
                // Handle logout error
                console.error('Logout error:', error.response);
            });
    };

    handleRegister = () => {
        const { username, password } = this.state;
        axios
            .post('/api/register/', { username, password })
            .then((response) => {
                // Handle successful registration
                console.log(response.data.message);
                // Redirect to a different route if needed
            })
            .catch((error) => {
                // Handle registration error
                console.error('Registration error:', error.response);
                this.setState({ error: 'Registration failed' });
            });
    };

    render() {
        return (
            <div>
                <h2>Login</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleLogout}>Logout</button>
                <button onClick={this.handleRegister}>Register</button>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

export default Login;