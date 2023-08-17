import axios from 'axios'

export class AlbumHandler {

    baseURL = 'http://memo-store2k23.vercel.app'

    sendImage(data) {
        let formData = new FormData()
        formData.append('thefile', data)
        formData.append('owner', 'user_folder')
        console.log(formData)
        console.log('before sending...')
        return axios({method: 'POST', url:`${this.baseURL}/addImage`, data: formData, headers: {'Content-Type': 'multipart/form-data; boundary = twojastara'}})
    }

    getImages() {
        return axios.get(`${this.baseURL}/getImage`)
    }
}

export default AlbumHandler