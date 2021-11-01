import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Index() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {

                notifyLoggedIn("User Logged In Redirecting to Home Page")
                history.push('/');
            }).catch(e => notifyError(e.message));
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                notifyLoggedIn("User Account Created")
            })
            .catch(e => notifyError(e.message));

    }
    const notifyLoggedIn = (message) =>
        toast.success(message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'colored',
            draggable: true,
            pauseOnHover: false,
            progress: undefined,
        });
    const notifyError = (message) =>
        toast.error(message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'colored',
            draggable: false,
            pauseOnHover: false,
            progress: undefined,
        });
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={login} type="submit" className="login__signUp">Sign In</button>
                </form>
                <p>
                    Please read these conditions carefully before using this  Amazon Clone  website. By using the Amazon Clone website, you signify your agreement to be bound by these conditions.
                </p>
                <button onClick={register} className="login__Create">Create Amazon Account</button>
            </div>
        </div>
    )
}
