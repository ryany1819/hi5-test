import { useState } from 'react';
import { validateUsername, validatePassword, UNAME_ERR_MSG, PWD_ERR_MSG } from './utils'
import sideImage from './assets/images/side.jpg';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [unameErr, setUnameErr] = useState(0);
    const [pwdErr, setPwdErr] = useState(0);

    const handleClick = (e) => {
        const newUnameErr = validateUsername(username);
        const newPwdErr = validatePassword(password);
        console.log(newUnameErr, newPwdErr);
        setUnameErr(newUnameErr);
        setPwdErr(newPwdErr);
        if (newUnameErr || newPwdErr) return e.preventDefault();
        // do login
        alert('pass');
    }

    return (
        <div id="signin">
            <div id="signin-left">
                <div id="signin-card">
                    <div id="signin-logo"><b>LOGO</b></div>
                    <h1>Sign In</h1>
                    <p id="signin-subtitle">Sign in to stay connected.</p>
                    <form>
                        <label className="input-label" htmlFor="username">Username</label>
                        <input type="text" className={`${unameErr ? "red-border" : "blue-border"}`} name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {unameErr !== 0 && <p className="err-msg">{UNAME_ERR_MSG[unameErr]}</p>}
                        <label className="input-label" htmlFor="password">Password</label>
                        <input type="password" className={`${pwdErr ? "red-border" : "blue-border"}`} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {pwdErr !== 0 && <p className="err-msg">{PWD_ERR_MSG[pwdErr]}</p>}
                        <div id="signin-support">
                            <label>
                                <input type="checkbox" />
                                Remember me?
                            </label>
                            <a id="signin-forgot">Forget Password</a>
                        </div>
                        <button id="signin-btn" type="submit" onClick={handleClick}>Sign in</button>
                    </form>
                </div>
            </div>
            <div id="signin-right">
                <img src={sideImage} />
            </div>
        </div>
    );
}