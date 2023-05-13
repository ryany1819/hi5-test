import { useState, useContext } from 'react';
import { validateUsername, validatePassword, UNAME_ERR_MSG, PWD_ERR_MSG } from './utils'
import sideImage from './assets/images/side.jpg';
import TokenContext from './TokenContext';
import { userLoginApi } from './services';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [unameErr, setUnameErr] = useState(0);
    const [pwdErr, setPwdErr] = useState(0);

    const { token, setToken } = useContext(TokenContext);

    const handleClick = (e) => {
        const newUnameErr = validateUsername(username);
        const newPwdErr = validatePassword(password);
        setUnameErr(newUnameErr);
        setPwdErr(newPwdErr);
        if (newUnameErr || newPwdErr) return e.preventDefault();
    }

    const doLogin = async (e) => {
        // do login
        e.preventDefault();
        const res = await userLoginApi(username, password);
        if (!res.data) {
            alert(res.error);
            setUsername('');
            setPassword('');
            return e.preventDefault();
        }
        setToken(res.data.token);
    }

    return (
        <>
            {token && (<Navigate to="/" />)}
            <div id="signin">
                <div id="signin-left">
                    <div id="signin-card">
                        <div id="signin-logo"><b>LOGO</b></div>
                        <h1>Sign In</h1>
                        <p id="signin-subtitle">Sign in to stay connected.</p>
                        <form onSubmit={doLogin}>
                            {/* Username */}
                            <div className="input-control">
                                <label className="input-label" htmlFor="username">Username</label>
                                <input type="text" className={`${unameErr ? "red-border" : "blue-border"}`} name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                {unameErr !== 0 && <i className="fa-solid fa-circle-exclamation"></i>}
                            </div>
                            {unameErr !== 0 && <p className="err-msg">{UNAME_ERR_MSG[unameErr]}</p>}
                            {/* Password */}
                            <div className="input-control">
                                <label className="input-label" htmlFor="password">Password</label>
                                <input type="password" className={`${pwdErr ? "red-border" : "blue-border"}`} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {pwdErr !== 0 && <i className="fa-solid fa-circle-exclamation"></i>}
                            </div>
                            {pwdErr !== 0 && <p className="err-msg">{PWD_ERR_MSG[pwdErr]}</p>}
                            {/* Support Options */}
                            <div id="signin-support">
                                <label>
                                    <input type="checkbox" />
                                    Remember me?
                                </label>
                                <a href="/dummy-forgot" id="signin-forgot">Forget Password</a>
                            </div>
                            {/* Sign-in Button */}
                            <button id="signin-btn" type="submit" onClick={handleClick}>Sign in</button>
                        </form>
                    </div>
                </div>
                <div id="signin-right">
                    <img src={sideImage} alt="side-img" />
                </div>
            </div>
        </>
    );
}