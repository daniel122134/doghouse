// import React from 'react'
import './LogInPage.css'
// import {Link} from "react-router-dom";
import React, { useState } from 'react';


function LogInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, you would perform authentication here
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">User:</label>
                    <input className="inputs"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    /><br />

                    <label htmlFor="password">Password:</label>
                    <input className="inputs"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />

                    <label>
                        <input className="inputs" type="checkbox" name="remember" /> Remember me
                    </label><br />

                    <button type="submit" className="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
export default LogInPage
