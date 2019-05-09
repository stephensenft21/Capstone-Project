
const URL = "http://localhost:8088/"

const loginAPI = { 


    getUser: (id) => { //this will grab a user 
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

export default loginAPI