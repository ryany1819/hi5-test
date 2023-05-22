
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import TokenContext from './TokenContext';
import { userApi } from './services';

export default function Main() {
    const {token} = useContext(TokenContext);
    const [userObj, setUserObj] = useState(null);

    const fetchUserObj = async (token) => {
        try {
            const res = await userApi(token);
            setUserObj(res);
        }
        catch (err) {

        }
    }
    useEffect(() => {
        if (token) {
            fetchUserObj(token);
        }
    }, [token]);
    return (
        <>
            {!token && (<Navigate to="/sign-in"/>)}
            <h1>Main Page</h1>
            <p>{JSON.stringify(userObj)}</p>
        </>        
        
    );
}