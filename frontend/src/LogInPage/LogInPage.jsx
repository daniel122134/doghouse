import './LogInPage.css'
import React, { useState } from 'react';
import md5 from 'md5';
import authService from "../../authService.jsx";
import {useNavigate} from "react-router-dom";
import {api} from "../../api.jsx";

function LogInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async  (e) => {
        e.preventDefault();
        const passwordMd5 = md5(password);
        console.log('Logging in with:', username, passwordMd5);
        authService.login(username, passwordMd5, remember).then((response) => {
            if (response.username){
                navigate("/app");
                window.location.reload();
            }
        })

    };

    return (
        <div className="login-page">
            <div className="login-page-container">
                <form onSubmit={handleLogin}>
                    <button className="return-login" onClick={async () => {
                        navigate("/");
                        window.location.reload();
                    }}>return</button>
                    <h2>LogIn</h2>
                    <label htmlFor="username">User:</label>
                    <input className="login-inputs"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    /><br />

                    <label htmlFor="password">Password:</label>
                    <input className="login-inputs"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />

                    <label>
                        <input className="login-inputs" type="checkbox" name="remember" checked={remember}
                               onChange={(e) => setRemember(e.target.checked)} />Remember me
                    </label><br />

                    <button type="submit" className="login-submit">LogIn</button>

                </form>
            </div>
        </div>
    );
}

export default LogInPage
