import axios from 'axios'
import { Form } from 'react-router-dom'

export class NotesHandler {

    baseURL = 'http://localhost:2000'

    getUsersNotes(id) {
        return axios.get(`${this.baseURL}/getNotes/${id}`)
    }

    addNewNote(data) {
        return axios.post(`${this.baseURL}/addNote/`, data)
    }

    deleteNote(id, data) {
        return axios.delete(`${this.baseURL}/deleteNote/${id}/`, data)
    }

}

export default NotesHandler