

LoginAPI = {


    getUser: (id) => { // this will get all the users not sure if this will get used
        return fetch(`${URL}/users/${id}`)
            .then(r => r.json())
    },
    //Creates a new user
    createUser: (newUser) => {
        return fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(r => r.json())
    },
}