import axios from 'axios'

export class UserHandler {

    baseURL = 'http://localhost:2000'

    registerNewUser(data) {
        return axios.post(`${this.baseURL}/registerUser/`, data)
    }

    loginToTheService(data) {
        return axios.post(`${this.baseURL}/login/`, data)
    }
}

export default UserHandler