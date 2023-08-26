// import React from 'react'
import './SignUpPage.css'
// import {Link} from "react-router-dom";
import React, { useState } from 'react';
import md5 from "md5";
import authService from "../../authService.jsx";
import {useNavigate} from "react-router-dom";

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signing up with:', username,email, password);

        const passwordMd5 = md5(password);
        authService.register(username, email, passwordMd5).then((response) => {
            if (response.username){
                navigate("/app");
                window.location.reload();
            }
        })
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <label htmlFor="username">Username:</label>
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

                    <label htmlFor="email">Email:</label>
                    <input className="inputs"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br />

                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label><br />

                    <button type="submit" className="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
export default SignUpPage
