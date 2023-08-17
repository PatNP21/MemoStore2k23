import axios from 'axios'

export class UserHandler {

    baseURL = 'http://memo-store2k23.vercel.app'

    registerNewUser(data) {
        return axios.post(`${this.baseURL}/registerUser/`, data)
    }

    loginToTheService(data) {
        return axios.post(`${this.baseURL}/login/`, data)
    }
}

export default UserHandler