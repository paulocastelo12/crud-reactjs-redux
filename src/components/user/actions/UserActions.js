import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/usersmodel';

export const changeUser = (event) => ({
    type: 'USER_CHANGED',
    payload: {
        value: event.target.value,
        name: event.target.name
    }
})

export const read_user = () => {
    const request = axios.get(baseUrl)
    return {
        type: 'READ_USER',
        payload: request
    }
}

export const add_user = (user) => {
    const request = axios.post(baseUrl, user)
    return {
        type: 'CREATE_USER',
        payload: request
    }
}



export const clear_user = () => {
    //const request = axios.get(baseUrl)
    return {
        type: 'CLEAR_USER',
        payload: ''
    }
}
