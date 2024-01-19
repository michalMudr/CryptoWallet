import React, { Component } from 'react';
import axios from 'axios';

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
        axios
            .post('/api/login/', { username, password })
            .then((response) => {
                // Handle successful login
                console.log(response.data.message);
                // Redirect to a protected route if needed
            })
            .catch((error) => {
                // Handle login error
                console.error('Login error:', error.response);
                this.setState({ error: 'Login failed' });
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
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

export default Login;