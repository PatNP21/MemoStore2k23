import axios from 'axios'

export class AlbumHandler {

    baseURL = 'http://localhost:2000'

    sendImage(data, id) {
        let formData = new FormData()
        formData.append('thefile', data)
        formData.append('owner', id.toString())
        console.log(formData)
        console.log('before sending...')
        return axios({method: 'POST', url:`${this.baseURL}/addImage`, data: formData, headers: {'Content-Type': 'multipart/form-data; boundary = twojastara'}})
    }

    getImages(id) {
        return axios.get(`${this.baseURL}/getImage/${id}`)
    }
}

export default AlbumHandler