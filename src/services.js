const userLoginUrl = 'https://interview-test-api-2bfhetuihq-de.a.run.app/user/login';
const userUrl = 'https://interview-test-api-2bfhetuihq-de.a.run.app/user';

const userLoginApi = async (username, password) => {
    const res = await fetch(userLoginUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });
    
    const data = await res.json();
    return data;
}

const userApi = async (token) => {
    const res = await fetch(userUrl, {
        mode: 'cors',
        headers: {
            'Authorization': token
        }
    });
    const data = res.json();
    return data;
}

export { userLoginApi, userApi };