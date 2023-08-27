// import React from 'react'
import './LogInPage.css'
// import {Link} from "react-router-dom";
import React, { useState } from 'react';
import md5 from 'md5';
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";
import {useNavigate} from "react-router-dom";


function LogInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async  (e) => {
        e.preventDefault();
        const passwordMd5 = md5(password);
        console.log('Logging in with:', username, passwordMd5);
        authService.login(username, passwordMd5).then((response) => {
            if (response.username){
                navigate("/app");
                window.location.reload();
            }
        })
        console.log('Logged in');
        console.log(authService.getCurrentUser());
        
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
                        <input className="inputs" type="checkbox" name="remember" checked={remember}
                               onChange={(e) => setRemember(e.target.checked)} />Remember me
                    </label><br />

                    <button type="submit" className="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
export default LogInPage
