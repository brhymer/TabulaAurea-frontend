const REACT_APP_API_URL = `https://murmuring-chamber-41495.herokuapp.com` || `http://localhost:3001`

export default class UserModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            
        }).then(res => res.json())
    }

    static login(credentials) {
        return fetch(`${REACT_APP_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(credentials)
        }).then(res => res.json())
    }

    static logout() {
        return fetch(`${REACT_APP_API_URL}/auth/logout`, {
            method: "DELETE",
            credentials: "include"
        })
    }
}