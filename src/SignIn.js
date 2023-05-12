import { useState } from 'react';
import sideImage from './side.jpg';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {

    }
    
    return (
        <div id="signin">
            <div id="signin-left">
                <div id="signin-card">
                    <div id="signin-logo"><b>LOGO</b></div>
                    <h1>Sign In</h1>
                    <p id="signin-subtitle">Sign in to stay connected.</p>
                    <form>
                        <label className="input-label" for="username">Username</label>
                        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label className="input-label" for="password">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

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