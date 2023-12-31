// import React from 'react'
import './SignUpPage.css'
// import {Link} from "react-router-dom";
import React, { useState } from 'react';
import md5 from "md5";
import authService from "../../authService.jsx";
import {useNavigate} from "react-router-dom";

function SignUpPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signing up with:', userName,email, password);

        const passwordMd5 = md5(password);
        authService.register(userName, email, passwordMd5, remember).then((response) => {
            if (response.username){
                navigate("/app");
                window.location.reload();
            }
        })
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <form onSubmit={handleSignup}>
                    <h2>Sign Up</h2>
                    <label htmlFor="username">UserName:</label>
                    <input className="signup-inputs"
                        type="text"
                        id="username"
                        name="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    /><br />

                    <label htmlFor="password">Password:</label>
                    <input className="signup-inputs"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />

                    <label htmlFor="email">Email:</label>
                    <input className="signup-inputs"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br />

                    <label>
                        <input className="login-inputs" type="checkbox" name="remember" checked={remember}
                               onChange={(e) => setRemember(e.target.checked)} />Remember me
                    </label><br />

                    <button type="submit" className="signup-submit">Sign Up</button>
                    <button className="return-signup" onClick={async () => {
                        navigate("/");
                        window.location.reload();
                    }}>return</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage
