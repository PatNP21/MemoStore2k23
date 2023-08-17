import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NotesHandler from './../../handlers/NotesHandler'
import AddNoteModal from '../../modals/AddNoteModal'
import Modal from '../../modals/Modal'
import DeleteNoteModal from '../../modals/DeleteNoteModal'
import Button from 'react-bootstrap/Button';

const Container = styled.div`
  width: 35vw;
  height: 90vh;
  margin: 2vh 2vw;
  border-left: 2px solid #6666d6;
  float:left;
`
const NoteView = styled.div`
  padding: 2vh 2vw;
  height: 60vh;
  margin-left: 10px;
  border-bottom: 1px solid #000080;
`
const Menu = styled.div`
  height:10vh;
  width:30vw;
  display: grid;
  grid-template-columns: 18vw 18vw;
`
const Btn = styled.button`
  width:80%;
  height:80%;
  border-radius: 10px;
  background-color: #fff;
  margin: 2vh auto;
  border: 1px solid #000080;
  cursor:pointer;
  transition: ease-in 0.3s;
`

function NotesMenu({item, unselectDeletedItem, user_id}) {

  const notes_handler = new NotesHandler()
  const [selectedContent, setSelectedContent] = useState('any note content :)')
  const [addNoteModal, activateAddNoteModal] = useState(false)
  const [deleteNoteModal, activateDeleteNoteModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  let csfrtoken = null

  const addNote = (data) => {
    console.log(data)
    notes_handler.addNewNote(data).then((res) => {
      console.log(res)
      unselectDeletedItem()
      activateAddNoteModal(false)
      setSuccessModal(true)
    }).catch(err => {
      activateAddNoteModal(false)
      setFailureModal(true)
    })
  }

  const deleteNote = (id, item) => {
    notes_handler.deleteNote(id, item).then(() => {
      activateDeleteNoteModal(false)
      setSuccessModal(true)
    }).catch(err => {
      activateAddNoteModal(false)
      setFailureModal(true)
    })
  }

  const cancelDeleting = () => {
    activateDeleteNoteModal(false)
  }

  const turnOff = () => {
    setSuccessModal(false)
    setFailureModal(false)
  }

  return (
    <Container>
      <NoteView>
        {item.title}
        <br/>
        {item.content}
        <br/>
        <h5>
          {item.creating_date}
        </h5>
        <img src={item.multimedia}/>
      </NoteView>
      <Menu>
        <Btn
          variant="primary"
          className="leftButtonInMenu notesMenuBtn"
          onClick={() => {
            activateAddNoteModal(true)
          }}
        >
          Add note
        </Btn>
        <Btn 
          variant="secondary"
          className="rightButtonInMenu notesMenuBtn"
          onClick={() => {
            activateDeleteNoteModal(true)
          }}
        >
          Delete note
        </Btn>
      </Menu>
      {addNoteModal && <AddNoteModal addNote={addNote} csrftoken={csfrtoken} user_id={user_id}/>}
      {deleteNoteModal && <DeleteNoteModal item={item} deleteNote={deleteNote} cancelDeleting={cancelDeleting}/>}
      {successModal && <Modal turnOff={turnOff} info="Success"/>}
      {failureModal && <Modal turnOff={turnOff} info="Failure"/>}
    </Container>
  )
}

export default NotesMenu